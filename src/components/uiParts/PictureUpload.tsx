import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { createPicture } from '../../server/api/pictures'
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
  const upload = async () => {
    try {
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = async () => {
          const r = reader.result as string

          await createPicture({
            filename: file.name.replace(/\..+$/, ''),
            picture: r.slice(r.indexOf(',') + 1)
          })
        }
      }

      setFiles([])
    } catch (error) {
      console.error(error)
    }
  }

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

      <div className="mt-4 flex justify-center">
        <button
          onClick={upload}
          className="btn btn-primary"
          disabled={files.length === 0}
        >
          アップロード
        </button>
      </div>
    </div>
  )
}
