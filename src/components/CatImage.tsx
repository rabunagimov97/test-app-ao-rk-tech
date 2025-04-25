import { IStorage } from "./types"


const CatImage = ({ storage }: { storage: IStorage }) => {
  const { state } = storage
  const { data: { catImageData } } = state

  return <>{catImageData && <img src={catImageData!.url} alt="cat" />}</>
}

export default CatImage