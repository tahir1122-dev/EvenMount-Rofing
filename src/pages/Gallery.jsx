import { Link } from 'react-router-dom'
import './Gallery.css'

export default function GalleryPage() {
  const images = [
    '/buildingservice-1.webp',
    '/buildingservice-2.webp',
    '/wall-page-1.webp',
    '/wall-images-2.webp',
    '/Home-Banner.jpg',
    '/buildingservice-1.webp',
    '/wall-page-1.webp',
    '/buildingservice-2.webp',
    '/wall-images-2.webp',
    '/Home-Banner.jpg',
    '/buildingservice-1.webp',
    '/wall-page-1.webp',
    '/wall-images-2.webp',
    '/buildingservice-2.webp',
    '/Home-Banner.jpg',
    '/buildingservice-2.webp',
    '/buildingservice-1.webp',
    '/wall-images-2.webp',
    '/Home-Banner.jpg',
    '/buildingservice-1.webp',
    '/wall-page-1.webp',
    '/wall-images-2.webp',
    'https://asaproofingandbuilding.co.uk/wp-content/uploads/2026/04/DSC04710-scaled.jpg',
    'https://asaproofingandbuilding.co.uk/wp-content/uploads/2026/04/DSC04573-scaled.jpg'
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
