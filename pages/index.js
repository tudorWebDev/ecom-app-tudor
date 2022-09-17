import React from 'react'
import {client} from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components';
import Services from '../components/Services';

const Home = ({products,bannerData}) => {
  return (
    <div className='page-container'>

    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
      <h2>Our products</h2>
      <p>Tech for everyone</p>
        </div>
        <div className='products-container'>
          {products?.map((product)=> <Product key={product._id} product={product} />)}
        </div>

        <Services/>

    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>

  )
}
export const getServerSideProps= async ()=>{
  const query='*[_type=="product"]'
  const products = await client.fetch(query)

  const bannerQuery='*[_type=="banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return{
    props:{products,bannerData}
  }
}

export default Home