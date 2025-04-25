import { ActionDispatch } from "react"
import { IAction } from "./actions"


export interface IData {
  id: string
  url: string
  width: number
  height: number
  breeds: []
}

export interface IState {
  actions: {
    isEnabled: boolean
    isAutoRefreshActived: boolean
  }
  data: {
    catImageData?: IData
    isLoading: boolean
    error?: string
  }
}

export enum ActionCheckboxType {
  enabled = 'ENABLED',
  autoRefresh = 'AUTO_REFRESH'
}

export interface IStorage {
  state: IState
  dispatch: ActionDispatch<[action: IAction]>
}
