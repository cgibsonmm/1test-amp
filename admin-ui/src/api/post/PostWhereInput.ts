import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  body?: StringFilter;
  id?: StringFilter;
  title?: StringFilter;
};
