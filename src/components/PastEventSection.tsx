import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext, 
  type CarouselApi 
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, X, Maximize2, ArrowUpRight } from 'lucide-react';

const photos = [
  { id: 1, filename: 'IMG_0780.webp' },
  { id: 2, filename: '20251121_095507.webp' },
  { id: 3, filename: '20251121_102543.webp' },
  { id: 4, filename: '20251121_103634.webp' },
  { id: 5, filename: 'IMG_0435.webp' },
  { id: 6, filename: 'IMG_0496.webp' },
  { id: 7, filename: 'IMG_0499.webp' },
  { id: 8, filename: 'IMG_0501.webp' },
  { id: 9, filename: 'IMG_0561.webp' },
  { id: 10, filename: 'IMG_0631.webp' },
  { id: 11, filename: 'IMG_0714.webp' }
];

const PastEventSection: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const getImageUrl = (filename: string) => {
    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}ISoE 2025/${encodeURIComponent(filename)}`;
  };

  // Carousel API state and events
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-slide effect
  useEffect(() => {
    if (!api || activePhotoIndex !== null) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [api, activePhotoIndex]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === null || prev === 0 ? photos.length - 1 : prev - 1));
    }
  }, [activePhotoIndex]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === null || prev === photos.length - 1 ? 0 : prev + 1));
    }
  }, [activePhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  return (
    <section id="past-events" className="scroll-mt-24 animate-fade-in space-y-16">
      {/* Overview Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">International Symposium on Engineering</h2>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">(ISoE 2025)</h2>
        <p className="text-lg sm:text-xl text-accent font-semibold">Advances and Innovations in Engineering for a Sustainable Future</p>
      </div>

      {/* Premium Institutional Publication Feature */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl bg-card border border-border/80 shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12 space-y-5 text-center sm:text-left">
            {/* Eyebrow */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-accent uppercase font-mono">
                OFFICIAL CONFERENCE PUBLICATION
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
              ISoE 2025 Souvenir
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
              Explore the official e-souvenir of the International Symposium on Engineering (ISoE 2025), featuring abstracts from participating students and researchers, along with academic contributions from the symposium community at the School of Engineering, Jawaharlal Nehru University.
               </p>

            {/* Primary CTA */}
            <div className="pt-2 flex justify-center sm:justify-start">
              <a
                href={`${import.meta.env.BASE_URL}ISOE-2025-SOUVENIR.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-sm hover:bg-primary/95 hover:shadow-elegant transition-all duration-300 cursor-pointer"
              >
                <span>View Souvenir</span>
                <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Photo Gallery Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">ISoE 2025 Gallery</h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Event glimpses and moments from the symposium
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-12 relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {photos.map((photo, index) => (
                <CarouselItem key={photo.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card 
                    onClick={() => setActivePhotoIndex(index)}
                    className="shadow-card hover-scale transition-smooth cursor-pointer overflow-hidden group bg-card border border-border/80"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={getImageUrl(photo.filename)}
                        alt="ISoE 2025 Glimpse"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="p-2 rounded-full bg-card/90 shadow-md text-primary">
                          <Maximize2 className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-4 sm:-left-6 bg-card hover:bg-secondary text-primary border border-border shadow-card h-10 w-10" />
            <CarouselNext className="-right-4 sm:-right-6 bg-card hover:bg-secondary text-primary border border-border shadow-card h-10 w-10" />
          </Carousel>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index + 1
                    ? 'w-6 h-2 bg-accent'
                    : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card/80 text-foreground hover:bg-card transition-smooth shadow-lg cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-card/80 text-foreground hover:bg-card transition-smooth shadow-lg cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-card/80 text-foreground hover:bg-card transition-smooth shadow-lg cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <div 
            className="relative max-w-4xl w-full bg-card rounded-xl overflow-hidden shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={getImageUrl(photos[activePhotoIndex].filename)}
                alt="ISoE 2025 Full View"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-3 sm:p-4 bg-card border-t border-border flex items-center justify-between">
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                Photo {activePhotoIndex + 1} of {photos.length}
              </div>
              <a
                href={getImageUrl(photos[activePhotoIndex].filename)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary hover:text-accent transition-colors"
              >
                Open Full Size
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PastEventSection;
