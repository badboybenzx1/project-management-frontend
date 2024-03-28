import { ColumnTypes } from "./enums";

export interface OrderProps {
  id: number;
  title: string;
  desc: string;
  column?: ColumnTypes;
}

export interface dragItem {
  index: number;
  id: OrderProps["id"];
}

export interface IProduct {
  id: number;
  name: string;
  start?: Date;
  end?: Date;
  subtasks: string[];

  // material?: string;
  description?: string;
  column?: ColumnTypes.ORDERS;
}
