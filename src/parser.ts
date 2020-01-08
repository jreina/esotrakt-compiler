import { operators, operatorKeys } from "./tokens";
import { Operation } from "./models/Operation";
import { Node } from "./models/Node";

function resolveNode(target: Operation, ops: Array<Operation>): Node {
  const modifiers = ops.filter(op => op.m1 === target.id);
  return modifiers.length === 0
    ? { operation: target, modifiers: [] }
    : {
        operation: target,
        modifiers: modifiers.map(op => resolveNode(op, ops))
      };
}

function isTagOperation({ operation: { operator } }: Node) {
  return (
    operators[operatorKeys.linkData].includes(operator) ||
    operators[operatorKeys.linkRef].includes(operator)
  );
}

export function parse(tokens: Operation[]): Array<Node> {
  const refs = tokens.filter(({ operator }) =>
    operators[operatorKeys.ref].includes(operator)
  );
  return refs
    .map(ref => resolveNode(ref, tokens))
    .map(refNode => {
      const tagOperations = refNode.modifiers.filter(isTagOperation);
      if (tagOperations.length > 0) {
        refNode.modifiers.filter(node => !isTagOperation(node)).forEach(modifier => {
          modifier.modifiers.push(...tagOperations);
        });
      }
      return refNode;
    });
}
