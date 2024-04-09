/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVo } from "./UserVo";

export type TeamUserVo = {
  id?: number;
  teamName?: string;
  description?: string;
  expireTime?: string;
  userId?: number;
  maxNum?: number;
  teamStatus?: number;
  createTime?: string;
  updateTime?: string;
  createUser?: UserVo;
  hasJoin?: boolean;
  hasJoinNum?: number;
};

