import React, { Component } from 'react';
import './App.css';

import TopMenu from '../topMenu/TopMenu';
import ProductsCards from '../productsCards/ProductsCards';

// Products
import products from '../../config/products';

const AppIllustration = () => (
  <div id='bottle-illustration'>
    <div id="bottle">
      <img alt="bottle" src={require("./media/bottle.jpg")}></img>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <div id="oblique-background">
        </div>
        <AppIllustration />
        <TopMenu />
        <div id="title-intro">
          <h1>The Best Oil</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not</p>
        </div>
        <ProductsCards products={products} />
      </div>
    );
  }
}

export default App;
