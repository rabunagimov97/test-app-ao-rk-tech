import { ActionKind, IAction } from "./actions";
import { ActionCheckboxType, IState } from "./types";


export const initialState: IState = {
  actions: {
    isEnabled: true,
    isAutoRefreshActived: false
  },
  data: {
    isLoading: false
  }
}

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ActionKind.fetchData:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: true
        }
      };
    case ActionKind.fetchFinished:
      return {
        ...state,
        data: {
          catImageData: action.payload,
          isLoading: false
        }
      };
    case ActionKind.fetchFailed:
      return {
        ...state,
        data: {
          isLoading: false,
          error: action.payload,
        }
      };
    case ActionKind.actionCheckboxChecked:
      const { actionType, checked } = action.payload
      let { isEnabled, isAutoRefreshActived } = state.actions
      if (actionType === ActionCheckboxType.enabled) {
        isEnabled = checked
      } else if (actionType === ActionCheckboxType.autoRefresh) {
        isAutoRefreshActived = checked
      }

      return {
        ...state,
        actions: {
          isEnabled,
          isAutoRefreshActived,
        }
      };

    default:
      throw new Error();
  }
}

export default reducer