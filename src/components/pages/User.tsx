import { useState } from 'react'
import type { CustomFile } from '../../types/global'
import { PictureCard } from '../uiParts/PictureCard'
import { PictureUpload } from '../uiParts/PictureUpload'

export const User: React.FC = () => {
  const [files, setFiles] = useState<CustomFile[]>([])

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1">
          <PictureUpload files={files} setFiles={setFiles} />

          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {files.map((file, i) => (
                <div key={i} className="mb-2">
                  <PictureCard src={file.preview} name={file.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
