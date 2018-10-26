import React, { Component } from 'react';
import './App.css';

import TopMenu from '../topMenu/TopMenu';
import ProductsCards from '../productsCards/ProductsCards';
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';

// Products
import products from '../../config/products';
import testimonials from '../../config/testimonials';

const AppIllustration = () => (
  <div id='bottle-illustration'>
    <div id="bottle">
      <img id="illustration-image" alt="bottle" src={require("../../media/bottle.jpg")}></img>
    </div>
  </div>
)

const Intro = ({ title, subTitle }) => (
  <div>
    <div id="title-intro">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
    <div className="spacer"></div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <div id="oblique-background"></div>
        <AppIllustration />
        <TopMenu />
        <Intro title={'The Best Oil'} subTitle={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not'} />
        <ProductsCards products={products} />
        <Testimonials testimonials={testimonials} />
        <Footer />
      </div>
    );
  }
}

export default App;
