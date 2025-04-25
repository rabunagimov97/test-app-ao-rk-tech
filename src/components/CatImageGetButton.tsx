import { fetchData } from "./actions"
import { IStorage } from "./types"


const CatImageGetButton = ({ storage }: { storage: IStorage }) => {
  const { state, dispatch } = storage
  const { actions: { isEnabled } } = state

  return <button
    className="cat-image-get-button"
    onClick={() => dispatch(fetchData())}
    disabled={!isEnabled}
  >
    Get cat
  </button>
}

export default CatImageGetButton