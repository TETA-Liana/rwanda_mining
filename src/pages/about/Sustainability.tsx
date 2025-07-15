import Comm1 from "../../../public/comm-sus-1.png";
import Comm2 from "../../../public/comm-sus-2.png";
import Comm3 from "../../../public/comm-sus-3.png";
import Adva1 from "../../../public/advancing-new-solutions-1.png";
import Adva2 from "../../../public/advancing-new-solutions-2.png";
import Adva3 from "../../../public/advancing-new-solutions-3.jpg";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Gallery1 from "../../../public/investors/inve-1.png";
import Gallery2 from "../../../public/investors/inve-2.png";
import Gallery3 from "../../../public/investors/inve-3.png";
import Gallery4 from "../../../public/investors/inve-4.png";
import Gallery5 from "../../../public/investors/inve-5.png";
import Gallery6 from "../../../public/investors/inve-6.png";
import Gallery7 from "../../../public/investors/inve-7.png";
import Gallery8 from "../../../public/investors/inve-8.png";
import Gallery9 from "../../../public/investors/inve-9.png";
import Gallery10 from "../../../public/investors/inve-10.png";
import Gallery11 from "../../../public/investors/inve-11.png";
import Gallery12 from "../../../public/investors/inve-12.png";

const Sustainability = () => {
  interface GalleryMember {
    id: number;
    image: string;
  }

  const images = [
    "gallery-1.jpg",
    "gallery-2.jpg",
    "gallery-3.jpg",
    "gallery-4.jpg",
    "gallery-5.jpg",
    "gallery-6.jpg",
    "gallery-7.jpg",
    "gallery-8.jpg",
    "gallery-9.jpg",
    "gallery-10.jpg",
    "gallery-11.jpg",
    "gallery-12.jpg",
  ];

  const galleryImageImports = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerPage = 4;
  const totalSlides = Math.ceil(images.length / membersPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const galleryMembers: GalleryMember[] = galleryImageImports.map(
    (image, index) => ({
      id: index + 1,
      image: image,
    })
  );

  interface GalleryMemberCardProps {
    member: GalleryMember;
  }

  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member }) => {
    return (
      <div className="relative rounded-lg shadow-md text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 h-48 flex-shrink-0 transition-colors duration-300 overflow-hidden">
        <img
          src={member.image}
          alt="Gallery Image"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  const cardWidth = 256;
  const gapWidth = 24;
  const slideDistance = (cardWidth + gapWidth) * membersPerPage;

  return (
    <div>
      <div className="h-48 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold mt-14">
          Sustainability Initiatives
        </h1>
      </div>

      {/* Our Commitments Text Section */}
      <div className="container mx-10 py-8 text-start">
        <p className="text-lg text-gray-700 leading-relaxed">
          Mining Indaba's commitment to sustainability is evident in its efforts
          to reduce its environmental footprint, promote circularity in its
          products and processes, and deliver innovative solutions that improve
          the quality of life. By investing in sustainable practices and
          collaborating with industry partners, Mining Indaba is driving
          positive change within the event industry.
        </p>
      </div>

      <div className="h-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] "></div>

      {/* Our Commitments Section */}
      <div className="py-12 bg-gray-100">
        <div className="container pl-10">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Our Commitments
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Commitment Item 1: Advancing New Solutions */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                {/* Icon Placeholder */}
                <div className="text-6xl text-blue-600 mb-4">
                  <img src={Comm1} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Advancing New Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Our goal is to offer sustainable products that enhance
                  customer value, reduce carbon footprints, reduce waste, and
                  increase safety through investments in new sustainable
                  solutions.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Commitment Item 2: Initiatives and Engagement */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                {/* Icon Placeholder */}
                <div className="text-6xl text-blue-600 mb-4">
                  <img src={Comm2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Initiatives and Engagement
                </h3>
                <p className="text-gray-600 mb-4">
                  Our commitment extends beyond compliance, focusing on
                  fostering knowledge and providing innovative solutions to
                  ensure safe product use and minimize environmental impact.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Commitment Item 3: People, Communities & Collaboration */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                {/* Icon Placeholder */}
                <div className="text-6xl text-blue-600 mb-4">
                  <img src={Comm3} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  People, Communities & Collaboration
                </h3>
                <p className="text-gray-600 mb-4">
                  We strive to empower communities, foster faster
                  collaborations, and implement sustainable practices, ensuring
                  lasting environmental and social impact.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advancing New Solutions Section */}
      <div className="py-12">
        <div className="container pl-10">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Advancing New Solutions
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Since 2022, we have partnered with innovative exhibition stand
                builders, Jane&Paul, who specialise in creating sustainable
                exhibition infrastructure.
                <br />
                <br />
                Their flat-pack and modular designs boast a low carbon footprint
                in both transportation and packaging, allowing for reuse at each
                show. The primary construction material used is sustainably
                sourced South African Pine, known for its natural durability and
                ability to store carbon, making it an ideal choice for reducing
                environmental impact in the construction industry. Employing a
                CNC cut joining mechanism ensures precise assembly, eliminates
                the need for standard fasteners like screws or nails, and
                facilitates efficient flat-packing and reusability of the units.
              </p>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Along with adopting ScanDisplay's fabric shell scheme solution
                for stands, we also selected lightweight panels that, in keeping
                with our sustainable practices, lower carbon emissions and
                improve transport convenience. Following the event, exhibitors
                can store their graphic walls with ScanDisplay for reuse,
                promoting resource conservation, waste reduction, and furthering
                our sustainability objectives. The sustainable approach to
                improving our exhibition includes the use of reusable carpet
                tiles, significantly reducing waste compared to traditional
                single-use carpets typically found at exhibitions. By
                integrating digital screens and signage throughout the event
                space, we also lessened the dependence on freestanding banners,
                strengthening our sustainability efforts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container pl-10">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Advancing New Solutions
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src={Adva1} />
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src={Adva2} />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src={Adva3} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] "></div>

      {/* Initiatives and Engagement Section */}
      <div className="py-12">
        <div className="container mx-auto px-14">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Initiatives and Engagement
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column: Donating magazine collateral */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Donating magazine collateral
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The team intended to prohibit printed collateral, but media
                  partners supplied popular magazines. After the event, surplus
                  magazines were donated to Silverleaf School in Dunoon, which
                  received recycling funds and utilised them to purchase seeds
                  and plant vegetables which fed 750 children.
                </p>
              </div>
            </div>
            {/* Right Column: Recycling graphics */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Recycling graphics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The team attempts to keep all signage information generic so
                  that the images can be reused year after year. Any graphics
                  that cannot be reused, such as sponsor walls or graphics with
                  outdated logos, are donated to Sealand Gear, a Cape Town-based
                  maker of repurposed outdoor bags and apparel. Sealand
                  repurposes leftover fabric to make inners for their
                  responsibly made bags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] "></div>

      {/* People, Communities & Collaboration Section */}
      <div className="py-12">
        <div className="container mx-auto px-14">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            People, Communities & Collaboration
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column: Supporting Township */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Supporting Township
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hyve has been purchasing delegate bags from Township® since
                  2018. Township is a Fair-Trade social company that promotes
                  women's economic development in South African township
                  communities. They support five cooperatives that employ 45
                  women in the Cape Town townships of Khayelitsha and Manenberg.
                  All of the Township's items are manufactured from eco-friendly
                  textiles such as jute, cotton, or recycled PET from plastic
                  bottles.
                </p>
              </div>
            </div>
            {/* Right Column: Supporting Kidz Positive */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Supporting Kidz Positive
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kidz Positive serves as an income generation initiative,
                  empowering mothers and caregivers of children impacted by
                  HIV/AIDS to earn a livelihood. Workers collect raw materials
                  weekly, either from home or at the local office in Cape Town,
                  as shown in the images below. This year, Kidz Positive
                  manufactured notebooks, pens, and ministerial folders for our
                  delegates, essential tools for them to engage effectively in
                  their roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] "></div>

      {/* Ranked Section */}
      <section className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg px-14">
        <h2 className="text-4xl font-bold mb-6">
          Ranked among the top 100 most sustainable companies of 2024
        </h2>
        <p className="text-lg mb-8">
          In 2024, 9 of our Mining Indaba clients ranked among the top 100 most
          sustainable companies of 2024! Congratulations to Schneider Electric,
          SGS, Siemens, Hitachi, McKinsey, WSP, Microsoft, Newmont, and Epiroc
          for their leadership in sustainability and positive impact on the
          planet.
        </p>
        <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-8 py-3 rounded text-xs shadow-md uppercase tracking-wide transition-colors">
          VIEW ARTICLE
        </button>
      </section>

      {/* The Slide Show Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Slideshow container */}
            <div className="flex overflow-hidden w-full">
              {/* Inner container holding all cards with horizontal gap */}
              <div
                className="flex transition-transform duration-500 ease-in-out gap-x-6"
                style={{
                  transform: `translateX(${-currentIndex * slideDistance}px)`,
                }}
              >
                {galleryMembers.map((member) => (
                  <GalleryMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className="mx-1 focus:outline-none bg-transparent border-none p-0"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-3 w-3 rounded-full border-2 border-[#5cb030] ${
                    currentIndex === index ? "bg-[#5cb030]" : "bg-transparent"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonwabe Educare Centre Section */}
      <div className="p-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
            Masonwabe Educare Centre (Breadline Africa)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In partnership with Breadline Africa, Hyve Group have funded the
            reconstruction of the Masonwabe Educare Centre in Gugulethu, Cape
            Town, providing a safe, hygienic, and inspirational learning
            environment for 74 children. The newly constructed Early Childhood
            Development (ECD) facility was built using carbon-negative building
            technology called BRC (Biomass-Recycled Insulating Concrete), which
            is known for its multiple environmental benefits:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
            <li>95% recycled or waste material per m²</li>
            <li>
              Saves 20l of water per m² per day when compared to traditional
              brick and mortar
            </li>
            <li>
              3.1ha of indigenous ecosystems are restored per 43m² structure
            </li>
            <li>
              Can sequester up to 250kg CO2e per m² in the construction phase.
              Breadline Africa can provide the necessary Environmental Product
              Declaration (EPD)
            </li>
            <li>3-hour fire rated wall panels</li>
            <li>
              Maintaining an ambient temperature of 21°C and requiring no
              additional heating or cooling in the South African climate
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Projects and Impact Section */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(to bottom, #2563eb, #60a5fa)" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Featured Projects and Impact
          </h2>
        </div>
      </div>

      {/* Township Sustainable Bags Section */}
      <div className="p-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
            Township Sustainable Bags in Partnership with Hyve Group
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>
                  Bags made out of recycled PET from bottles collected in south
                  Africa.
                </li>
                <li>
                  Bags are made out of natural cotton locally sourced from South
                  African countries.
                </li>
                <li>
                  Bags produced in women-owned cooperatives based in township
                  communities.
                </li>
              </ul>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>4 cooperatives</li>
                <li>25 women</li>
                <li>34,000 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] "></div>

      <div className="py-12">
        <div className="container mx-auto px-14">
          <div className="flex flex-wrap -mx-4">
            {/* Left Column: Supporting Township */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Recycling Stage Sets
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We work with Gearhouse to implement a sustainable approach by
                  storing and reusing elements of our stage sets. This
                  eco-conscious practice significantly reduces our carbon
                  footprint while promoting resource efficiency. By extending
                  the lifespan of stage materials through reuse, we minimize
                  waste and contribute to a greener event industry. This
                  commitment to sustainability underscores our dedication to
                  environmental responsibility and sets a positive example for
                  future events.
                </p>
              </div>
            </div>
            {/* Right Column: Supporting Kidz Positive */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Vegetarian Food at the Event
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At Mining Indaba 2025, all food is sustainably sourced and
                  local. We also design our menus to be 70% vegetarian. This
                  approach significantly reduces our environmental footprint by
                  minimizing transportation emissions and supporting local
                  farmers. Replacing the meat offering at the event reduces
                  methane which contributes to climate change. Making this
                  change reduces the GHG emissions of all the individuals
                  attending the event by hundreds throughout the weeks event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Our Partners
          </h2>
          {/* Placeholder for partner logos */}
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Slideshow container */}
            <div className="flex overflow-hidden w-full">
              {/* Inner container holding all cards with horizontal gap */}
              <div
                className="flex transition-transform duration-500 ease-in-out gap-x-6"
                style={{
                  transform: `translateX(${-currentIndex * slideDistance}px)`,
                }}
              >
                {galleryMembers.map((member) => (
                  <GalleryMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className="mx-1 focus:outline-none bg-transparent border-none p-0"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-3 w-3 rounded-full border-2 border-[#5cb030] ${
                    currentIndex === index ? "bg-[#5cb030]" : "bg-transparent"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
