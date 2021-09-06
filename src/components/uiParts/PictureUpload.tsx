import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import type { CustomFile } from '../../types/global'

type Props = {
  files: CustomFile[]
  setFiles: React.Dispatch<React.SetStateAction<CustomFile[]>>
}

export const PictureUpload: React.FC<Props> = ({ files, setFiles }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <div>
      <div className="card bg-neutral">
        <div {...getRootProps()} className="p-24">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>ファイルをこちらにドロップ</p>
          ) : (
            <p>
              ファイルをドラッグ＆ドロップするか、クリックしてファイルをアップロードしてください
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
