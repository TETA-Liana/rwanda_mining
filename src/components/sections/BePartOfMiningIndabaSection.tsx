import { useNavigate } from "react-router-dom";

const BePartOfMiningIndabaSection = () => {
  const navigate = useNavigate();
  const sectionData = [
    {
      image: "/be-part-of-1.png",
      subheading: "Connect with Rwanda’s Mining Future",
      text: "Be part of Rwanda Mining Week and engage directly with government leaders, investors, and top mining executives. This is your opportunity to showcase your innovations, build strategic networks, and position your brand at the forefront of Rwanda’s rapidly growing mining sector.",
      buttonLabel: "EXPLORE EXHIBITING OR SPONSORING",
    },
    {
      image: "/be-part-of-2.png",
      subheading: "Boost Your Visibility and Influence",
      text: "Elevate your presence in the East African mining market. As a sponsor of Rwanda Mining Week, you’ll connect with top decision-makers, showcase your commitment to innovation, and generate meaningful business opportunities in a dynamic mining ecosystem.",
      buttonLabel: "SPONSORSHIP ENQUIRY",
    },
    {
      image: "/be-part-of-3.jpg",
      subheading: "Join Regional and Global Leaders",
      text:  "Rwanda Mining Week is the premier platform for engaging with East Africa’s mining leadership. Connect with government officials, investors, and industry pioneers as they explore opportunities, tackle challenges, and shape the future of mining across Rwanda and the region. Click below to learn more.",
      buttonLabel: "EXPLORE ATTENDING",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Be Part of Rwanda Mining Week
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {sectionData.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex flex-col items-start text-left"
            >
              <div className="mb-6 rounded-t-lg overflow-hidden shadow-md w-full">
                <img
                  src={item.image}
                  alt={item.subheading}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow px-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.subheading}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="w-full px-4 mb-4">
                <button
                  className="bg-[#60a5fa] text-black font-bold px-4 py-2 rounded text-sm shadow-md uppercase tracking-wide hover:bg-[#2563eb]"
                  onClick={() => {
                    if (item.buttonLabel === "SPONSORSHIP ENQUIRY") {
                      navigate("/register-interest?sponsor=1");
                    } else {
                      navigate("/register-interest");
                    }
                  }}
                >
                  {item.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BePartOfMiningIndabaSection;
