import axios from "axios";

export const axiosinstance = axios.create({
  baseURL: "https://s0pterest.shop/api/v1",
  withCredentials: true,
});

axiosinstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export const axiosMediaInstance = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
  baseURL: "https://s0pterest.shop/api/v1",
  withCredentials: true,
});

axiosMediaInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export interface NetworkInstance {
  get<T>(url: string): Promise<T>;
  post<T>(): Promise<T>;
  put<T>(): Promise<T>;
  delete<T>(): Promise<T>;
}

export class AxiosInstance implements NetworkInstance {
  get<T>(url: string) {
    fetch(url, { method: "get" });
    return {} as Promise<T>;
  }
  post<T>() {
    return {} as Promise<T>;
  }
  put<T>() {
    return {} as Promise<T>;
  }
  delete<T>() {
    return {} as Promise<T>;
  }
}

export class MockInstance implements NetworkInstance {
  get<T>() {
    return {} as Promise<T>;
  }
  post<T>() {
    return {} as Promise<T>;
  }
  put<T>() {
    return {} as Promise<T>;
  }
  delete<T>() {
    return {} as Promise<T>;
  }
}

export interface NetworkService {
  _networkCore: NetworkInstance;
}

export class MockNetworkService implements NetworkService {
  _networkCore: NetworkInstance;
  constructor() {
    this._networkCore = new MockInstance();
  }
}

export class APINetworkService implements NetworkService {
  _networkCore: NetworkInstance;
  constructor() {
    this._networkCore = new AxiosInstance();
  }
}
