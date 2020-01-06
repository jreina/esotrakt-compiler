import { IOperatorEvaluator } from "./IOperatorEvaluator";
import { operators, operatorKeys } from "../tokens";
import { NullTargetException } from "../errors/NullTargetException";
import _ from "lodash";
import { InvalidReferencexception } from "../errors/InvalidReferenceException";

export const linkRef: IOperatorEvaluator = (target, source, operations) => {
  if (target === null) throw new NullTargetException("Target is null.");

  const tags = operations
    .filter(op => operators[operatorKeys.ref].includes(op.operator)) // it's a reference
    .filter(
      op =>
        source.operation.m2 !== source.operation.id &&
        op.id === source.operation.m2
    );

  if (target.tags === undefined) target.tags = tags;
  else target.tags.push(...tags);

  return target;
};
