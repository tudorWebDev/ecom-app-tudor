import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Image from "next/image";

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
        <Image src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
      <div className="hero-banner-text">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText} </h3>
        <h1>{heroBanner.largeText1}</h1>
        
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
