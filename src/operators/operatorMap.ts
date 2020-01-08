import { operatorKeys, operators } from "../tokens";
import { reference } from "./Reference";
import { IOperatorEvaluator } from "./IOperatorEvaluator";
import { instance } from "./Instance";
import { end } from "./End";
import { linkData } from "./LinkData";
import { linkRef } from "./LinkRef";
import { start } from "./Start";
import { timeOverride } from "./TimeOverride";

const map: Array<[Array<string>, IOperatorEvaluator]> = [
  [operators[operatorKeys.end], end],
  [operators[operatorKeys.instance], instance],
  [operators[operatorKeys.linkData], linkData],
  [operators[operatorKeys.linkRef], linkRef],
  [operators[operatorKeys.start], start],
  [operators[operatorKeys.ref], reference],
  [operators[operatorKeys.timeOverride], timeOverride]
];

export const operatorMap = map.reduce<{ [key: string]: IOperatorEvaluator }>(
  (memo, [opList, evaluator]) => {
    opList.reduce((memo, val) => {
      memo[val] = evaluator;
      return memo;
    }, memo);
    return memo;
  },
  {}
);
