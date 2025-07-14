import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa6'
const slides = [
  {
    backgroundImage: '/hero-section-slide-1.gif',
    heading: 'Rwanda Mining Week 2024\n4–6 December | Kigali Convention Centre',
    paragraph:
      'The 7th edition of Rwanda Mining Week brings together policymakers, industry leaders,\ninvestors, and communities under the theme:\n“Mining for Community Development.”',
    buttons: [
      { label: 'JOIN THE EVENT', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
      { label: 'VIEW DETAILS', bgColor: 'bg-white', textColor: 'text-[#004F71]' },
    ],
  },
  {
    backgroundImage: '/hero-section-slide-2.png',
    heading: 'Visit Rwanda Mining Sites & Discover Sustainable Practices',
    paragraph:
      'Experience field visits to key mining locations and learn how Rwanda promotes responsible mining\nand value addition across the sector.',
    buttons: [
      { label: 'EXPLORE FIELD TRIPS', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
    ],
  },
  {
    backgroundImage: '/hero-section-slide-3.png',
    heading: 'Invest in Rwanda’s Mining Future',
    paragraph:
      'Unlock opportunities in tin, tantalum, tungsten, gold, and lithium through structured investment\nforums and B2B sessions during Mining Week 2024.',
    buttons: [
      { label: 'DISCOVER OPPORTUNITIES', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
    ],
  },
  {
    backgroundImage: '/hero-section-slide-4.png',
    heading: 'Engage with Leaders & Policy Makers',
    paragraph:
      'Rwanda Mining Week is a platform to shape policy dialogue, engage with decision-makers,\nand build partnerships that drive sector growth and community impact.',
    buttons: [
      { label: 'SEE SPEAKERS', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
    ],
  },
]

const delay = 10000 // 10 seconds

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, delay)

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

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
                <div className="flex justify-center md:justify-start gap-4 flex-wrap">
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
              index === currentSlide ? 'bg-white' : 'bg-transparent'
            }`}
            onClick={() => handleDotClick(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
