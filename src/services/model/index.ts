export type ServiceResult<T> = ServiceSuccessResult<T> | ServiceFailResult;

interface ServiceSuccessResult<T> {
  isSuccess: true;
  data: T;
}

interface ServiceFailResult {
  isSuccess: false;
  error: {
    message: string;
  };
}
