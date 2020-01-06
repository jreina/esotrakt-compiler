import { IOperatorEvaluator } from "./IOperatorEvaluator";
import _ from "lodash";

export const reference: IOperatorEvaluator = (target, source) => {
  return {
    title: source.operation.m1
  };
};
