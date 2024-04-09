/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseInteger } from "../models/BaseResponseInteger";
import type { BaseResponseListUser } from "../models/BaseResponseListUser";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageUser } from "../models/BaseResponsePageUser";
import type { BaseResponsePageUserVo } from "../models/BaseResponsePageUserVo";
import type { BaseResponseUser } from "../models/BaseResponseUser";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { UserLoginRequest } from "../models/UserLoginRequest";
import type { UserQueryRequest } from "../models/UserQueryRequest";
import type { UserRegisterRequest } from "../models/UserRegisterRequest";
import type { UserUpdateRequest } from "../models/UserUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseInteger OK
   * @throws ApiError
   */
  public static updateUser(
    requestBody: UserUpdateRequest
  ): CancelablePromise<BaseResponseInteger> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/update",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static userRegister(
    requestBody: UserRegisterRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/register",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns BaseResponseInteger OK
   * @throws ApiError
   */
  public static userLogout(): CancelablePromise<BaseResponseInteger> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/logout",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseUser OK
   * @throws ApiError
   */
  public static userLogin(
    requestBody: UserLoginRequest
  ): CancelablePromise<BaseResponseUser> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/login",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageUserVo OK
   * @throws ApiError
   */
  public static listUserByPage(
    requestBody: UserQueryRequest
  ): CancelablePromise<BaseResponsePageUserVo> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteUser(
    requestBody: DeleteRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/delete",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param pageSize
   * @param pageNum
   * @returns BaseResponsePageUser OK
   * @throws ApiError
   */
  public static userSearch(
    pageSize: number,
    pageNum: number
  ): CancelablePromise<BaseResponsePageUser> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/search",
      query: {
        pageSize: pageSize,
        pageNum: pageNum,
      },
    });
  }

  /**
   * @param tags
   * @returns BaseResponseListUser OK
   * @throws ApiError
   */
  public static searchUserTags(
    tags: Array<string>
  ): CancelablePromise<BaseResponseListUser> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/search/tags",
      query: {
        tags: tags,
      },
    });
  }

  /**
   * @param num
   * @returns BaseResponseListUser OK
   * @throws ApiError
   */
  public static matchUsers(
    num: number
  ): CancelablePromise<BaseResponseListUser> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/match",
      query: {
        num: num,
      },
    });
  }

  /**
   * @returns BaseResponseUser OK
   * @throws ApiError
   */
  public static getCurrentUser(): CancelablePromise<BaseResponseUser> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/current",
    });
  }
}
