import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Vantage! We will respond soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="padding pt-32 min-h-screen flex justify-center">
      <div className="max-container w-full max-w-2xl">

        <h1 className="text-4xl font-bold font-palanquin text-center">
          Contact <span className="text-coral-red">Vantage</span>
        </h1>

        <p className="text-slate-gray text-center font-montserrat mt-4">
          Have a question about our shoes or want to place an order?
          Send us a message and we will get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-slate-gray/20 rounded-lg px-4 py-3 outline-none focus:border-coral-red"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-slate-gray/20 rounded-lg px-4 py-3 outline-none focus:border-coral-red"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-slate-gray/20 rounded-lg px-4 py-3 outline-none focus:border-coral-red"
          />

          <button
            type="submit"
            className="bg-coral-red text-white py-3 rounded-full font-montserrat font-semibold hover:bg-black transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;