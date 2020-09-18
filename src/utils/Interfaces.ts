export interface iReducerAction {
  type: string;
  payload: object | Array<object>;
}

export interface iReducerState {
  data: object | null;
  error: object | null;
  loading: boolean;
}

export interface iSagaOptions {
  payload: string | object;
  afterSagaSuccess?: void;
  afterSagaFailure?: void;
}

export interface iTask {
  id: number;
  value: string;
  isDone: boolean;
  date: string;
}
