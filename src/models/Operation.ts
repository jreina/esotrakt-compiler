import { Moment } from "moment";
export interface Operation {
  id: string;
  datetime: Moment;
  operator: string;
  m1: string;
  m2: string | null;
}
