import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectPhotos } from '../lib/slices/photosSlice'

export default function Home() {
  const router = useRouter()
  const { error, photos } = useSelector(selectPhotos)

  const imgNavigateOnClick = (e, imgId) => {
    e.preventDefault()
    router.push('photos/' + imgId)
  }

  return (
    <div>
      <Head>
        <title>geniem-interview-task-photobrowser</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="section">
        <div className="container">
          <div className="grid">
            {photos.map(p => <img key={p.id} onClick={(e) => imgNavigateOnClick(e, p.id)} className="picture" src={p.thumbnailUrl} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
