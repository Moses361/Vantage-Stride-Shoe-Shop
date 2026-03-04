import { useState } from "react";
import Button from "../components/Button";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-10 bg-pale-blue rounded-[20px] text-center border border-coral-red">
        <h3 className="text-2xl font-bold font-palanquin">Thanks for contacting us!</h3>
        <p className="mt-4 font-montserrat text-slate-gray">
          Your order has been received. We will get back to you shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-coral-red font-semibold underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <section id="contact-us" className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 border border-slate-gray rounded-[20px] bg-white">
        <h3 className="text-xl font-bold font-palanquin">Inquire to Buy</h3>
        
        <input required type="text" placeholder="Full Name" className="input border-b pb-2 outline-none" />
        <input required type="email" placeholder="Email Address" className="input border-b pb-2 outline-none" />
        <textarea 
          required
          placeholder="Size and shipping address..." 
          className="input border-b pb-2 outline-none h-20 resize-none"
        ></textarea>
        
        <div className="w-full">
          <Button label="Contact Us for to Buy Shoes" fullWidth />
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
