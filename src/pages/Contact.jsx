import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Vantage! Your order request has been received.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    /* FIXED: Added padding-x to prevent the text and form from touching the screen edges */
    <section className="padding-x pb-16 min-h-screen flex justify-center bg-white">
      <div className="w-full max-w-2xl flex flex-col items-center">

        <h1 className="text-4xl font-bold font-palanquin text-center">
          Contact <span className="text-coral-red">Vantage</span>
        </h1>

        <p className="text-slate-gray text-center font-montserrat mt-4 max-w-lg">
          Have a question about our shoes or want to place an order?
        </p>

        <form
          onSubmit={handleSubmit}
          /* FIXED: Added p-6 for mobile and sm:p-10 for desktop */
          className="mt-10 flex flex-col gap-6 bg-white p-6 sm:p-10 rounded-3xl shadow-2xl w-full border border-slate-100"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-slate-gray/20 rounded-xl px-4 py-4 outline-none focus:border-coral-red bg-slate-50/50"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-slate-gray/20 rounded-xl px-4 py-4 outline-none focus:border-coral-red bg-slate-50/50"
          />

          <textarea
            name="message"
            placeholder="Size, model, and shipping address..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-slate-gray/20 rounded-xl px-4 py-4 outline-none focus:border-coral-red bg-slate-50/50 resize-none"
          />

          <button
            type="submit"
            className="bg-coral-red text-white py-4 rounded-full font-montserrat font-bold hover:bg-black transition-all shadow-lg active:scale-95"
          >
            Send Message to Vantage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
