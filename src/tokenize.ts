import { Operation } from "./models/Operation";
import moment from 'moment';

export function tokenize(contents: string): Array<Operation> {
  return contents
    .split("\n")
    .map(x => x.split("::"))
    .map(([id, datetime, operator, m1, m2 = null]) => ({
      id,
      datetime: moment(parseInt(datetime)),
      operator,
      m1,
      m2
    }));
}
