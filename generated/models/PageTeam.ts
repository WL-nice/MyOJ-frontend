/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from "./OrderItem";
import type { Team } from "./Team";

export type PageTeam = {
  records?: Array<Team>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageTeam;
  searchCount?: PageTeam;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};

