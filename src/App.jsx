import { Routes, Route, useParams } from "react-router-dom"; // Added useParams
import { Nav } from "./components";
import { products } from "./constants"; // Ensure this import is here
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
      <ContactUs />
    </section>
  </>
);

const About = () => (
  <section className="padding pt-16 sm:pt-28">
    <SuperQuality />
  </section>
);

const Products = () => (
  <section className="padding pt-16 sm:pt-28">
    <PopularProducts />
  </section>
);

const Contact = () => (
  <section className="padding pt-16 sm:pt-28">
    <ContactUs />
  </section>
);

// UPDATED: Dynamic Details Component
const Details = () => {
  const { slug } = useParams();
  
  const shoe = products.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!shoe) return <div className="p-20 text-center font-bold">Shoe not found!</div>;

  return (
    <section className="padding pt-32 flex flex-col items-center min-h-screen">
      <div className="flex max-lg:flex-col items-start gap-10 max-container">
        <div className="flex-1">
          <img 
            src={shoe.imgURL} 
            alt={shoe.name} 
            className="w-full max-w-[500px] aspect-square object-cover rounded-3xl shadow-2xl" 
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold font-palanquin">{shoe.name}</h1>
          <p className="text-2xl text-coral-red font-montserrat font-semibold mt-4">
            {shoe.price}
          </p>
          <p className="text-slate-gray font-montserrat mt-6 leading-7">
            Experience premium comfort and elite performance built for everyday excellence.
          </p>
          
          <div className="mt-10">
             <ContactUs />
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* UPDATED: Dynamic path with :slug */}
        <Route path="/details/:slug" element={<Details />} />
      </Routes>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
