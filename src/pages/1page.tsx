import React from 'react';
import{Product} from '../components/product'
import {products}  from '../data/products'
import '../App.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

export function Page() {
 return(
   <><div className="container2 mx-auto max-w-auto pt-12">
       <ImageSlider slides={SliderData} />;
    </div><div className="container mx-auto max-w-2xl pt-10">

          <br></br>
          <br></br>
          <Product product={products[0]} />
          <Product product={products[1]} />
          <br></br>
          <br></br>
       </div></>
 )
}
