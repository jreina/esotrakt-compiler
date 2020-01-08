import { Node } from "../models/Node";
import { Operation } from "../models/Operation";

export type IOperatorEvaluator = (
  target: { [key: string]: any } | null,
  source: Node,
  operations: Array<Operation>,
  parent: Node | null
) => { [key: string]: any };
