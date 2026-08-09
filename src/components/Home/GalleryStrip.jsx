import { homeGallery } from '../../data/data.js'

function GalleryStrip() {
  return (
    <section className="bg-primary" aria-label="Photo gallery">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {homeGallery.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={500}
            height={500}
            loading="lazy"
            className="h-56 w-full object-cover md:h-80"
          />
        ))}
      </div>
    </section>
  )
}

export default GalleryStrip
