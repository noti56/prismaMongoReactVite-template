import axios, { AxiosHeaders, AxiosInstance } from "axios";
import { appConfig } from "../utills/appConfig";

export class ServerService {
  constructor(inRoute?: string) {
    this.axiosInstance = axios.create({
      baseURL: `${appConfig.baseUrl}${appConfig.routePrefix}${
        inRoute ? inRoute + "/" : ""
      }`,
      headers: this.getHeaders()
    });
    this.axiosInstance.interceptors.request.use((config) => {
      config.headers = this.getHeaders();
      return config;
    });
  }
  protected axiosInstance: AxiosInstance;
  private getHeaders(): AxiosHeaders {
    const headers = new AxiosHeaders();
    const userToken = localStorage.getItem("token") ?? "";
    headers.set("Authorization", `Bearer ${userToken}`);
    return headers;
  }
}
