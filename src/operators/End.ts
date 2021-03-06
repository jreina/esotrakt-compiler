import { IOperatorEvaluator } from "./IOperatorEvaluator";
import _ from "lodash";
import { NullTargetException } from "../errors/NullTargetException";

export const end: IOperatorEvaluator = (target, source) => {
  if (target === null) throw new NullTargetException("Target is null.");
  target.end = source.operation.datetime.toISOString();
  return target;
};
