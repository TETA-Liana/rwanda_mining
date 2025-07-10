import React from "react";

const MiningIndabaForDownstreamBuyers: React.FC = () => {
  const handleRegisterInterest = () => {
    alert("Register Interest clicked! Implement your logic here.");
  };

  return (
    <>
      {/* Green header bar */}
      <div className="w-full bg-[#b8e137] py-4 text-center">
        <h1
          className="text-5xl font-bold text-white"
          style={{
            fontFamily: "Montserrat, Arial, sans-serif",
            letterSpacing: "1px",
          }}
        >
          Mining Indaba for Downstream Buyers
        </h1>
      </div>
      {/* White card with shadow and rounded corners */}
      <div className="flex justify-center items-center py-10 bg-[#fcfcf7]">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-6xl w-full px-8 py-10 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{
              fontFamily: "Montserrat, Arial, sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            Engage early in the value chain
          </h2>
          <p
            className="mb-4 text-lg"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            Downstream buyers – from battery manufacturers to tech giants and
            infrastructure developers – should attend Mining Indaba 2026 under
            the theme “Stronger Together: Progress Through Partnerships” to
            secure responsible supply chains, build strategic alliances, and
            gain direct access to Africa’s rich mineral base.
          </p>
          <p
            className="mb-8 text-lg"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            Meet producers face-to-face to ensure long-term supply agreements,
            validate sources that are ESG-compliant and conflict-free and gain
            transparency across the value chain to meet regulatory and consumer
            expectations. For downstream buyers, Mining Indaba 2026 is not just
            a mining event, it’s a strategic platform to co-create the future of
            global supply chains, where partnerships drive resilience,
            responsibility, and growth. Buyers can move from being passive
            purchasers to proactive collaborators in Africa’s mineral future.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleRegisterInterest}
              className="bg-yellow-300 text-black font-bold px-6 py-2 rounded hover:bg-yellow-400 transition-colors mt-2 mb-2 shadow"
              style={{
                minWidth: "170px",
                fontFamily: "Montserrat, Arial, sans-serif",
                letterSpacing: "1px",
              }}
            >
              REGISTER INTEREST
            </button>
          </div>
        </div>
      </div>

      {/* The rest of the page remains unchanged */}
      <div className="container">
        {/* Reasons to Attend Section */}
        <section className="reasons-section py-8">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            Why attend Mining Indaba?
          </h2>
          <div className="flex justify-center">
            <img
              src="/whyattendmining2.png"
              alt="Why attend Mining Indaba?"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </section>
        {/* 2025 Attendee Testimonials */}
        <section className="testimonials-section">
          <h2>2025 Attendee Testimonials</h2>
          <div className="testimonials-items">
            <div className="testimonial-item">
              <div
                className="video"
                style={{ backgroundImage: "url(/path/to/testimonial1.jpg)" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual YouTube video ID
                  title="Testimonial 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                "It’s huge. It’s a very diverse industry, which I found very
                pleasant."
              </p>
              <p className="author">
                Martina Biene
                <br />
                Chairperson and MD
                <br />
                Volkswagen Group Africa
              </p>
            </div>
            <div className="testimonial-item">
              <div
                className="video"
                style={{ backgroundImage: "url(/path/to/testimonial2.jpg)" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual YouTube video ID
                  title="Testimonial 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                "For me, the largest impression of Mining Indaba is the scale.
                It’s just amazing to see everyone across the globe, across
                Africa, in one place."
              </p>
              <p className="author">
                Ricardo Rosa
                <br />
                Microsoft Africa's Director for Enterprise Commercial
              </p>
            </div>
          </div>
        </section>
        {/* Join Us Section */}
        <section className="join-us-section">
          <h2>Join Us at Mining Indaba 2026</h2>
          <p>
            The premier meeting place for African and global mining leaders, it
            is all set to be an unmissable experience, shaping the future of
            African mining. Register your interest today and stay ahead in this
            dynamic industry!
          </p>
          <button onClick={handleRegisterInterest} className="register-btn">
            REGISTER INTEREST
          </button>
        </section>
        {/* Featured Articles */}
        <section className="featured-articles-section">
          <h2>Featured Articles</h2>
          <div className="articles-items">
            <div className="article-item">
              <p>15 Apr 2025 | Market News</p>
              <h3>Glencore’s assets in the DRC receive The Copper Mark</h3>
              <p>
                Glencore’s assets in the DRC, Kamoto Copper Company (KCC), a
                partnership with Gécamines and the DRC State, and Mutanda Mining
                (MUMI), in which the DRC State also...
              </p>
              <button>Read more</button>
            </div>
            <div className="article-item">
              <p>09 Apr 2025 | Market News</p>
              <h3>
                In Conversation with Minister of Mineral Resources, Petroleum
                and Gas, Angola
              </h3>
              <p>
                Driving Value, Sustainability, and Growth: Minister Azevedo
                Unpacks Angola's Vision for a Thriving, Inclusive Mining
                Future...
              </p>
              <button>Read more</button>
            </div>
            <div className="article-item">
              <p>07 Apr 2025 | Market News</p>
              <h3>
                The plunge in copper prices and its Impact on the mining sector
              </h3>
              <p>
                In recent months, copper prices have experienced a sharp
                decline, dragging the mining sector into one of the
                worst-performing industries amid a broader market sell-off...
              </p>
              <button>Read more</button>
            </div>
            <div className="article-item">
              <p>25 Mar 2025 | Market News</p>
              <h3>Bill Gates and Jeff Bezos leverage influence in the DRC</h3>
              <p>
                Tech-Driven Mining: How Gates and Bezos Are Reshaping the DRC's
                Lithium Future...
              </p>
              <button>Read more</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MiningIndabaForDownstreamBuyers;
