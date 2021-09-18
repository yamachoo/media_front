import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../constants'
import { getPictures } from '../../server/api/pictures'
import type { Picture } from '../../types/global'
import { PictureCard } from '../uiParts/PictureCard'

export const Home: React.FC = () => {
  const [pictures, setPictures] = useState([] as Picture[])
  useEffect(() => {
    ;(async () => {
      try {
        const result = await getPictures()
        setPictures(result)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pictures.map((picture, i) => (
            <div key={i} className="mb-2">
              <Link to={`/pictures/${picture.id}`}>
                <PictureCard
                  src={SERVER_URL.concat(picture.path)}
                  name={picture.filename}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
