import { useEffect } from 'react'
import { CatImageActions, CatImageGetButton, CatImage } from './'
import { fetchFailed, fetchFinished } from './actions'
import { useStorage } from './hooks'
import { fetchCatImageData, parseCatImageData } from './helpers'
import './styles.scss'


function CatImageBlock() {
  const storage = useStorage()
  const { state, dispatch } = storage
  const { data: { isLoading, error } } = state

  useEffect(() => {
    if (isLoading) {
      fetchCatImageData()
        .then(response => response.text())
        .then((result) => dispatch(fetchFinished(parseCatImageData(result))))
        .catch(error => dispatch(fetchFailed(error)))
    }
  }, [isLoading, dispatch])

  return (
    <div className="cat-image-block">
      {[CatImageActions, CatImageGetButton, CatImage]
        .map((Component, index) => <Component key={index} storage={storage} />)}
      {!!error && <div>{error}</div>}
    </div>
  )
}

export default CatImageBlock;
