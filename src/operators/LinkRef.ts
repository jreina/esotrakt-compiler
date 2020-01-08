import { IOperatorEvaluator } from "./IOperatorEvaluator";
import { operators, operatorKeys } from "../tokens";
import { NullTargetException } from "../errors/NullTargetException";
import _ from "lodash";
import { InvalidReferencexception } from "../errors/InvalidReferenceException";

export const linkRef: IOperatorEvaluator = (target, source, operations) => {
  if (target === null) throw new NullTargetException("Target is null.");

  const tags = _(operations)
    .filter(op => operators[operatorKeys.ref].includes(op.operator)) // it's a reference
    .filter(
      op =>
        source.operation.m2 !== source.operation.id &&
        op.id === source.operation.m2
    )
    .map(op => op.m1)
    .concat(target.tags ? target.tags : [])
    .uniq()
    .value();

  target.tags = tags;

  return target;
};
