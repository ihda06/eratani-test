export interface ServerMetaResponse {
    http_code: string;
  }
  
  type ServerErrorField = {
    field: string;
    message: string;
  };
  
  export interface ServerErrorResponse<
    T = Array<ServerErrorField>,
    K = ServerMetaResponse,
  > {
    errors: T;
    meta: K;
  }
  
  export interface ServerResponse<T, K = ServerMetaResponse> {
    data: T;
    meta: K;
  }
  
  export interface ServerResetPasswordResponse<K = ServerMetaResponse> {
    message: string;
    meta: K;
  }
  
  export type PaginateMetaResponse = {
    total: number;
    limit: number;
  };
  