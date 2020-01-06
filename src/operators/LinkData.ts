import { IOperatorEvaluator } from "./IOperatorEvaluator";
import { NullTargetException } from "../errors/NullTargetException";
import _ from "lodash";

export const linkData: IOperatorEvaluator = (target, source) => {
  if (target === null) throw new NullTargetException("Target is null.");

  target.time = source.operation.datetime;
  if (target.data) target.tags.push(source.operation.m2);
  else target.data = [source.operation.m2];
  
  return target;
};
