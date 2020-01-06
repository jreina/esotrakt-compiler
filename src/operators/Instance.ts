import { IOperatorEvaluator } from "./IOperatorEvaluator";
import _ from "lodash";
import { NullTargetException } from "../errors/NullTargetException";

export const instance: IOperatorEvaluator = (target, source) => {
  if(target === null) throw new NullTargetException("Target is null.");
  target.time = source.operation.datetime;
  return target;
};
