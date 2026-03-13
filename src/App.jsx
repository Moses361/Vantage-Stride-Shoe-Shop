import { Routes, Route, useParams, Link } from "react-router-dom";
import { Nav } from "./components";
import { products } from "./constants";
import ScrollToTop from "./components/ScrollToTop";

import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  ContactUs,
  SuperQuality,
} from "./sections";


/* ---------------- HOME PAGE ---------------- */

const Home = () => (
  <section className="pt-28">

    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <ContactUs />
    </section>

  </section>
);


/* ---------------- ABOUT PAGE ---------------- */

const About = () => (
  <section className="padding pt-28 min-h-screen flex flex-col gap-20">

    <div className="max-container">
      <SuperQuality />
    </div>

    <div className="max-container flex flex-col items-center text-center bg-pale-blue p-16 rounded-3xl mb-20 border border-slate-100 shadow-sm">

      <h2 className="text-4xl font-palanquin font-bold">
        The <span className="text-coral-red">Vantage</span> Story
      </h2>

      <p className="mt-6 font-montserrat text-slate-gray max-w-3xl text-lg leading-8 italic">
        Founded by Moses, Vantage was built on a simple principle:
        elite performance should never sacrifice style. Our mission is to
        empower athletes and everyday champions with footwear that delivers
        comfort, innovation and bold design.
      </p>

      <div className="mt-10">
        <Link to="/products">
          <button className="bg-coral-red text-white px-8 py-4 rounded-full font-montserrat font-bold hover:bg-black transition shadow-lg">
            Explore Our Full Collection
          </button>
        </Link>
      </div>

    </div>

  </section>
);


/* ---------------- PRODUCTS PAGE ---------------- */

const Products = () => (
  <section className="padding pt-28">
    <PopularProducts />
  </section>
);


/* ---------------- CONTACT PAGE ---------------- */

const Contact = () => (
  <section className="padding pt-28 min-h-screen">

    <div className="max-container">

      <h1 className="text-4xl font-bold font-palanquin text-center">
        Contact <span className="text-coral-red">Vantage</span>
      </h1>

      <p className="text-center text-slate-gray font-montserrat mt-4">
        Have a question about our shoes or want to place an order?
        Send us a message and our team will respond shortly.
      </p>

      <div className="mt-16">
        <ContactUs />
      </div>

    </div>

  </section>
);


/* ---------------- PRODUCT DETAILS ---------------- */

const Details = () => {

  const { slug } = useParams();

  const shoe = products.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!shoe) {
    return (
      <div className="pt-28 p-20 text-center font-bold">
        Shoe not found!
      </div>
    );
  }

  return (
    <section className="padding pt-28 flex flex-col items-center min-h-screen">

      <div className="flex max-lg:flex-col items-start gap-10 max-container">

        <div className="flex-1">
          <img
            src={shoe.imgURL}
            alt={shoe.name}
            className="w-full max-w-[450px] aspect-square object-contain rounded-3xl shadow-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col">

          <h1 className="text-4xl font-bold font-palanquin">
            {shoe.name}
          </h1>

          <p className="text-2xl text-coral-red font-montserrat font-semibold mt-4">
            {shoe.price}
          </p>

          <p className="text-slate-gray font-montserrat mt-6 leading-7">
            Experience premium comfort and elite performance built for
            everyday excellence by Vantage.
          </p>

          <div className="mt-10">
            <ContactUs />
          </div>

        </div>

      </div>

    </section>
  );
};


/* ---------------- MAIN APP ---------------- */

const App = () => {
  return (
    <main className="relative overflow-x-hidden">

      <ScrollToTop />

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:slug" element={<Details />} />
      </Routes>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

    </main>
  );
};

export default App;