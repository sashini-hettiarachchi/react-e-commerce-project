import React, { Component } from "react";
import Product from "./product";
import Title from "./tittle";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return (
                      <Product
                        key={product.id}
                        product={product}
                        id={product.id}
                        title={product.title}
                        img={product.img}
                        price={product.price}
                        inCart={product.inCart}
                      />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
