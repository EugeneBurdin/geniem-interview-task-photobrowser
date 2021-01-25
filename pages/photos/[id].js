import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectPhotos } from '../../lib/slices/photosSlice'


export default () => {
    const router = useRouter()
    const { error, photos } = useSelector(selectPhotos)
    const { id } = router.query
    const imageData = photos[id - 1]

    return (
        <div className="section">
            <div className="container">
                <div className="grid">
                    {imageData ?
                        <>
                            <h1>{imageData.title}</h1>,
                            <img src={imageData.url} />
                        </>
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}