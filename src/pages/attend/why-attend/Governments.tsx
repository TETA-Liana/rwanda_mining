import React, { useRef, useEffect } from "react";
import FooterSection from "../../../components/sections/FooterSection";
import FeaturedStories from "../FeaturedStories"; // Adjust the import path as needed

const MiningIndabaGovernment: React.FC = () => {
  const handleRegisterInterest = () => {
    alert("Register Interest clicked! Implement your registration logic here.");
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let currentIndex = 0;
    const items = carousel.children;
    const totalItems = items.length;
    const itemWidth = items[0].clientWidth + 32; // Adjusted for m-8 gap
    const containerWidth = carousel.parentElement?.clientWidth || 800;
    const visibleItems = Math.floor(containerWidth / itemWidth) || 1;

    const moveCarousel = (direction: number) => {
      currentIndex = (currentIndex + direction + totalItems) % totalItems;
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    const updateCarousel = () => {
      const containerWidth = carousel.parentElement?.clientWidth || 800;
      const maxTranslate = (totalItems - visibleItems) * itemWidth;
      const currentTranslate = currentIndex * itemWidth;
      if (currentTranslate > maxTranslate) {
        currentIndex = Math.floor(maxTranslate / itemWidth);
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    };

    const handleResize = () => {
      updateCarousel();
    };

    const leftArrow = document.querySelector(".carousel-button.left");
    const rightArrow = document.querySelector(".carousel-button.right");

    leftArrow?.addEventListener("click", () => moveCarousel(-1));
    rightArrow?.addEventListener("click", () => moveCarousel(1));
    window.addEventListener("resize", handleResize);

    updateCarousel();

    return () => {
      leftArrow?.removeEventListener("click", () => moveCarousel(-1));
      rightArrow?.removeEventListener("click", () => moveCarousel(1));
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-gradient-to-r from-green-500 to-lime-500 text-white text-center py-6 w-full mt-8">
          <h1 className="text-4xl font-bold">Mining Indaba for Government</h1>
        </header>
        <section className="p-6 bg-white shadow-lg rounded-lg my-8 ml-10 mr-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Future of Mining: Advancing Government Mining Initiatives
          </h2>
          <p className="text-gray-700 text-center mb-6">
            The mining industry stands at a crossroads where governments play a
            pivotal role in shaping its direction. To navigate the challenges of
            a dynamic global landscape, addressing the distinct needs and
            opportunities within government mining strategies is essential. By
            collaborating and pushing boundaries, we can unlock the full
            potential of mining economies, driving a resilient and prosperous
            future for the sector.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleRegisterInterest}
              className="px-6 py-2 bg-yellow-300 text-black font-medium rounded hover:bg-yellow-400 transition-colors"
            >
              REGISTER INTEREST
            </button>
          </div>
        </section>
        {/* Reasons to Attend Section */}
        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
          <h2 className="text-2xl font-bold text-center mb-6">
            Reasons to attend
          </h2>
          <section className="bg-[#56A732] text-white shadow-md my-8 ml-10 mr-8 min-h-[60vh]">
            <div className="flex flex-col md:flex-row gap-6 h-full">
              <div className="w-full md:w-1/2 p-4 mt-40">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontSize: "20px" }}
                >
                  Enhanced government proposition
                </h3>
                <p className="text-sm">
                  In support of this objective, ensuring the voice of government
                  mining and supporting ministries will be heard across the
                  event—not only in the government-dedicated Intergovernmental
                  Summit, but across all key programmes including Disruptive
                  Discussions, Sustainability Series and Technology and
                  Innovation.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <div
                  className="w-full h-[60vh] bg-gray-300"
                  style={{
                    backgroundImage: "url(/gallery-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          </section>
          <section className="bg-[#56A732] text-white shadow-md my-8 ml-10 mr-8 min-h-[60vh]">
            <div className="flex flex-col md:flex-row gap-6 h-full">
              <div className="w-full md:w-1/2 flex items-center">
                <div
                  className="w-full h-[60vh] bg-gray-300"
                  style={{
                    backgroundImage: "url(/gallery-4.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="w-full md:w-1/2 p-4 mt-40">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontSize: "20px" }}
                >
                  Future-proofing government focus
                </h3>
                <p className="text-sm">
                  Future-proofing from a government perspective involves
                  implementing policies and regulations that ensure sustainable
                  development, environmental protection, and social
                  responsibility in the mining industry. It also involves
                  fostering innovation and technology adoption to enhance
                  efficiency and competitiveness in the sector.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* What to Expect Section */}
        <section className="p-6 bg-white my-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            What to Expect
          </h2>
          <div className="flex justify-center">
            <img
              src="/whattoexpect.png"
              alt="What to Expect"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </section>

        {/* Government officials that attended in 2025 */}
        <section className="py-10">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            Government officials that attended in 2025
          </h2>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 text-[#7bc043] hover:bg-[#e6f7d9] transition-colors"
              style={{ fontSize: "2.5rem", left: "-30px" }}
              onClick={() => {
                document
                  .getElementById("officials-scroll")
                  ?.scrollBy({ left: -320, behavior: "smooth" });
              }}
              aria-label="Scroll left"
            >
              &#x2039;
            </button>
            <div
              id="officials-scroll"
              className="flex overflow-x-auto gap-8 px-8 pb-4 scrollbar-hide"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {[
                {
                  name: "Hon. Dr. Ken Zikhale Ng'oma",
                  img: "/advisor team/ime.png",
                },
                {
                  name: "H.E. Thiam Tidjani",
                  img: "/advisor team/jonathan.png",
                },
                {
                  name: "Hon. Estevão Tomás Rafael Pale",
                  img: "/advisor team/marcus.png",
                },
                {
                  name: "Commissaire Colonel Ousmane Abarichi",
                  img: "/advisor team/miguel.png",
                },
                {
                  name: "Hon. Dr Oladele Henry Alake",
                  img: "/advisor team/ben-400.png",
                },
                {
                  name: "Prince Shuaibu Abubakar Audu",
                  img: "/advisor team/alison.png",
                },
              ].map((official, idx) => (
                <div
                  key={official.name}
                  className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center justify-between relative"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#e6f7d9] flex items-center justify-center bg-gray-100">
                    <img
                      src={official.img}
                      alt={official.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className="inline-block bg-gray-100 rounded-full p-1 border border-gray-300 cursor-pointer"
                      title="More info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75v.008m0 2.242v6.25m0 6.25a9 9 0 110-18 9 9 0 010 18z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-2 text-center">
                    <span
                      className="block text-green-600 font-semibold text-lg"
                      style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                    >
                      {official.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 text-[#7bc043] hover:bg-[#e6f7d9] transition-colors"
              style={{ fontSize: "2.5rem", right: "-30px" }}
              onClick={() => {
                document
                  .getElementById("officials-scroll")
                  ?.scrollBy({ left: 320, behavior: "smooth" });
              }}
              aria-label="Scroll right"
            >
              &#x203A;
            </button>
          </div>
          <style>{`
            #officials-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function() {
              var el = document.getElementById('officials-scroll');
              if (!el) return;
              let scrollAmount = 0;
              let direction = 1;
              setInterval(function() {
                if (!el) return;
                if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) direction = -1;
                if (el.scrollLeft <= 0) direction = 1;
                el.scrollBy({ left: 1 * direction, behavior: 'smooth' });
              }, 30);
            })();
          `,
            }}
          />
        </section>

        {/* 2025 Attendee Testimonials Section */}
        <section className="p-6 bg-white shadow-md my-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            2025 Attendee Testimonials
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/3 bg-[#faf9f4] p-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video ID
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm block mt-2"
              >
                Watch on YouTube
              </a>
              <p className="text-gray-700 italic text-left mt-2 p-4">
                "The mining Indaba brings together a number of governments,
                private companies, CSOs, everyone comes here it's easier to meet
                people in one place."
              </p>
              <p className="text-left font-semibold mt-2 text-green-600 p-4">
                Eng. Dalitso Mhango
                <br />
                Senior Mining Engineer
                <br />
                Ministry of Mines & Mineral Development, Republic of Zambia
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full md:w-1/3 bg-[#faf9f4] p-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oGAsPwYBAyY" // Replace with actual video ID
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://www.youtube.com/watch?v=oGAsPwYBAyY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm block mt-2"
              >
                Watch on YouTube
              </a>
              <p className="text-gray-700 italic text-left mt-2 p-4">
                "Today Mining Indaba is the best mining forum in the world, it's
                a big platform where all parts of the mining industry are
                present."
              </p>
              <p className="text-left font-semibold mt-2 text-green-600 p-4">
                Didier Kaku Kingwabili
                <br />
                Inspector General
                <br />
                Ministry of Mines, Democratic Republic of Congo
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full md:w-1/3 bg-[#faf9f4] p-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/XVewzXWDOYk" // Replace with actual video ID
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://www.youtube.com/watch?v=XVewzXWDOYk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm block mt-2"
              >
                Watch on YouTube
              </a>
              <p className="text-gray-700 italic text-left mt-2 p-4">
                "I keep coming because not only am I meeting new partners but
                also meeting some officials enhancing the African mining
                policies."
              </p>
              <p className="text-left font-semibold mt-2 text-green-600 p-4">
                Ismael Diakite
                <br />
                Chief Representative
                <br />
                Winning Consortium Simandou
              </p>
            </div>
          </div>
        </section>

        {/* Join Us at Mining Indaba 2026 Section */}
        <section className="bg-gradient-to-b from-green-500 to-lime-500 text-white text-center py-6 my-8 w-full">
          <h2 className="text-2xl font-bold mb-2">
            Join Us at Mining Indaba 2026
          </h2>
          <p className="text-sm mb-4">
            The premier meeting place for African and global mining leaders, it
            is all set to be an unmissable experience, shaping the future of
            African mining. Register your interest today and stay ahead in this
            dynamic industry!
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleRegisterInterest}
              className="px-6 py-2 bg-yellow-300 text-black font-medium rounded hover:bg-yellow-400 transition-colors"
            >
              REGISTER INTEREST
            </button>
          </div>
        </section>

        <FeaturedStories />
      </div>
      <FooterSection />
    </>
  );
};

export default MiningIndabaGovernment;
