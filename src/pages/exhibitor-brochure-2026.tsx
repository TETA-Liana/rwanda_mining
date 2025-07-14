import React, { useState } from "react";

const ExhibitorBrochure2026 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    country: "",
    companyName: "",
    jobTitle: "",
    jobFunction: "",
    sector: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
    // Add API call or further logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#004F71] to-[#ADD8E6] py-8 text-white text-center pt-24">
        <h1 className="text-3xl md:text-4xl font-bold">
          Download our 2026 Exhibitor Brochure
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-700">
          Want to maximize your exposure at Rwanda Mining Week 2026? Download our
          exclusive exhibitor brochure now and discover how you can showcase your
          brand at Rwanda’s premier mining event!
        </p>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/exhibit-or-sponsor/exhibitor-brochure.png" // Replace with actual image path
            alt="Rwanda Mining Week 2026 Exhibitor Brochure"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
          />

          <div className="mt-8 w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Gain access to:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                Details about Rwanda Mining Week, Rwanda’s premier mining event,
                happening in 2026 in Kigali
              </li>
              <li>
                Exhibitor and sponsorship opportunities at Rwanda Mining Week 2026
              </li>
              <li>Insights into our audience types — your potential leads!</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To discuss the floorplan and exhibiting or sponsorship opportunities,
              simply click "Enquire" below, and a member of our team will get in
              touch with you.
            </p>
            <button className="bg-[#004F71] hover:bg-[#003a54] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              ENQUIRE
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                aria-required="true"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
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
                name="lastName"
                id="lastName"
                required
                aria-required="true"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
              />
              <p className="mt-2 text-sm text-gray-500">
                Using a business email helps us better understand your interest in
                sponsoring.
              </p>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number*
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <select
                  id="countryCode"
                  name="countryCode"
                  required
                  aria-required="true"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="rounded-none rounded-l-md border-black focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
                >
                  <option value="">Select Country Code</option>
                  <option value="+1">United States (+1)</option>
                  <option value="+44">United Kingdom (+44)</option>
                  <option value="+27">South Africa (+27)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+1">Canada (+1)</option>
                  <option value="+49">Germany (+49)</option>
                  <option value="+33">France (+33)</option>
                  <option value="+86">China (+86)</option>
                  <option value="+91">India (+91)</option>
                  <option value="+55">Brazil (+55)</option>
                  <option value="+7">Russia (+7)</option>
                  <option value="+81">Japan (+81)</option>
                  <option value="+250">Rwanda (+250)</option>
                  <option value="+260">Zambia (+260)</option>
                  <option value="+263">Zimbabwe (+263)</option>
                  <option value="+258">Mozambique (+258)</option>
                  <option value="+264">Namibia (+264)</option>
                  <option value="+267">Botswana (+267)</option>
                  <option value="+254">Kenya (+254)</option>
                  <option value="+255">Tanzania (+255)</option>
                  <option value="+256">Uganda (+256)</option>
                  <option value="+233">Ghana (+233)</option>
                  <option value="+234">Nigeria (+234)</option>
                  <option value="+243">DR Congo (+243)</option>
                  <option value="+244">Angola (+244)</option>
                  <option value="+251">Ethiopia (+251)</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  aria-required="true"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full flex-1 rounded-none rounded-r-md border-black focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
                  placeholder="e.g., 8123 456789"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country*
              </label>
              <select
                id="country"
                name="country"
                required
                aria-required="true"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
              >
                <option value="">Please Select</option>
                <option value="RW">Rwanda</option>
                <option value="ZA">South Africa</option>
                <option value="KE">Kenya</option>
                <option value="TZ">Tanzania</option>
                <option value="UG">Uganda</option>
                <option value="GH">Ghana</option>
                <option value="NG">Nigeria</option>
                <option value="CD">DR Congo</option>
                <option value="AO">Angola</option>
                <option value="ET">Ethiopia</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
                <option value="MZ">Mozambique</option>
                <option value="NA">Namibia</option>
                <option value="BW">Botswana</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="CA">Canada</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="CN">China</option>
                <option value="IN">India</option>
                <option value="BR">Brazil</option>
                <option value="RU">Russia</option>
                <option value="JP">Japan</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company name*
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                required
                aria-required="true"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job title*
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                required
                aria-required="true"
                value={formData.jobTitle}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="jobFunction"
                className="block text-sm font-medium text-gray-700"
              >
                Job function*
              </label>
              <select
                id="jobFunction"
                name="jobFunction"
                required
                aria-required="true"
                value={formData.jobFunction}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
              >
                <option value="">Please Select</option>
                <option value="academic_student">Academic or Student</option>
                <option value="account_management">Account Management</option>
                <option value="administration">Administration</option>
                <option value="administrative_operations">Administrative/Operations</option>
                <option value="ceo_md">CEO/MD</option>
                <option value="consultancy_advisory">Consultancy & Advisory</option>
                <option value="consultant">Consultant</option>
                <option value="design_engineering_product_design">Design Engineering & Product Design</option>
                <option value="distribution_management">Distribution Management</option>
                <option value="editorial_content_journalism">Editorial Content & Journalism</option>
                <option value="electrical_engineering">Electrical Engineering</option>
                <option value="engineer">Engineer</option>
                <option value="event_management">Event Management</option>
                <option value="finance">Finance</option>
                <option value="general_corporate_management">General & Corporate Management</option>
                <option value="general_management">General Management</option>
                <option value="government">Government</option>
                <option value="industrial_engineering">Industrial Engineering</option>
                <option value="manufacturing_engineering">Manufacturing Engineering</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="sector"
                className="block text-sm font-medium text-gray-700"
              >
                Sector*
              </label>
              <select
                id="sector"
                name="sector"
                required
                aria-required="true"
                value={formData.sector}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-black shadow-sm focus:bg-gray-200 focus:ring-0 focus:border-black sm:text-sm bg-gray-200"
              >
                <option value="">Please Select</option>
                <option value="precious_metals">Precious Metals</option>
                <option value="base_metals">Base Metals</option>
                <option value="bulk_minerals">Bulk Minerals</option>
                <option value="industrial_minerals">Industrial Minerals</option>
                <option value="gemstones">Gemstones</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Privacy Policy Text */}
            <p className="mt-4 text-sm text-gray-600">
              Hyve Group takes your privacy seriously - you can read more about
              this in our{" "}
              <a href="/privacy-policy" className="text-[#004F71] hover:underline">
                Privacy Notice
              </a>
              . We use your personal information to provide the services you have
              requested from us and for other carefully considered legitimate
              business purposes. This includes sending you marketing communications
              and advertising about our events as well as information and
              publications which we think would be of interest to you. You have the
              right to object to this processing and, if you wish to do so, you can{" "}
              <a href="/preferences" className="text-[#004F71] hover:underline">
                update your preferences here
              </a>
              . View a list of the events organized by{" "}
              <a href="/events" className="text-[#004F71] hover:underline">
                Hyve Group here
              </a>
              .
            </p>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-[#004F71] hover:bg-[#003a54] text-white font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide"
                aria-label="Submit exhibitor brochure request form"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExhibitorBrochure2026;