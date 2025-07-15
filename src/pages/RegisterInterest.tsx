import React, { useState, useEffect } from "react";

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
    event:"",
    interestedIn: "",
    exhibitingDetails: "",
  });
  const [showSponsorForm, setShowSponsorForm] = useState(false);
  const [sponsorForm, setSponsorForm] = useState({
    sponsorName: "",
    sponsorCompany: "",
    sponsorType: "",
    sponsorBudget: "",
    sponsorEmail: "",
    sponsorPhoneCode: "",
    sponsorPhone: "",
    sponsorNotes: "",
    event:"",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [events, setEvents] = useState<{ id: number; title: string; date: string }[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        // Only keep id, title, date
        setEvents(data.map((e: any) => ({ id: e.id, title: e.title, date: e.date })));
      })
      .catch(() => setEvents([]));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "interestedIn" && value === "Sponsoring") {
      setShowSponsorForm(true);
    } else if (name === "interestedIn") {
      setShowSponsorForm(false);
    }
  };

  const handleSponsorChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setSponsorForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    if (form.interestedIn === "Sponsoring") {
      // Only show sponsor form, do not submit or validate main form
      setLoading(false);
      return;
    }
    if (form.interestedIn === "Exhibiting" && !form.exhibitingDetails) {
      setError("Please specify what you are exhibiting.");
      setLoading(false);
      return;
    }
    try {
      // Exhibitor request
      const res = await fetch("/api/requests/exhibitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          country: form.country,
          email: form.email,
          phoneCode: form.phoneCode,
          phoneNumber: form.phoneNumber,
          companyName: form.companyName,
          jobTitle: form.jobTitle,
          jobFunction: form.jobFunction,
          event: form.event,
          exhibitingDetails: form.exhibitingDetails,
        }),
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
        event:"",
        interestedIn: "",
        exhibitingDetails: "",
      });
    } catch (err) {
      setError(
        "There was an error submitting your registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSponsorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    // Validate sponsor form
    if (
      !sponsorForm.sponsorName ||
      !sponsorForm.sponsorCompany ||
      !sponsorForm.sponsorBudget ||
      !sponsorForm.sponsorEmail ||
      !sponsorForm.sponsorPhoneCode ||
      !sponsorForm.sponsorPhone ||
      !sponsorForm.event
    ) {
      setError("Please fill in all required sponsor fields.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/requests/sponsor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sponsorName: sponsorForm.sponsorName,
          sponsorCompany: sponsorForm.sponsorCompany,
          sponsorBudget: sponsorForm.sponsorBudget,
          sponsorEmail: sponsorForm.sponsorEmail,
          sponsorPhoneCode: sponsorForm.sponsorPhoneCode,
          sponsorPhone: sponsorForm.sponsorPhone,
          sponsorNotes: sponsorForm.sponsorNotes,
          event: sponsorForm.event,
        }),
      });
      if (!res.ok) throw new Error("Failed to register sponsor");
      setSuccess(
        "Thank you for your sponsorship interest! Our team will contact you soon."
      );
      setSponsorForm({
        sponsorName: "",
        sponsorCompany: "",
        sponsorBudget: "",
        sponsorEmail: "",
        sponsorPhoneCode: "",
        sponsorPhone: "",
        sponsorNotes: "",
        event:"",
      });
      setShowSponsorForm(false);
      // Do not reset main form fields
    } catch (err) {
      setError(
        "There was an error submitting your sponsorship. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Spacer to ensure bar is not covered by navbar or layout */}
      <div className="h-8 w-full"></div>
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] py-8 text-white text-center relative z-10">
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
                <svg
                  className="h-5 w-5 mr-2 text-[#2563eb] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Gain early access to delegate registration
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="h-5 w-5 mr-2 text-[#2563eb] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Receive timely updates on speakers, themes, and the official
                programme
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="h-5 w-5 mr-2 text-[#2563eb] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Stay informed on partnership announcements and networking
                opportunities
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="h-5 w-5 mr-2 text-[#2563eb] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
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
            {!showSponsorForm ? (
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

                
                <div className="mb-4">
                  <label
                    htmlFor="sponsorType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event*
                  </label>
                  <select
                    id="event"
                    name="event"
                    value={form.event}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  >
                    <option value="">Please Select</option>
                    {events.map((ev) => (
                      <option key={ev.id} value={ev.title}>{`${ev.title} (${ev.date})`}</option>
                    ))}
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
                    
                  </select>
                </div>

                {/* Show extra field if Exhibiting is selected */}
                {form.interestedIn === "Exhibiting" && (
                  <div className="mb-4">
                    <label
                      htmlFor="exhibitingDetails"
                      className="block text-sm font-medium text-gray-700"
                    >
                      What are you exhibiting?*
                    </label>
                    <input
                      type="text"
                      id="exhibitingDetails"
                      name="exhibitingDetails"
                      value={form.exhibitingDetails}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                      required
                    />
                  </div>
                )}

                {success && (
                  <div className="mb-4 text-blue-600 font-semibold">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="mb-4 text-red-600 font-semibold">{error}</div>
                )}

                <button
                  type="submit"
                  className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold px-8 py-3 rounded text-base shadow-md uppercase tracking-wide float-right"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "SUBMIT"}
                </button>
                {/* Admin Login Button */}
                <div className="mt-4 flex justify-end">
                  <a
                    href="/adminlogin"
                    className="text-sm text-blue-600 hover:underline border border-blue-600 rounded px-3 py-1 ml-2"
                  >
                    Admin Login
                  </a>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSponsorSubmit}>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#2563eb]">
                  Sponsorship Registration
                </h3>
                <div className="mb-4">
                  <label
                    htmlFor="sponsorName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="sponsorName"
                    name="sponsorName"
                    value={sponsorForm.sponsorName}
                    onChange={handleSponsorChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sponsorCompany"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="sponsorCompany"
                    name="sponsorCompany"
                    value={sponsorForm.sponsorCompany}
                    onChange={handleSponsorChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sponsorType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event*
                  </label>
                  <select
                    id="event"
                    name="event"
                    value={sponsorForm.event}
                    onChange={handleSponsorChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  >
                    <option value="">Please Select</option>
                    {events.map((ev) => (
                      <option key={ev.id} value={ev.title}>{`${ev.title} (${ev.date})`}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sponsorBudget"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Estimated Budget (USD)*
                  </label>
                  <input
                    type="number"
                    id="sponsorBudget"
                    name="sponsorBudget"
                    value={sponsorForm.sponsorBudget}
                    onChange={handleSponsorChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sponsorEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="sponsorEmail"
                    name="sponsorEmail"
                    value={sponsorForm.sponsorEmail}
                    onChange={handleSponsorChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sponsorPhone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number*
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="phoneCode"
                      name="sponsorPhoneCode"
                      value={sponsorForm.sponsorPhoneCode}
                      onChange={handleSponsorChange}
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
                    id="sponsorPhone"
                    name="sponsorPhone"
                    value={sponsorForm.sponsorPhone}
                    onChange={handleSponsorChange}
                    className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    required
                  />
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="sponsorNotes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="sponsorNotes"
                    name="sponsorNotes"
                    value={sponsorForm.sponsorNotes}
                    onChange={handleSponsorChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-200"
                    rows={3}
                  />
                </div>
                {success && (
                  <div className="mb-4 text-blue-600 font-semibold">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="mb-4 text-red-600 font-semibold">{error}</div>
                )}
                <button
                  type="submit"
                  className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold px-8 py-3 rounded text-base shadow-md uppercase tracking-wide float-right"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "SUBMIT SPONSOR FORM"}
                </button>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowSponsorForm(false)}
                    className="text-sm text-blue-600 hover:underline border border-blue-600 rounded px-3 py-1 ml-2"
                  >
                    Back to Main Form
                  </button>
                </div>
              </form>
            )}
            <p className="text-xs text-gray-600 mt-6">
              Hyve Group takes your privacy seriously – you can read more about
              this in our{" "}
              <a href="#" className="text-[#2563eb] hover:underline">
                Privacy Notice
              </a>
              . We use your personal information to provide the services you
              have requested from us and for other carefully considered
              legitimate business purposes. This includes sending you marketing
              communications and advertising about our events as well as
              information and publications which we think would be of interest
              to you. You have the right to object to this processing and, if
              you wish to do so, you can{" "}
              <a href="#" className="text-[#2563eb] hover:underline">
                update your preferences here
              </a>
              .{" "}
              <a href="#" className="text-[#2563eb] hover:underline">
                View a list of the events organised by Hyve Group here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterInterest;
