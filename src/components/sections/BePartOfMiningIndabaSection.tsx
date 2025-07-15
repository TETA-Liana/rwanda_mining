const BePartOfMiningIndabaSection = () => {
  const sectionData = [
    {
      image: "/be-part-of-1.png",
      subheading: "Connect with Industry Leaders",
      text: "Showcase your brand at Mining Indaba and engage directly with key decision-makers, investors, and government representatives. As an exhibitor, you'll gain valuable exposure, build strategic partnerships, and position your brand at the heart of African mining.",
      buttonLabel: "EXPLORE EXHIBITING OR SPONSORING",
    },
    {
      image: "/be-part-of-2.png",
      subheading: "Amplity Your Brand and Influence",
      text: "Stand out in the mining industry by sponsoring Mining Indaba. Whether you want to boost brand recognition, generate high-value leads, or align with industry leadership, our tailored sponsorship opportunities deliver real results.",
      buttonLabel: "SPONSORSHIP ENQUIRY",
    },
    {
      image: "/be-part-of-3.jpg",
      subheading: "Join Global Decision-Makers",
      text: "Discover why Mining Indaba is the premier meeting place for African and global mining leaders. As Africa's leading mining investment event, it brings together industry leaders, governments, and investors to unlock the continent's mineral potential, drive innovation, and tackle key challenges. Click below to learn more.",
      buttonLabel: "EXPLORE ATTENDING",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Be Part of Mining Indaba 2026
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
                <button className="bg-[#60a5fa] text-black font-bold px-4 py-2 rounded text-sm shadow-md uppercase tracking-wide hover:bg-[#2563eb]">
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
