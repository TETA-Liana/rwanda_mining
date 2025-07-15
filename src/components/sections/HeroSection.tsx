import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa6";

const slides = [
  {
    backgroundImage: "/hero-section-slide-1.gif",
    heading: "Register Your Interest for Mining Indaba 2026",
    paragraph:
      "Mining Indaba 2026 will take place from 9–12 February in Cape Town. Sign up now to receive early updates, exclusive insights, and be the first to know about registration and event news.",
    buttons: [
      {
        label: "REGISTER INTEREST",
        bgColor: "bg-[#2563eb]",
        textColor: "text-white",
      },
      {
        label: "LEARN MORE",
        bgColor: "bg-[#60a5fa]",
        textColor: "text-black",
      },
    ],
  },
  {
    backgroundImage: "/hero-section-slide-2.png",
    heading: "Be part of Mining Indaba 2026",
    paragraph:
      "Maximise your visibility, connect with top investors, and position your brand at the forefront of the mining\nsector. Enquire about sponsorship opportunities today!",
    buttons: [
      {
        label: "ENQUIRE NOW",
        bgColor: "bg-[#60a5fa]",
        textColor: "text-black",
      },
    ],
  },
  {
    backgroundImage: "/hero-section-slide-3.png",
    heading:
      "Looking to put your brand at the heart of African mining's biggest stage?",
    paragraph: "Get the 2026 Exhibitor Brochure to explore what's possible.",
    buttons: [
      {
        label: "DOWNLOAD THE BROCHURE",
        bgColor: "bg-[#60a5fa]",
        textColor: "text-black",
      },
    ],
  },
  {
    backgroundImage: "/hero-section-slide-4.png",
    heading: "Download the post-event report",
    paragraph:
      "Download the official Post-Event Report for key stats, audience insights, and event highlights.",
    buttons: [
      {
        label: "DOWNLOAD THE REPORT",
        bgColor: "bg-[#60a5fa]",
        textColor: "text-black",
      },
    ],
  },
];

const delay = 10000; // 10 seconds, matches slideshow interval

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full bg-cover bg-center flex items-center relative"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="container relative z-10 text-white text-left flex items-center h-full">
              <div className="w-full md:w-[52%]">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 whitespace-pre-line">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl mb-8 whitespace-pre-line">
                  {slide.paragraph}
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  {slide.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={`font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide ${button.bgColor} ${button.textColor}`}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full border border-white border-2 mx-1 cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => handleDotClick(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
