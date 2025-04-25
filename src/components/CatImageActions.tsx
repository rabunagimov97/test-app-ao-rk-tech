import { BaseSyntheticEvent, useEffect } from 'react';
import { actionCheckboxChecked, fetchData } from './actions';
import { ActionCheckboxType, IStorage } from './types';


function CatImageActions({ storage }: { storage: IStorage }) {
  const { state, dispatch } = storage
  const { actions: { isAutoRefreshActived, isEnabled } } = state

  useEffect(() => {
    if (!isEnabled) dispatch(actionCheckboxChecked({ actionType: ActionCheckboxType.autoRefresh, checked: false }))
  }, [isEnabled, dispatch])

  useEffect(() => {
    let interval: NodeJS.Timer
    if (isAutoRefreshActived) interval = setInterval(() => dispatch(fetchData()), 5000)
    return () => clearInterval(interval)
  }, [isAutoRefreshActived, dispatch])


  const onActionCheckboxChanged = (event: BaseSyntheticEvent, actionType: ActionCheckboxType) => 
    dispatch(actionCheckboxChecked({ actionType, checked: event.target.checked }))

  return (
    <div className="cat-image-actions">
      <div>
        <input type="checkbox" name="enabled" onChange={(e) => onActionCheckboxChanged(e, ActionCheckboxType.enabled)} checked={isEnabled} />
        <label htmlFor="enabled">Enabled</label>
      </div>
      <div>
        <input type="checkbox" name="refresh" onChange={(e) => onActionCheckboxChanged(e, ActionCheckboxType.autoRefresh)} disabled={!isEnabled} checked={isAutoRefreshActived} />
        <label htmlFor="refresh">Auto-refresh every 5 second</label>
      </div>
    </div>
  )
}

export default CatImageActions
