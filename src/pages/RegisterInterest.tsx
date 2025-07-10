import React, { useState } from "react";

const RegisterInterest = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    companyName: "",
    jobTitle: "",
    jobFunction: "",
    interestedIn: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("http://localhost:8080/api/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to register interest");
      setSuccess("Thank you for registering your interest!");
      setForm({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        phoneCode: "",
        phoneNumber: "",
        companyName: "",
        jobTitle: "",
        jobFunction: "",
        interestedIn: "",
      });
    } catch (err) {
      setError(
        "There was an error submitting your registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
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
                    value={form.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
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
                    value={form.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
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
                  value={form.country}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                  required
                >
                  <option value="">Please Select</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Other">Other</option>
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
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                  required
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
                    value={form.phoneCode}
                    onChange={handleChange}
                    className="mt-1 block w-1/3 border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  >
                    <option value="">Select</option>
                    <option value="+250">Rwanda (+250)</option>
                    <option value="+27">South Africa (+27)</option>
                    <option value="+233">Ghana (+233)</option>
                    <option value="+234">Nigeria (+234)</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 123456789"
                    className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
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
                  value={form.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                  required
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
                  value={form.jobTitle}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                  required
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
                  value={form.jobFunction}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                  required
                >
                  <option value="">Please Select</option>
                  <option value="Management">Management</option>
                  <option value="Operations">Operations</option>
                  <option value="Technical">Technical</option>
                  <option value="Finance">Finance</option>
                  <option value="Other">Other</option>
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
                  value={form.interestedIn}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                  required
                >
                  <option value="">Please Select</option>
                  <option value="Attending">Attending</option>
                  <option value="Exhibiting">Exhibiting</option>
                  <option value="Sponsoring">Sponsoring</option>
                  <option value="Speaking">Speaking</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {success && (
                <div className="mb-4 text-green-600 font-semibold">
                  {success}
                </div>
              )}
              {error && (
                <div className="mb-4 text-red-600 font-semibold">{error}</div>
              )}

              <button
                type="submit"
                className="bg-[#64a63a] hover:bg-[#5cb030] text-white font-bold px-8 py-3 rounded text-base shadow-md uppercase tracking-wide float-right"
                disabled={loading}
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterInterest;
