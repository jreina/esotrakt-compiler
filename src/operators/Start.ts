import { IOperatorEvaluator } from "./IOperatorEvaluator";
import _ from "lodash";
import { NullTargetException } from "../errors/NullTargetException";

export const start: IOperatorEvaluator = (target, source) => {
  if(target === null) throw new NullTargetException("Target is null.");
  target.start = source.operation.datetime.toISOString();
  return target;
};
