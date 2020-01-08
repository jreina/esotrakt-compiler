import { IOperatorEvaluator } from "./IOperatorEvaluator";
import { NullTargetException } from "../errors/NullTargetException";
import _ from "lodash";
import { operators, operatorKeys } from "../tokens";

export const linkData: IOperatorEvaluator = (target, source, ops, parent) => {
  if (target === null) throw new NullTargetException("Target is null.");
  if (
    parent &&
    operators[operatorKeys.linkData].includes(parent.operation.operator)
  )
    return target;

  target.time = source.operation.datetime;
  if (target.data) target.data.push(source.operation.m2);
  else target.data = [source.operation.m2];

  return target;
};
