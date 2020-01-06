import { operatorMap } from "./operators/operatorMap";
import { Node } from "./models/Node";
import { Operation } from "./models/Operation";
import _ from "lodash";
import { parse } from "./parser";
import { tokenize } from "./tokenize";

function compileNode(
  node: Node,
  rawOperators: Array<Operation>,
  target: { [key: string]: any } = {},
  parent: Node | null = null
): { [key: string]: any } {
  const current = operatorMap[node.operation.operator](
    target,
    node,
    rawOperators,
    parent
  );
  return node.modifiers.length === 0
    ? target
    : node.modifiers.reduce(
        (memo, val) => compileNode(val, rawOperators, memo, node),
        current
      );
}

export function compile(contents: string): Array<{ [key: string]: any }> {
  const tokens = tokenize(contents);
  const parsed = parse(tokens);

  const instances = _.flatMap(parsed, entry =>
    entry.modifiers.map(modifier =>
      compileNode(modifier, tokens, { title: entry.operation.m1 })
    )
  );
  return instances;
}
