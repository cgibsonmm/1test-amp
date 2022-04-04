import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
