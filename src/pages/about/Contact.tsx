import React from 'react';


// Event Team Members data (15 fully specified members)
const eventTeamMembers = [
  {
    image: '/public/advisor team/240206-MarnaC_164-scaled.jpg',
    name: 'Floss Harwood',
    title: 'Portfolio Director',
    email: 'floss.harwood@miningindaba.com',
  },
  {
    image: '/public/advisor team/400x-estelle.jpg',
    name: 'Fred Noce',
    title: 'VP of Commercial & Business Development',
    email: 'fred.noce@miningindaba.com',
  },
  {
    image: '/public/advisor team/Bongi-Ntsoelengoe-Headshot.jpg',
    name: 'Alfonso Jugo',
    title: 'Key Account Director',
    email: 'alfonso.jugo@miningindaba.com',
  },
  {
    image: '/public/advisor team/ime.png',
    name: 'Nathan Hirsch',
    title: 'Key Account Director – South Africa',
    email: 'nathan.hirsch@miningindaba.com',
  },
  {
    image: '/public/advisor team/fabiana-di-lorenzo_1.jpg',
    name: 'Susan Chifundo Maliya',
    title: 'Government Relations Lead',
    email: 'susan.maliya@miningindaba.com',
  },
  {
    image: '/public/advisor team/heidi.png',
    name: 'Laura Cornish',
    title: 'Content and Communities Director',
    email: 'laura.cornish@miningindaba.com',
  },
  {
    image:'/public/advisor team/Sonwabo-Modimoeng.jpg',
    name: 'Ahmed Ouguenoune',
    title: 'Senior Content Producer',
    email: 'ahmed.ouguenoune@miningindaba.com',
  },
  {
    image: '/public/advisor team/Marie_Chantal-(2).jpg',
    name: 'Chanel Burke',
    title: 'Senior Comms Manager',
    email: 'chanel.burke@miningindaba.com',
  },
  {
    image: '/public/advisor team/DDG-Ntokozo-Nzimande.jpg',
    name: 'Collen Dlamini',
    title: 'Head of Public Affairs South Africa',
    email: 'collen.dlamini@miningindaba.com',
  },
  {
    image: '/public/advisor team/Kenny-Ives.jpg',
    name: 'Zeinab El-Sayed',
    title: 'Head of Government Partnerships',
    email: 'zeinab.elsayed@miningindaba.com',
  },
  {
    image: '/public/advisor team/Deshan-Naidoo.png',
    name: 'Frans Baleni',
    title: 'Former General Secretary NUM',
    email: 'frans.baleni@miningindaba.com',
  },
  {
    image: '/public/advisor team/dsc_0507.jpg',
    name: 'Dr. Marit Kitaw',
    title: 'Interim Director, African Union-AMDC',
    email: 'marit.kitaw@miningindaba.com',
  },
  {
    image: '/public/advisor team/Indaba-Profile-pic.jpg',
    name: 'Kwasi Ampofo',
    title: 'Head of Metals and Mining, BloombergNEF',
    email: 'kwasi.ampofo@miningindaba.com',
  },
  {
    image: '/public/advisor team/Indaba-Profile-pic.jpg',
    name: 'Marie Chantal',
    title: 'Event Coordinator',
    email: 'marie.chantal@miningindaba.com',
  },
  {
    image: '/public/advisor team/David-Sturmes-New-Image-2025.jpg',
    name: 'Tim O’Connor',
    title: 'Head of Operations',
    email: 'tim.oconnor@miningindaba.com',
  },
];

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-60 flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundImage: 'linear-gradient(to right, #4CAF50, #8BC34A)' }}>
        Contact us
      </div>

      {/* Contact Us Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl text-gray-800 mb-8"><i>Want to contact us directly? Choose how you want to get in touch with us here. (All fields are compulsory)</i></h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column: Form */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <form>
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First name*</label>
                  <input type="text" id="firstName" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last name*</label>
                  <input type="text" id="lastName" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email*</label>
                  <input type="email" id="email" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone number*</label>
                  <div className="flex">
                    {/* Country Code Placeholder */}
                    <select className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option>Rwanda +250</option>
                      {/* Add other country codes */}
                    </select>
                    <input type="text" id="phoneNumber" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country*</label>
                  <select id="country" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Please Select</option>
                    {/* Add other countries */}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Company name*</label>
                  <input type="text" id="companyName" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                  <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2">Job title*</label>
                  <input type="text" id="jobTitle" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                 <div className="mb-4">
                  <label htmlFor="jobFunction" className="block text-gray-700 text-sm font-bold mb-2">Job function*</label>
                  <select id="jobFunction" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Please Select</option>
                    {/* Add other job functions */}
                  </select>
                </div>
                 <div className="mb-4">
                  <label htmlFor="sector" className="block text-gray-700 text-sm font-bold mb-2">Sector*</label>
                  <select id="sector" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Please Select</option>
                    {/* Add other sectors */}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea id="message" rows={4} className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Hyve Group takes your privacy seriously - you can read more about this in our <a href="#" className="text-blue-600 hover:underline">Privacy Notice</a>. We use your personal information to provide the services you have requested from us and for other carefully considered legitimate business purposes. This includes sending you marketing communications and advertising about our events as well as information and publications which we think would be of interest to you. You have the right to object to this processing and, if you wish to do so, you can <a href="#" className="text-blue-600 hover:underline">update your preferences here</a>. View a list of the events organised by <a href="#" className="text-blue-600 hover:underline">Hyve Group here</a>.
                </div>
                <div className="mb-4">
                  {/* reCAPTCHA Placeholder */}
                   <div className="bg-gray-300 h-16 w-full flex items-center justify-center text-gray-700 text-sm">
                     reCAPTCHA Placeholder
                   </div>
                </div>
                <button type="submit" className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800 transition duration-300">SUBMIT</button>
              </form>
            </div>

            {/* Right Column: Map and Assistant Info */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-gray-300 h-96 w-full mb-8 flex items-center justify-center text-gray-700 text-xl">
                Map Placeholder
              </div>
              <div>
                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Mining Indaba Assistant – the fastest solution to your queries</h2>
                 <p className="text-gray-600 leading-relaxed mb-4">
                   Mining Indaba Assistant is an AI-empowered FAQ system which has answers to the majority of the questions you might have about the event!
                 </p>
                 <p className="text-gray-600 leading-relaxed mb-4">
                   To start a conversation with Mining Indaba Assistant just click on the icon with the speech bubble in the right corner with the text 'Find all the answers on the event here!'.
                 </p>
                 <p className="text-gray-600 leading-relaxed">
                   This is the fastest way to get in contact with us, so we do suggest that you chat with Mining Indaba Assistant if you need help. If you would still like to speak to a member of our Registration team, please fill in the enquiry form above. Please note that it may take up to 3 working days to respond to your enquiry due to the high volume of requests that we receive from many different events.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Team Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Event Team</h2>
          <p className="text-lg text-gray-600 mb-8">Need some help? Find your agent!</p>

          {/* Filters Placeholder */}
          <div className="flex justify-center space-x-4 mb-8">
             <input type="text" placeholder="Search by name" className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             <select className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 hover:bg-gray-200 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
               <option>All functions</option>
                {/* Add other functions */}
             </select>
             <select className="bg-white border-1 border-black hover:border-2 hover:border-gray-400 hover:bg-gray-200 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
               <option>All countries</option>
               {/* Add other countries */}
             </select>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {eventTeamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-gray-300 rounded-full h-32 w-32 flex items-center justify-center text-gray-700 mb-4 overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="h-32 w-32 object-cover rounded-full" />
                  ) : (
                    'Image'
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
                <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;