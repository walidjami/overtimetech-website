import React, { useState } from "react";

const IndexSectionCustomComponents3: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    service: 'Computer Repair',
    details: '',
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          details: formData.details,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! We’ll reach out soon.");
        setFormData({
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          service: 'Computer Repair',
          details: '',
        });
      } else {
        setStatus("error");
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }
    finally {
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };
  return (
    <section
      id="ready-to-get-started"
      className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 py-20"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-heading mb-4">
              Ready to Experience OverTime?
            </h2>
            <p className="text-lg leading-relaxed text-neutral-300">
              Get in touch with us today and discover how our comprehensive tech
              solutions can transform your business.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-2"
                  htmlFor=""
                >
                  First Name
                </label>
                <input
                  className="w-full py-3 px-4 bg-neutral-800 border border-neutral-700 hover:border-neutral-600 focus:border-white focus:border-neutral-400 text-white placeholder-neutral-400 rounded-lg transition duration-200 focus:outline-none"
                  type="text"
                  name="first-name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-2"
                  htmlFor=""
                >
                  Last Name
                </label>
                <input
                  className="w-full py-3 px-4 bg-neutral-800 border border-neutral-700 hover:border-neutral-600 focus:border-white focus:border-neutral-400 text-white placeholder-neutral-400 rounded-lg transition duration-200 focus:outline-none"
                  type="text"
                  name="last-name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-2"
                htmlFor=""
              >
                Phone Number
              </label>
              <input
                className="w-full py-3 px-4 bg-neutral-800 border border-neutral-700 hover:border-neutral-600 focus:border-white focus:border-neutral-400 text-white placeholder-neutral-400 rounded-lg transition duration-200 focus:outline-none"
                type="tel"
                name="phone"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-2"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="w-full py-3 px-4 bg-neutral-800 border border-neutral-700 hover:border-neutral-600 focus:border-white focus:border-neutral-400 text-white placeholder-neutral-400 rounded-lg transition duration-200 focus:outline-none"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-2"
                htmlFor=""
              >
                Service Needed
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none py-3 px-4 cursor-pointer bg-neutral-800 border border-neutral-700 hover:border-neutral-600 focus:border-white focus:border-neutral-400 text-white placeholder-neutral-400 rounded-lg transition duration-200 focus:outline-none"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option>Computer Repair</option>
                  <option>Custom Build</option>
                  <option>Software Development</option>
                  <option>Website Creation</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 mb-2"
                htmlFor=""
              >
                Project Details
              </label>
              <textarea
                className="w-full py-3 px-4 bg-neutral-800 border border-neutral-700 hover:border-neutral-600 focus:border-white focus:border-neutral-400 text-white placeholder-neutral-400 rounded-lg transition duration-200 focus:outline-none"
                name="details"
                rows={4}
                placeholder="Tell us more about your project..."
                value={formData.details}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg"
                type="submit"
              >
                {status === "loading" ? "Submitting..." : "Get Your Quote"}
                {status === "success" ? "Thank you! We’ll reach out soon." : ""}
                {status === "error" ? "An error occurred. Please try again." : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents3;
