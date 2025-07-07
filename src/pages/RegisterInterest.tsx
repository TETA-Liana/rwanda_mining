import React from "react";

const RegisterInterest = () => {
  return (
    <>
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#64a63a] to-[#b8f337] py-8 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Register your Interest for Mining Indaba 2026
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          Get Ready for What's Next - Sign Up For The Latest Updates
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Information */}
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              Register your interest for{" "}
              <span className="font-bold">Mining Indaba 2026</span>, which will
              take place from{" "}
              <span className="font-bold">9 -12 February in Cape Town</span>,
              and be among the first to receive important event updates.
            </p>

            <p className="text-gray-900 font-bold mb-2">
              By registering, you will:
            </p>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-center text-gray-700">
                <img
                  src="/check-icon.png"
                  alt="Checkmark"
                  className="h-4 w-4 mr-2 text-[#64a63a]"
                />
                Gain early access to delegate registration
              </li>
              <li className="flex items-center text-gray-700">
                <img
                  src="/check-icon.png"
                  alt="Checkmark"
                  className="h-4 w-4 mr-2 text-[#64a63a]"
                />
                Receive timely updates on speakers, themes, and the official
                programme
              </li>
              <li className="flex items-center text-gray-700">
                <img
                  src="/check-icon.png"
                  alt="Checkmark"
                  className="h-4 w-4 mr-2 text-[#64a63a]"
                />
                Stay informed on partnership announcements and networking
                opportunities
              </li>
              <li className="flex items-center text-gray-700">
                <img
                  src="/check-icon.png"
                  alt="Checkmark"
                  className="h-4 w-4 mr-2 text-[#64a63a]"
                />
                Be part of the community advancing African mining and investment
              </li>
            </ul>

            <p className="text-gray-700 mb-2">
              This is an information-only sign-up to keep you in the loop via
              email with relevant event news.
            </p>
            <p className="text-gray-700">
              Join thousands of professionals from across the mining value chain
              and stay ahead of the conversation shaping the future of African
              mining.
            </p>
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
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country*
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
              >
                <option>Please Select</option>
                {/* Add country options here */}
              </select>
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

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number*
              </label>
              <div className="flex gap-2">
                <select
                  id="phoneCode"
                  name="phoneCode"
                  className="mt-1 block w-1/3 border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                >
                  <option>Rwanda</option>
                  {/* Add other country codes */}
                </select>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+250"
                  className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
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
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job title*
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="jobFunction"
                className="block text-sm font-medium text-gray-700"
              >
                Job function*
              </label>
              <select
                id="jobFunction"
                name="jobFunction"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
              >
                <option>Please Select</option>
                {/* Add job function options here */}
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="interestedIn"
                className="block text-sm font-medium text-gray-700"
              >
                I am interested in*
              </label>
              <select
                id="interestedIn"
                name="interestedIn"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
              >
                <option>Please Select</option>
                {/* Add interested in options here */}
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

export default RegisterInterest;
