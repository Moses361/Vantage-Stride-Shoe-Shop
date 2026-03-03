import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

import {
    bigShoe1,
    bigShoe2,
    bigShoe3,
    customer1,
    customer2,
    

    // ✅ ADD THESE AFTER YOU DOWNLOAD THE IMAGES
    shoe8,
    shoe9,
    shoe10,
    shoe11,
    shoe12,
    shoe13,
    shoe14,
    shoe15,
    shoe16,
    shoe17,
    shoe18,
    shoe19,
    shoe20,
    shoe21,
    shoe22,
    shoe23,

    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3
} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: "1k+", label: "Brands" },
    { value: "500+", label: "Shops" },
    { value: "250k+", label: "Customers" },
];

export const products = [
    { id: 1, imgURL: shoe20, name: "Nike Air Jordan-01", price: "$200.20" },
    { id: 2, imgURL: shoe21, name: "Nike Air Jordan-10", price: "$210.20" },
    { id: 3, imgURL: shoe22, name: "Nike Air Jordan-100", price: "$220.20" },
    { id: 4, imgURL: shoe23, name: "Nike Air Jordan-001", price: "$230.20" },

    { id: 5, imgURL: shoe12, name: "Nike Air Max Pro", price: "$240.20" },
{ id: 6, imgURL: shoe13, name: "Nike Street Runner", price: "$250.20" },
{ id: 7, imgURL: shoe14, name: "Nike Zoom X", price: "$260.20" },
{ id: 8, imgURL: shoe15, name: "Nike Flyknit Edge", price: "$270.20" },

  { id: 9, imgURL: shoe16, name: "Nike Air Max Pro", price: "$240.20" },
{ id: 10, imgURL: shoe17, name: "Nike Street Runner", price: "$250.20" },
{ id: 11, imgURL: shoe18, name: "Nike Zoom X", price: "$260.20" },
{ id: 12, imgURL: shoe19, name: "Nike Flyknit Edge", price: "$270.20" },

    // ✅ NEW 4 PRODUCTS (download images for these)
    { id: 13, imgURL: shoe8, name: "Nike Aero Boost", price: "$320.20" },
    { id: 14, imgURL: shoe9, name: "Nike Vapor Max X", price: "$330.20" },
    { id: 15, imgURL: shoe10, name: "Nike Hyper Run", price: "$340.20" },
    { id: 16, imgURL: shoe11, name: "Nike Motion Flex", price: "$350.20" },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options.",
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way.",
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Morich Brown",
        rating: 4.5,
        feedback:
            "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    },
    {
        imgURL: customer2,
        customerName: "Lota Mongeskar",
        rating: 4.5,
        feedback:
            "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];