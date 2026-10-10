import { Link } from 'react-router-dom'
import './Gallery.css'

export default function GalleryPage() {
  const images = [
    '/gallery6.jpg',
    '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/wall-page-1.webp',
    '/wall-images-2.webp',
    '/gallery6.jpg',
    '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/wall-page-1.webp',
    '/wall-images-2.webp',
    '/gallery6.jpg',
    '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/wall-page-1.webp',
    '/wall-images-2.webp',
    '/gallery6.jpg',
    '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/wall-page-1.webp',
    '/wall-images-2.webp'
  ]

  return (
    <main className="gallery-page">
      <div className="gallery-page__header">
        <h1 className="gallery-page__title">GALLERY</h1>
      </div>
      
      <div className="container gallery-page__inner">
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                loading="lazy" 
                onError={(e) => { e.target.src = '/Home-Banner.jpg' }} 
              />
              <div className="gallery-item__overlay">
                <span className="gallery-item__icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
