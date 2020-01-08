import { Operation } from "./Operation";

export interface Node {
  operation: Operation;
  modifiers: Array<Node>;
}
