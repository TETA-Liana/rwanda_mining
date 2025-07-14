const BePartOfMiningWeekSection = () => {
  const sectionData = [
    {
      image: '/be-part-of-1.png',
      subheading: 'Accelerate Investment in Mining',
      text: 'Rwanda Mining Week 2024 brings together investors, companies, and policymakers to explore Rwanda’s growing mineral potential. Get firsthand insight into the reforms, innovations, and sustainable practices shaping the sector.',
      buttonLabel: 'JOIN THE CONVERSATION',
    },
    {
      image: '/be-part-of-2.png',
      subheading: 'Promote Innovation and Sustainability',
      text: 'Be part of discussions around sustainable mining, technology adoption, and the future of critical minerals. The event fosters cross-sector dialogue to ensure inclusive, responsible growth of Rwanda’s mining industry.',
      buttonLabel: 'DISCOVER INNOVATION',
    },
    {
      image: '/be-part-of-3.jpg',
      subheading: 'Engage with Key Stakeholders',
      text: 'Meet high-level stakeholders from government, the private sector, academia, and development partners. Rwanda Mining Week is your gateway to impactful connections and collaborative opportunities across the ecosystem.',
      buttonLabel: 'REGISTER TO ATTEND',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Be Part of Rwanda Mining Week 2024
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {sectionData.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 flex flex-col items-start text-left">
              <div className="mb-6 rounded-t-lg overflow-hidden shadow-md w-full">
                <img src={item.image} alt={item.subheading} className="w-full h-auto object-cover" />
              </div>
              <div className="flex flex-col flex-grow px-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.subheading}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.text}</p>
              </div>
              <div className="w-full px-4 mb-4">
                <button className="bg-[#004F71] text-white font-bold px-4 py-2 rounded text-sm shadow-md uppercase tracking-wide hover:bg-[#00384f]">
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

export default BePartOfMiningWeekSection;
