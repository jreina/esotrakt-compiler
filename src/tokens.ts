export const operatorKeys = {
  ref: "ref",
  start: "start",
  end: "end",
  linkRef: "linkRef",
  linkData: "linkData",
  timeOverride: "timeOverride",
  instance: "instance"
};

export const operators: { [key: string]: Array<string> } = {
  [operatorKeys.ref]: ["*", "R"],
  [operatorKeys.start]: ["_", "S"],
  [operatorKeys.end]: [".", "E"],
  [operatorKeys.linkRef]: [">", "L"],
  [operatorKeys.linkData]: [">>", "l"],
  [operatorKeys.timeOverride]: ["<", "T"],
  [operatorKeys.instance]: ["&", "I"]
};

export const binaryOperators = [
  operatorKeys.linkRef,
  operatorKeys.linkData,
  operatorKeys.timeOverride
];
export const unaryOperators = [
  operatorKeys.ref,
  operatorKeys.start,
  operatorKeys.end,
  operatorKeys.instance
];
