import { useEffect, useState } from 'react'
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
        {pictures.map((picture, i) => (
          <div key={i} className="mb-4">
            <PictureCard
              src={SERVER_URL.concat('/static/', picture.path)}
              name={picture.filename}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
