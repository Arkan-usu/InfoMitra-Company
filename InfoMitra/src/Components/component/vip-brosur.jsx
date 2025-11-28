import { useEffect, useRef, useState } from "react";
import { kotakbanner } from "../data/data-vip-brosur";
import { sebelum, sesudah } from "@/assets/logo";

export function BrosurVip() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null); // track hover
  const banyakBanner = kotakbanner.length;
  const containerRef = useRef(null);

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banyakBanner);
    }, 5000);
    return () => clearInterval(interval);
  }, [banyakBanner]);

  // Swipe gesture
  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e) => (startX = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (endX < startX - 50) setActiveIndex((prev) => (prev + 1) % banyakBanner);
      if (endX > startX + 50)
        setActiveIndex((prev) => (prev - 1 + banyakBanner) % banyakBanner);
    };
    const container = containerRef.current;
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [banyakBanner]);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + banyakBanner) % banyakBanner);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % banyakBanner);

  return (
    <div className="mx-17 p-10">
      <div className="relative overflow-hidden p-10 border-2" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 70}%)` }}
        >
          {kotakbanner.map((banner, idx) => (
            <div
              key={banner.id}
              className={`flex-shrink-0 w-[70%] mx-[1.5%] relative transition-transform duration-500 ${
                idx === activeIndex ? "scale-100" : "scale-90"
              }`}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img
                src={banner.gambar}
                alt={`banner-${banner.id}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />

              {/* Panah hanya muncul saat hover di banner ini */}
              {hoverIndex === idx && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                    onClick={prevSlide}
                  >
                    <img src={sebelum} alt="" className="w-20"/>
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                    onClick={nextSlide}
                  >
                    <img src={sesudah} alt="" className="w-20"/>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
