import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Gallery.css'

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const images = [
    '/gallerynew.jpg',
    '/gallerynew2.jpg',
    '/gallerynew3.jpg',
    '/gallerynew4.jpg',
    '/gallerynew5.jpg',
    '/gallery6.jpg',
    '/gallery7.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/service2.jpg',
    '/wall-page-1.webp',
    '/wall-images-2.webp',
    '/dryfix.jpg',
    '/flat-roof.jpg',
    '/wallcladding.jpg',
    '/new-2.jpg'
  ]

  const openModal = (index) => setSelectedIndex(index)
  const closeModal = () => setSelectedIndex(null)

  const showNext = (e) => {
    e?.stopPropagation()
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const showPrev = (e) => {
    e?.stopPropagation()
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  return (
    <main className="gallery-page">
      <div className="gallery-page__header">
        <h1 className="gallery-page__title">GALLERY</h1>
      </div>
      
      <div className="container gallery-page__inner">
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div 
              className="gallery-item" 
              key={i}
              onClick={() => openModal(i)}
            >
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

      {selectedIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <button className="gallery-modal__close" onClick={closeModal} aria-label="Close">
            <X size={32} />
          </button>
          <button className="gallery-modal__nav gallery-modal__nav--prev" onClick={showPrev} aria-label="Previous">
            <ChevronLeft size={36} />
          </button>
          <div className="gallery-modal__content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[selectedIndex]} 
              alt={`Gallery image ${selectedIndex + 1}`} 
              className="gallery-modal__img"
            />
            <div className="gallery-modal__counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
          <button className="gallery-modal__nav gallery-modal__nav--next" onClick={showNext} aria-label="Next">
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </main>
  )
}

