import React from 'react';

const Sustainability = () => {
  return (
    <div className="pt-40">
      {/* Hero Section */}
      <div className="h-60 flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: 'linear-gradient(to right, #4CAF50, #8BC34A)' }}>
        Sustainability Initiatives
      </div>

      {/* Our Commitments Text Section */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Mining Indaba's commitment to sustainability is evident in its efforts to reduce its environmental footprint, promote circularity in its products and processes, and deliver innovative solutions that improve the quality of life. By investing in sustainable practices and collaborating with industry partners, Mining Indaba is driving positive change within the event industry.
        </p>
      </div>

      {/* Our Commitments Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Our Commitments</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Commitment Item 1: Advancing New Solutions */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                {/* Icon Placeholder */}
                <div className="text-6xl text-green-600 mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Advancing New Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Our goal is to offer sustainable products that enhance customer value, reduce carbon footprints, reduce waste, and increase safety through investments in new sustainable solutions.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>

            {/* Commitment Item 2: Initiatives and Engagement */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                {/* Icon Placeholder */}
                <div className="text-6xl text-green-600 mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Initiatives and Engagement</h3>
                <p className="text-gray-600 mb-4">
                  Our commitment extends beyond compliance, focusing on fostering knowledge and providing innovative solutions to ensure safe product use and minimize environmental impact.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>

            {/* Commitment Item 3: People, Communities & Collaboration */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                {/* Icon Placeholder */}
                <div className="text-6xl text-green-600 mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">People, Communities & Collaboration</h3>
                <p className="text-gray-600 mb-4">
                  We strive to empower communities, foster faster collaborations, and implement sustainable practices, ensuring lasting environmental and social impact.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advancing New Solutions Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Advancing New Solutions</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Since 2022, we have partnered with innovative exhibition stand builders, Jane&Paul, who specialise in creating sustainable exhibition infrastructure.
                <br/><br/>
                Their flat-pack and modular designs boast a low carbon footprint in both transportation and packaging, allowing for reuse at each show. The primary construction material used is sustainably sourced South African Pine, known for its natural durability and ability to store carbon, making it an ideal choice for reducing environmental impact in the construction industry. Employing a CNC cut joining mechanism ensures precise assembly, eliminates the need for standard fasteners like screws or nails, and facilitates efficient flat-packing and reusability of the units.
              </p>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Along with adopting ScanDisplay’s fabric shell scheme solution for stands, we also selected lightweight panels that, in keeping with our sustainable practices, lower carbon emissions and improve transport convenience. Following the event, exhibitors can store their graphic walls with ScanDisplay for reuse, promoting resource conservation, waste reduction, and furthering our sustainability objectives. The sustainable approach to improving our exhibition includes the use of reusable carpet tiles, significantly reducing waste compared to traditional single-use carpets typically found at exhibitions. By integrating digital screens and signage throughout the event space, we also lessened the dependence on freestanding banners, strengthening our sustainability efforts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives and Engagement Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Initiatives and Engagement</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column: Donating magazine collateral */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Donating magazine collateral</h3>
                <p className="text-gray-600 leading-relaxed">
                  The team intended to prohibit printed collateral, but media partners supplied popular magazines. After the event, surplus magazines were donated to Silverleaf School in Dunoon, which received recycling funds and utilised them to purchase seeds and plant vegetables which fed 750 children.
                </p>
              </div>
            </div>
            {/* Right Column: Recycling graphics */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Recycling graphics</h3>
                <p className="text-gray-600 leading-relaxed">
                  The team attempts to keep all signage information generic so that the images can be reused year after year. Any graphics that cannot be reused, such as sponsor walls or graphics with outdated logos, are donated to Sealand Gear, a Cape Town-based maker of repurposed outdoor bags and apparel. Sealand repurposes leftover fabric to make inners for their responsibly made bags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* People, Communities & Collaboration Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">People, Communities & Collaboration</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column: Supporting Township */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Supporting Township</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hyve has been purchasing delegate bags from Township® since 2018. Township is a Fair-Trade social company that promotes women's economic development in South African township communities. They support five cooperatives that employ 45 women in the Cape Town townships of Khayelitsha and Manenberg. All of the Township's items are manufactured from eco-friendly textiles such as jute, cotton, or recycled PET from plastic bottles.
                </p>
              </div>
            </div>
            {/* Right Column: Supporting Kidz Positive */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Supporting Kidz Positive</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kidz Positive serves as an income generation initiative, empowering mothers and caregivers of children impacted by HIV/AIDS to earn a livelihood. Workers collect raw materials weekly, either from home or at the local office in Cape Town, as shown in the images below. This year, Kidz Positive manufactured notebooks, pens, and ministerial folders for our delegates, essential tools for them to engage effectively in their roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ranked Section */}
      <div className="py-12 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Ranked among the top 100 most sustainable companies of 2024</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            In 2024, 9 of our Mining Indaba clients ranked among the top 100 most sustainable companies of 2024! Congratulations to Schneider Electric, SGS, Siemens, Hitachi, McKinsey, WSP, Microsoft, Newmont, and Epitoc for their leadership in sustainability and positive impact on the planet.
          </p>
          <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">VIEW ARTICLE</button>
        </div>
      </div>

      {/* Featured Projects and Impact Title */}
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: 'linear-gradient(to right, #4CAF50, #8BC34A)' }}>
        Featured Projects and Impact
      </div>

      {/* Masonwabe Educare Centre Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Masonwabe Educare Centre (Breadline Africa)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In partnership with Breadline Africa, Hyve Group have funded the reconstruction of the Masonwabe Educare Centre in Gugulethu, Cape Town, providing a safe, hygienic, and inspirational learning environment for 74 children. The newly constructed Early Childhood Development (ECD) facility was built using carbon-negative building technology called BRC (Biomass-Recycled Insulating Concrete), which is known for its multiple environmental benefits:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
            <li>95% recycled or waste material per m²</li>
            <li>Saves 20l of water per m² per day when compared to traditional brick and mortar</li>
            <li>3.1ha of indigenous ecosystems are restored per 43m² structure</li>
            <li>Can sequester up to 250kg CO2e per m² in the construction phase. Breadline Africa can provide the necessary Environmental Product Declaration (EPD)</li>
            <li>3-hour fire rated wall panels</li>
            <li>Maintaining an ambient temperature of 21°C and requiring no additional heating or cooling in the South African climate</li>
          </ul>
        </div>
      </div>

      {/* Township Sustainable Bags Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Township Sustainable Bags in Partnership with Hyve Group</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Bags made out of recycled PET from bottles collected in south Africa.</li>
                <li>Bags are made out of natural cotton locally sourced from South African countries.</li>
                <li>Bags produced in women-owned cooperatives based in township communities.</li>
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

      {/* The Nourish Our Children Programme Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-center md:text-left text-4xl font-bold text-gray-800 mb-8">The Nourish Our Children Programme (Ladles of Love)</h2>
            <p className="text-gray-600 leading-relaxed">
              The Nourish Our Children programme, which operates at the Masonwabe centre in Barcelona, Gugulethu, serves as a beacon of hope for the community. Following the event, Mining Indaba made a donation to Ladles of Love Nourish Our Children Programme, ensuring continued support for the school by providing nutritious meals to the children. The programme provides daily meals to children in need, ensuring they have access to essential nutrients for their growth and development. By educating both children and their families on proper nutrition, the Nourish Our Children programme aims to create a sustainable solution to food insecurity in the community.
            </p>
          </div>
          {/* Right Column: Video Placeholder */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
              {/* Placeholder for YouTube video or image */}
              Video Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-12 bg-gray-100 text-center italic text-2xl text-gray-700 leading-relaxed">
        <div className="container mx-auto px-4">
          <p class="mb-4">“Every bowl of food we provide to people in need is filled with hope and love.”</p>
          <p class="mb-4">This enables parents to focus on parenting rather than worrying about food scarcity, allowing children to play freely without fear of starvation. The food provided by Ladles of Love improves the lives of people who make different choices and behave differently when they are full. We are extremely grateful to Hyve for their continuous support in improving lives.”</p>
          <p class="font-bold">Andiswa Ncamiso</p>
          <p class="text-lg">One of the women warriors who set up and run a soup kitchen in the Joe Slovo informal community</p>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Our Partners</h2>
          {/* Placeholder for partner logos */}
          <div>Partner Logos Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;