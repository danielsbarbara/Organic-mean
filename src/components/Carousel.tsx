import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./PreLoader";

const images = [
  "./Carousel-images/image3.jpg",
  "./Carousel-images/image1.jpg",

];

export function CarouselHomePage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    initial: {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Ajuste a duração da transição
      },
    },
    exit: {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    },
  };

  function setNextImage(action: string) {
    if (action === "next") {
      setDirection(-1);
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      return;
    } else {
      setDirection(1);
      setIndex((prev) => (prev === 0 ? prev : prev - 1));
      return;
    }
  }

  return (
    <div className="relative">
      <div className="flex justify-center w-full h-full">
        <button
          onClick={() => setNextImage("prev")}
          className="absolute left-[1rem] text-white self-center border-none"
        >
          <div className="border-t-[2px] border-l-[2px] h-5 w-5 -rotate-45" />
        </button>
        {/* <AnimatePresence initial={false} custom={direction}> */}
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={images[index]}
          className="h-svh w-lvw md:h-lvh shadow-2xl"
          key={images[index]}
          custom={direction}
        />
        {/* </AnimatePresence> */}
        <button
          onClick={() => setNextImage("next")}
          className="absolute right-[1rem] text-white rounded-full self-center border-none"
        >
          <div className="border-t-[2px] border-l-[2px] h-5 w-5 rotate-[135deg]" />
        </button>
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === i ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
