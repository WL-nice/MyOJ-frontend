/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageQuestionSubmit } from "../models/BaseResponsePageQuestionSubmit";
import type { QuestionSubmitAddRequest } from "../models/QuestionSubmitAddRequest";
import type { QuestionSubmitQueryRequest } from "../models/QuestionSubmitQueryRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class QuestionSubmitControllerService {
  /**
   * @param requestBody
   * @returns BaseResponsePageQuestionSubmit OK
   * @throws ApiError
   */
  public static listQuestionByPage(
    requestBody: QuestionSubmitQueryRequest
  ): CancelablePromise<BaseResponsePageQuestionSubmit> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/questionSubmit/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static doQuestionSubmit(
    requestBody: QuestionSubmitAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/questionSubmit/",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
