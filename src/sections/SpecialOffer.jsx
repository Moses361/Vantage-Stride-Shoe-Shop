import { Link } from "react-router-dom"; // Import Link
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt='Shoe Promotion' width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span> Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          {/* Shop Now goes to Products page */}
          <Link to="/products">
            <Button label='Shop now' iconURL={arrowRight} />
          </Link>
          
          {/* Learn More goes to About page */}
          <Link to="/about">
            <Button
              label='Learn more'
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-slate-gray'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
