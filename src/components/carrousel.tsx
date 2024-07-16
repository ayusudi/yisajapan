"use client"
import { useEffect, useRef, useState } from 'react';
import image1 from "@/asset/Image1.png"
import image2 from "@/asset/Image2.png"
import image3 from "@/asset/Image3.png"
import Image from 'next/image';

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  let data = [
    {
      id: 1,
      image: image1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum."
    },
    {
      id: 2,
      image: image2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum."
    },
    {
      id: 3,
      image: image3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum."
    },
    {
      id: 4,
      image: image1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum."
    },
    {
      id: 5,
      image: image2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum."
    },
    {
      id: 6,
      image: image3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum."
    }
  ]

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = x - startX;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleArrowClick = (direction: string) => {
    if (carouselRef.current) {
      if (direction === 'left') {
        carouselRef.current.scrollLeft -= 800;
      } else {
        carouselRef.current.scrollLeft += 800;
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    let timeoutId: NodeJS.Timeout;

    const autoPlay = () => {
      if (window.innerWidth < 800) return;
      if (carousel) {
        const totalCardWidth = carousel.scrollWidth;
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

        if (carousel.scrollLeft >= maxScrollLeft) return;

        timeoutId = setTimeout(() => {
          carousel.scrollLeft += carousel.querySelector('li')?.clientWidth || 0;
        }, 2500);
      }
    };

    carousel?.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    carousel?.addEventListener('mouseleave', autoPlay);

    autoPlay();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative max-w-8xl mx-auto mt-4 container">
      <i
        id="left"
        className="w-[64px] h-[64px] fas fa-angle-left absolute top-[200px] transform  left-2 text-xl bg-white text-white p-3 rounded-full cursor-pointer shadow-md"
        onClick={() => handleArrowClick('left')}
      />
      <ul
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide px-9 py-6"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {data.map(({ id, image, text }) => (
          <li key={id} className="w-[472px] h-[450px] m-1.5 flex-none flex flex-col items-center justify-center">
            <Image
              width="472"
              height="298"
              src={image}
              alt={id + ''}
              draggable="false"
              className="object-cover rounded-xl"
            />
            <span className="text-gray-500 font-normal font-roboto text-[18px] mt-[32px]">{text}</span>
          </li>
        ))}
      </ul>
      <i
        id="right"
        className="w-[64px] h-[64px] fas fa-angle-right absolute top-[200px] transform right-0 text-xl bg-white text-white p-3 rounded-full cursor-pointer shadow-md"
        onClick={() => handleArrowClick('right')}
      />
    </div>
  );
};

export default Carousel;
