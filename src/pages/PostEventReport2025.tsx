import React from "react";

const PostEventReport2025 = () => {
  return (
    <>
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-8 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Post Event Report</h1>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg mb-8 text-center text-gray-700">
          The official 2025 Post Show Report is now live! This exclusive report
          gives you a front-row seat to the industry's most influential
          gathering, showcasing the people, discussions, and opportunities that
          made Mining Indaba 2025 a success.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Report Details */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Inside the Report:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>
                Who attended – Key mining companies, government delegations &
                decision-makers
              </li>
              <li>2025 highlights – The stats behind this year's success</li>
              <li>
                Government presence – Ministers, heads of delegation & policy
                leaders
              </li>
              <li>Diversity & inclusion – Women in mining & future talent</li>
              <li>
                Networking moments – The connections driving business forward
              </li>
              <li>Looking ahead – What's coming for Mining Indaba 2026</li>
            </ul>

            <p className="text-lg font-semibold mb-4 text-gray-900">
              Read the full report now and see why Mining Indaba is the
              industry's must-attend event!
            </p>

            {/* Image Section */}
            <div className="relative bg-[#64a63a] rounded-lg overflow-hidden shadow-md">
              <img
                src="/placeholder-post-event-report.png" // You might need to add this image
               
                className="w-full h-auto object-cover "
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black bg-opacity-40">
               
               
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company name*
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-gray-700"
              >
                I am interested in*
              </label>
              <select
                id="interest"
                name="interest"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
              >
                <option>Please Select</option>
                <option>Exhibiting</option>
                <option>Visiting</option>
                {/* Add other options as needed */}
              </select>
            </div>

            <p className="text-xs text-gray-600 mb-6">
              Hyve Group takes your privacy seriously – you can read more about
              this in our{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                Privacy Notice
              </a>
              . We use your personal information to provide the services you
              have requested from us and for other carefully considered
              legitimate business purposes. This includes sending you marketing
              communications and advertising about our events as well as
              information and publications which we think would be of interest
              to you. You have the right to object to this processing and, if
              you wish to do so, you can{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                update your preferences here
              </a>
              .{" "}
              <a href="#" className="text-[#64a63a] hover:underline">
                View a list of the events organised by Hyve Group here
              </a>
              .
            </p>

            <button className="bg-[#64a63a] hover:bg-[#5cb030] text-white font-bold px-8 py-3 rounded text-base shadow-md uppercase tracking-wide float-right">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostEventReport2025;
