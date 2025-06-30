import dayjs from "dayjs";
import { ITableData } from "../interfaces/interfaces";

export const dataSource: ITableData[] = [
  {
    key: "1",
    name: "Mike",
    date: dayjs().format("DD.MM.YYYY"),
    numberValue: 564,
  },
  {
    key: "2",
    name: "John",
    date: dayjs().format("DD.MM.YYYY"),
    numberValue: 285,
  },
];
