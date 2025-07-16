import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    backgroundImage: "/hero-section-1.jpg",
    heading: "Register Your Interest for Rwanda Mining Week",
    paragraph:
      "The seventh edition of Rwanda Mining Week comes this December from 04 to 06 bringing together mining industry leaders, public officials, civil society organizations, academia and community members..",
    buttons: [
      {
        label: "REGISTER INTEREST",
        bgColor: "bg-[#2563eb]",
        textColor: "text-white",
      },
    ],
  },
  {
    backgroundImage: "/hero-section-2.jpg",
    heading: "Discover more about Rwanda mining week",
    paragraph:
      "Annually held in December and co-organized by the Rwanda Mines, Petroleum and Gas Board (RMB|), Rwanda Mining Association and the School of Mining and Geology, College of Science and Technology, University of Rwanda",
    buttons: [
      {
        label: "DISCOVER MORE",
        bgColor: "bg-[#60a5fa]",
        textColor: "text-black",
      },
    ],
  },
  {
    backgroundImage: "/hero-section-3.jpg",
    heading: "Take Part In Rwanda Mining Week by being a sponsor",
    paragraph:
      "Rwanda Mining Week is a unique opportunity to showcase your company's expertise and connect with key industry players.",
    buttons: [
      {
        label: "Be a sponsor",
        bgColor: "bg-[#60a5fa]",
        textColor: "text-black",
      },
    ],
  },
  {
    backgroundImage: "/hero-section-4.jpg",
    heading: "Take part in Rwanda Mining Week by being an exhibitor",
    paragraph:
      "Rwanda Mining Week is a unique opportunity to showcase your company's expertise and connect with key industry players.",
    buttons: [
      {
        label: "Be an exhibitor",
        bgColor: "bg-[#60a5fa]",
        textColor: "text-black",
      },
    ],
  },
];

const delay = 10000; // 10 seconds, matches slideshow interval

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
                      onClick={() => {
                        if (
                          button.label === "REGISTER INTEREST" ||
                          button.label === "Be a sponsor" ||
                          button.label === "Be an exhibitor"
                        ) {
                          navigate("/register-interest");
                        } else if (button.label === "DISCOVER MORE") {
                          const aboutSection = document.getElementById("about");
                          if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
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
