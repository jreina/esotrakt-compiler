import { IOperatorEvaluator } from "./IOperatorEvaluator";
import _ from "lodash";
import { NullTargetException } from "../errors/NullTargetException";
import { NullParentException } from "../errors/NullParentException";
import { operators, operatorKeys } from "../tokens";
import moment from "moment";
import { MissingOperandException } from "../errors/MissingOperandException";

export const timeOverride: IOperatorEvaluator = (target, source, ops, parent) => {
  if(target === null) throw new NullTargetException("Target is null.");
  if(parent === null) throw new NullParentException("Parent is null.");
  if(source.operation.m2 === null) throw new MissingOperandException("Missing second operand of binary operator.")
  const isStart = operators[operatorKeys.start].includes(source.operation.operator);
  const value = moment(source.operation.m2, ["MM/DD/YYYY HH:mm", "MM/DD/YYYY"]);
  if(isStart) target.start = value;
  else target.end = value;
  return target;
};
