import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa6'

const slides = [
  {
    backgroundImage: '/hero-section-slide-1.gif',
    heading: 'Stronger Together: Progress Through\nPartnerships',
    paragraph: 'Announcing the theme for Mining Indaba 2026. Join the movement transforming mining through\ncollaboration.',
    buttons: [
      { label: 'EXHIBIT OR SPONSOR', bgColor: 'bg-[#64a63a]', textColor: 'text-white' },
      { label: 'DISCOVER THEME', bgColor: 'bg-[#ffda3a]', textColor: 'text-black' },
    ],
  },
  {
    backgroundImage: '/hero-section-slide-2.png',
    heading: 'Be part of Mining Indaba 2026',
    paragraph: 'Maximise your visibility, connect with top investors, and position your brand at the forefront of the mining\nsector. Enquire about sponsorship opportunities today!',
    buttons: [
      { label: 'ENQUIRE NOW', bgColor: 'bg-[#ffda3a]', textColor: 'text-black' },
    ],
  },
  {
    backgroundImage: '/hero-section-slide-3.png',
    heading: 'Looking to put your brand at the heart of African mining\'s biggest stage?',
    paragraph: 'Get the 2026 Exhibitor Brochure to explore what\'s possible.',
    buttons: [
      { label: 'DOWNLOAD THE BROCHURE', bgColor: 'bg-[#ffda3a]', textColor: 'text-black' },
    ],
  },
  {
    backgroundImage: '/hero-section-slide-4.png',
    heading: 'Download the post-event report',
    paragraph: 'Download the official Post-Event Report for key stats, audience insights, and event highlights.',
    buttons: [
      { label: 'DOWNLOAD THE REPORT', bgColor: 'bg-[#ffda3a]', textColor: 'text-black' },
    ],
  },
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 10000) // Change slide every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section
      className="relative h-[70vh] bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${currentSlideData.backgroundImage})`,
        backgroundSize: '100% auto', // Ensure full width is visible
        backgroundRepeat: 'no-repeat', // Prevent repeating
        backgroundPosition: 'center', // Center the background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container relative z-10 text-white text-left flex items-center h-full">
        <div className="w-full md:w-[52%]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 whitespace-pre-line">
            {currentSlideData.heading}
          </h1>
          <p className="text-lg md:text-xl mb-8 whitespace-pre-line">
            {currentSlideData.paragraph}
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {currentSlideData.buttons.map((button, index) => (
              <button
                key={index}
                className={`font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide ${button.bgColor} ${button.textColor}`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className="mx-1 focus:outline-none"
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <FaCircle
              className={`h-2 w-2 ${index === currentSlide ? 'text-white border-2 border-white' : 'text-white'}`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}

export default HeroSection 