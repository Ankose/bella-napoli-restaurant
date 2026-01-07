import React, { useState } from 'react';
import { Instagram, X } from 'lucide-react';
import { Dialog, DialogContent } from '../components/ui/dialog';

const galleryPhotos = [
  { id: 1, src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", title: "Margherita Pizza" },
  { id: 2, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", title: "Chef Tossing Dough" },
  { id: 3, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", title: "Romantic Table Setting" },
  { id: 4, src: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?w=600&q=80", title: "Fresh Burrata" },
  { id: 5, src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80", title: "Wood-Fired Oven" },
  { id: 6, src: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80", title: "Fresh Pasta" },
  { id: 7, src: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80", title: "Antipasti Platter" },
  { id: 8, src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80", title: "Tiramisu" },
  { id: 9, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", title: "Restaurant Interior" },
  { id: 10, src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", title: "Hands Kneading Dough" },
  { id: 11, src: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=600&q=80", title: "Wine Cellar" },
  { id: 12, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", title: "Outdoor Terrace" },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#DAA520] text-sm font-bold tracking-[3px] uppercase mb-3">
            GALLERY
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold text-[#FFFEF0] mb-4">
            Moments at Bella Napoli
          </h2>
          <p className="text-[#F5E6D3] text-lg font-light">
            A taste of Italy in every photo
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="overlay">
                <span className="text-white font-['Playfair_Display'] text-lg">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Button */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/bellanapoli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#2C2C2C] transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Follow @BellaNapoli on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal - FIXED with close button */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-['Playfair_Display'] text-2xl">
                  {selectedImage.title}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};