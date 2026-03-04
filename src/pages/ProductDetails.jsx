import { useParams, Link } from "react-router-dom";
import { products } from "../constants";

const ProductDetails = () => {
  const { slug } = useParams();
  // Find the shoe based on the slug from the URL
  const shoe = products.find((p) => p.name.replace(/\s+/g, "-").toLowerCase() === slug);

  if (!shoe) return <div className="p-20 text-center">Shoe not found!</div>;

  return (
    <section className="max-container p-20 flex flex-col items-center gap-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <img src={shoe.imgURL} alt={shoe.name} className="w-[500px] rounded-3xl object-cover" />
        
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold font-palanquin">{shoe.name}</h1>
          <p className="text-2xl text-coral-red font-montserrat font-semibold">{shoe.price}</p>
          <p className="text-slate-gray leading-7">High-performance footwear designed for ultimate comfort and style.</p>
          
          {/* Instruction: Contact button to take us to contact page */}
          <Link to="/#contact-us">
            <button className="bg-coral-red text-white px-7 py-4 rounded-full font-montserrat text-lg leading-none border border-coral-red hover:bg-white hover:text-coral-red transition-all">
              Contact to Buy
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
