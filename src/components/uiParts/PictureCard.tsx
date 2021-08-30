type Props = {
  src: string
  name: string
}

export const PictureCard: React.FC<Props> = ({ src, name }) => {
  return (
    <div className="card">
      <figure>
        <img src={src} alt={name} />
      </figure>
    </div>
  )
}
