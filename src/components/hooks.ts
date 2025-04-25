import { useReducer } from "react"
import reducer, { initialState } from "./reducer"
import { IStorage } from "./types"


export const useStorage = (): IStorage => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return ({ state, dispatch })
}

