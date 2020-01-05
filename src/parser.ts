import { tokenize } from "./tokenize";
import { operators, operatorKeys } from "./tokens";
import { Operation } from "./models/Operation";
import { Node } from "./models/Node";

function resolveNode(target: Operation, ops: Array<Operation>): Node {
  const modifiers = ops.filter(
    op => op.m1 === target.id || op.m2 === target.id
  );
  return modifiers.length === 0
    ? { operation: target, modifiers: [] }
    : {
        operation: target,
        modifiers: modifiers.map(op => resolveNode(op, ops))
      };
}

export function parse(contents: string): Array<Node> {
  const tokens = tokenize(contents);
  const refs = tokens.filter(({ operator }) =>
    operators[operatorKeys.ref].includes(operator)
  );
  return refs
    .map(ref => resolveNode(ref, tokens));
}
