import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-6 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <nav className="flex justify-between items-center max-container relative">
        {/* Branding */}
        <Link to="/" className="text-3xl font-bold font-palanquin tracking-tighter">
          STRIDE<span className="text-coral-red">.</span>
        </Link>

        {/* Desktop Menu - Remains the same */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li><Link to="/" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">Home</Link></li>
          <li><Link to="/about" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">About Us</Link></li>
          <li><Link to="/products" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">Products</Link></li>
          <li><Link to="/contact" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">Contact Us</Link></li>
        </ul>

        {/* Updated Desktop Button: Points to Products */}
        <div className="flex gap-4 text-lg font-montserrat font-medium max-lg:hidden wide:mr-24">
          <Link to="/products" className="bg-coral-red text-white px-8 py-2 rounded-full hover:bg-black transition-all">
            Shop Now
          </Link>
        </div>

        {/* Hamburger */}
        <button className="hidden max-lg:block p-2" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburger} alt="menu" width={25} height={25} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[70px] right-0 w-full bg-white shadow-2xl rounded-2xl border border-slate-100 lg:hidden overflow-hidden">
            <ul className="flex flex-col items-center gap-6 py-10 font-montserrat text-xl">
              <li onClick={() => setIsOpen(false)}><Link to="/">Home</Link></li>
              <li onClick={() => setIsOpen(false)}><Link to="/about">About Us</Link></li>
              <li onClick={() => setIsOpen(false)}><Link to="/products">Products</Link></li>
              <li onClick={() => setIsOpen(false)}>
                {/* Updated Mobile Button: Points to Products */}
                <Link to="/products" className="bg-coral-red text-white px-10 py-3 rounded-full">
                  Shop Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
