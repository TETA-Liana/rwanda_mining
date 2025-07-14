import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa6'
<<<<<<< HEAD
const slides = [
  {
    backgroundImage: '/hero-section-slide-1.gif',
    heading: 'Rwanda Mining Week 2024\n4–6 December | Kigali Convention Centre',
    paragraph:
      'The 7th edition of Rwanda Mining Week brings together policymakers, industry leaders,\ninvestors, and communities under the theme:\n“Mining for Community Development.”',
    buttons: [
      { label: 'JOIN THE EVENT', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
      { label: 'VIEW DETAILS', bgColor: 'bg-white', textColor: 'text-[#004F71]' },
=======

const slides = [
  {
    backgroundImage: '/hero-section-slide-1.gif',
    heading: 'Stronger Together: Progress Through\nPartnerships',
    paragraph: 'Announcing the theme for Mining Indaba 2026. Join the movement transforming mining through\ncollaboration.',
    buttons: [
      { label: 'EXHIBIT OR SPONSOR', bgColor: 'bg-[#5cb030]', textColor: 'text-white' },
      { label: 'DISCOVER THEME', bgColor: 'bg-[#d4ed31]', textColor: 'text-black' },
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    ],
  },
  {
    backgroundImage: '/hero-section-slide-2.png',
<<<<<<< HEAD
    heading: 'Visit Rwanda Mining Sites & Discover Sustainable Practices',
    paragraph:
      'Experience field visits to key mining locations and learn how Rwanda promotes responsible mining\nand value addition across the sector.',
    buttons: [
      { label: 'EXPLORE FIELD TRIPS', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
=======
    heading: 'Be part of Mining Indaba 2026',
    paragraph: 'Maximise your visibility, connect with top investors, and position your brand at the forefront of the mining\nsector. Enquire about sponsorship opportunities today!',
    buttons: [
      { label: 'ENQUIRE NOW', bgColor: 'bg-[#d4ed31]', textColor: 'text-black' },
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    ],
  },
  {
    backgroundImage: '/hero-section-slide-3.png',
<<<<<<< HEAD
    heading: 'Invest in Rwanda’s Mining Future',
    paragraph:
      'Unlock opportunities in tin, tantalum, tungsten, gold, and lithium through structured investment\nforums and B2B sessions during Mining Week 2024.',
    buttons: [
      { label: 'DISCOVER OPPORTUNITIES', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
=======
    heading: 'Looking to put your brand at the heart of African mining\'s biggest stage?',
    paragraph: 'Get the 2026 Exhibitor Brochure to explore what\'s possible.',
    buttons: [
      { label: 'DOWNLOAD THE BROCHURE', bgColor: 'bg-[#d4ed31]', textColor: 'text-black' },
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    ],
  },
  {
    backgroundImage: '/hero-section-slide-4.png',
<<<<<<< HEAD
    heading: 'Engage with Leaders & Policy Makers',
    paragraph:
      'Rwanda Mining Week is a platform to shape policy dialogue, engage with decision-makers,\nand build partnerships that drive sector growth and community impact.',
    buttons: [
      { label: 'SEE SPEAKERS', bgColor: 'bg-[#004F71]', textColor: 'text-white' },
=======
    heading: 'Download the post-event report',
    paragraph: 'Download the official Post-Event Report for key stats, audience insights, and event highlights.',
    buttons: [
      { label: 'DOWNLOAD THE REPORT', bgColor: 'bg-[#d4ed31]', textColor: 'text-black' },
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    ],
  },
]

<<<<<<< HEAD
const delay = 10000 // 10 seconds
=======
const delay = 10000; // 10 seconds, matches slideshow interval
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
<<<<<<< HEAD
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, delay)

    return () => clearInterval(interval)
  }, [])
=======
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

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
<<<<<<< HEAD
                <div className="flex justify-center md:justify-start gap-4 flex-wrap">
=======
                <div className="flex justify-center md:justify-start gap-4">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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

<<<<<<< HEAD
export default HeroSection
=======
export default HeroSection 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
