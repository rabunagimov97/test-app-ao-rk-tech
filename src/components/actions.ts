import { ActionCheckboxType, IData } from "./types";


export enum ActionKind {
  fetchData = "FETCH_DATA",
  fetchFinished = "FETCH_FINISHED",
  fetchFailed = "FETCH_FAILED",
  actionCheckboxChecked = "ACTION_CHECKBOX_CHECKED",
}

export interface IAction {
  type: ActionKind;
  payload?: any;
}

export const fetchData = () => ({ type: ActionKind.fetchData })

export const fetchFinished = (data: IData) => ({ type: ActionKind.fetchFinished, payload: data })

export const fetchFailed = (error: string) => ({ type: ActionKind.fetchFailed, payload: error })

export const actionCheckboxChecked = ({ checked, actionType }: { checked: boolean, actionType: ActionCheckboxType }) =>
  ({ type: ActionKind.actionCheckboxChecked, payload: { actionType, checked } })


