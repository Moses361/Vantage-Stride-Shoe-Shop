import { Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const Home = () => (
  <>
    <section className="xl:padding-l wide:padding-r padding-b pt-16 sm:pt-28">
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
      <Subscribe />
    </section>
  </>
);

// ✅ Add top padding to About Us page
const About = () => (
  <section className="padding pt-16 sm:pt-28">
    <SuperQuality />
  </section>
);

// ✅ Add top padding to Products page
const Products = () => (
  <section className="padding pt-16 sm:pt-28">
    <PopularProducts />
  </section>
);

// ✅ Add top padding to Contact Us page
const Contact = () => (
  <section className="padding pt-16 sm:pt-28">
    <Subscribe />
  </section>
);

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;