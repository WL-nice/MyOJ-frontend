/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseListTeamUserVo } from "../models/BaseResponseListTeamUserVo";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageTeam } from "../models/BaseResponsePageTeam";
import type { BaseResponseTeam } from "../models/BaseResponseTeam";
import type { TeamAddRequest } from "../models/TeamAddRequest";
import type { TeamJoinRequest } from "../models/TeamJoinRequest";
import type { TeamQuery } from "../models/TeamQuery";
import type { TeamQuitRequest } from "../models/TeamQuitRequest";
import type { TeamUpdateRequest } from "../models/TeamUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TeamControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateTeam(
    requestBody: TeamUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/team/update",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static quitTeam(
    requestBody: TeamQuitRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/team/quit",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseListTeamUserVo OK
   * @throws ApiError
   */
  public static listMyJoinTeams(
    requestBody: TeamQuery
  ): CancelablePromise<BaseResponseListTeamUserVo> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/team/list/my/join",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseListTeamUserVo OK
   * @throws ApiError
   */
  public static listMyCreateTeams(
    requestBody: TeamQuery
  ): CancelablePromise<BaseResponseListTeamUserVo> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/team/list/my/create",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static joinTeam(
    requestBody: TeamJoinRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/team/join",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param teamId
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteTeam(
    teamId: number
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/team/delete",
      query: {
        teamId: teamId,
      },
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static addTeam(
    requestBody: TeamAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/team/add",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param teamQuery
   * @returns BaseResponseListTeamUserVo OK
   * @throws ApiError
   */
  public static listTeams(
    teamQuery: TeamQuery
  ): CancelablePromise<BaseResponseListTeamUserVo> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/team/list",
      query: {
        teamQuery: teamQuery,
      },
    });
  }

  /**
   * @param teamQuery
   * @returns BaseResponsePageTeam OK
   * @throws ApiError
   */
  public static listTeamsByPage(
    teamQuery: TeamQuery
  ): CancelablePromise<BaseResponsePageTeam> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/team/list/page",
      query: {
        teamQuery: teamQuery,
      },
    });
  }

  /**
   * @param id
   * @returns BaseResponseTeam OK
   * @throws ApiError
   */
  public static getTeam(id: number): CancelablePromise<BaseResponseTeam> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/team/get",
      query: {
        id: id,
      },
    });
  }
}
