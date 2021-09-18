import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SERVER_URL } from '../../constants'
import { getPicture } from '../../server/api/pictures'
import type { Picture } from '../../types/global'
import { PictureCard } from '../uiParts/PictureCard'

type Id = {
  id: string
}

export const PictureDetail: React.FC = () => {
  const { id } = useParams<Id>()
  const [picture, setPicture] = useState<Picture>()
  useEffect(() => {
    ;(async () => {
      try {
        const result = await getPicture({ id })
        setPicture(result)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [id])

  return (
    <div className="h-screen flex items-center justify-center p-2">
      {picture ? (
        <PictureCard
          src={SERVER_URL.concat(picture.path)}
          name={picture.filename}
        />
      ) : (
        <div>画像が存在しません</div>
      )}
    </div>
  )
}
