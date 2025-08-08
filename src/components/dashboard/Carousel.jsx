import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Nav from '../Navbar/Nav';
import Productpage from '../Buses/productPage';
import Footer from '../Navbar/Footer';
import './Carousel.css'

export const Carousel = ({
  slides,
  autoplay = true,
  autoplayInterval = 4000,
  showDots = true,
  showArrows = true,
  showProgress = true,
  pauseOnHover = true,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  const autoplayRef = useRef();
  const progressRef = useRef();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  // Progress tracking
  useEffect(() => {
    if (isPlaying && autoplay && !isDragging) {
      const interval = 50;
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (interval / autoplayInterval) * 100;
          if (newProgress >= 100) {
            return 0;
          }
          return newProgress;
        });
      }, interval);
    } else {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    }

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [isPlaying, autoplay, autoplayInterval, isDragging]);

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying && autoplay && !isDragging) {
      autoplayRef.current = setInterval(nextSlide, autoplayInterval);
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPlaying, autoplay, nextSlide, autoplayInterval, isDragging]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isPlaying]);

  // Touch/swipe support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setTranslateX(-diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTranslateX(0);
  };

  // Mouse drag support
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    setTranslateX(-diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTranslateX(0);
  };

  // const handleMouseLeave = () => {
  //   if (isDragging) {
  //     handleMouseUp();
  //   }
  // };

  return (
    <div>
      
      
      <div className={`carousel relative bg-red-200 w-full h-[650px] overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100  shadow-2xl border border-orange-200 ${className}`}>
        {/* Main carousel container */}
        <div
          ref={carouselRef}
          className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          // onMouseLeave={handleMouseLeave}
          onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
        // onMouseLeave={() => {
        //   if (!isDragging && pauseOnHover && autoplay) setIsPlaying(true);
        // }}
        >
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${-currentSlide * 100 + (translateX / (carouselRef.current?.offsetWidth || 1)) * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full h-full flex-shrink-0 relative"
              >
                {/* Background image with parallax effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${index === currentSlide ? 'scale-105' : 'scale-100'
                      }`}
                    draggable={false}
                  />
                </div>

                {/* Mango-themed gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-yellow-800/60 to-transparent" />

                {/* Content with slide-in animation */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-6 md:px-12">
                    <div className={`max-w-2xl text-white transition-all duration-1000 ${index === currentSlide
                        ? 'transform translate-x-0 opacity-100'
                        : 'transform -translate-x-8 opacity-0'
                      }`}>
                      <h3 className="text-sm md:text-base font-medium text-yellow-300 mb-3 tracking-wide uppercase animate-fade-in flex items-center gap-2">
                        🥭 {slide.subtitle}
                      </h3>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                        {slide.title}
                      </h2>
                      <p className="text-base md:text-lg lg:text-xl text-orange-100 mb-6 md:mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      {slide.cta && (
                        <button
                          onClick={slide.cta.action}
                          className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-white/20 text-sm md:text-base"
                        >
                          {slide.cta.text} 🛒
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        {showArrows && slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-orange-500/20 hover:bg-orange-500/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group border border-orange-300/30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-orange-500/20 hover:bg-orange-500/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group border border-orange-300/30"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </button>
          </>
        )}

        {/* Enhanced dot indicators with progress rings */}
        {showDots && slides.length > 1 && (
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 md:space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Progress ring for current slide */}
                {index === currentSlide && showProgress && (
                  <svg className="absolute inset-0 w-5 h-5 md:w-6 md:h-6 -rotate-90">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#f97316"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 10}`}
                      strokeDashoffset={`${2 * Math.PI * 10 * (1 - progress / 100)}`}
                      className="transition-all duration-100 ease-linear"
                    />
                  </svg>
                )}

                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-orange-400 scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-orange-300/75 group-hover:scale-110'
                  }`} />
              </button>
            ))}
          </div>
        )}

        {/* Enhanced play/pause button */}
        {/* {autoplay && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-3 md:top-6 right-3 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 hover:bg-orange-500/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-orange-300/30"
            aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
            )}
          </button>
        )} */}

        {/* Enhanced progress bar */}
        {/* {showProgress && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-200/50">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-yellow-500 transition-all duration-100 ease-linear"
              style={{ width: `${((currentSlide) / slides.length) * 100 + (progress / slides.length)}%` }}
            />
          </div>
        )} */}

        {/* Slide counter */}
        <div className="absolute top-3 lg:top-6 left-3 lg:left-6 px-2 lg:px-3 py-1 bg-orange-500/20 backdrop-blur-md rounded-full text-white text-xs lg:text-sm font-medium border border-orange-300/30">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
      <Productpage/>
      <Footer/>
    </div>
  );
};