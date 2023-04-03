import React, { useEffect, useState } from "react";
import ProductFeature from "../ui/ProductFeature";
import { useParams } from "react-router-dom";

function AboutProduct({products}) {
    const [product , setProduct] = useState(false)
    const [features , setFeatures] = useState([])

    const url = useParams().nameInUrl
    useEffect(() => {
        if(products != null){
            const item = products.find((item) => item.nameInUrl = url)
            setProduct(item)
        }
    }, [products])


    useEffect(() =>{
        if(product){
            const arr = []
            for (let i = 1 ; eval("product.feature" + i.toString()) != undefined ; i++){
                arr.push(eval("product.feature" + i.toString()))
                setFeatures(arr)
            }
        }
    },[product])

  return (
    <main>
      <div className="aboutProduct-container">
        <div className="product--about">
          <div className="about-container">
            <figure className="product--small-img">
                <img src={product.ImgUrl} />
            </figure>
            <h2 className="product--about__header">{product.title}</h2>
            <p className="product--about__description">
              {product.description}
            </p>
            <div className="product--secondary-info">
            <h3 className="product--secondary__price">{product && (product.salePrice != null ? <span>$ {product.salePrice.toFixed(2)}</span> : (<span>$ {product.originalPrice}</span>))} </h3>
            <button className="product__button secondary__button">add to cart</button>
            </div>
          </div>
          <div className="product--label">
          <figure className="product--label__img">
            <img src={product.ImgUrl} />
          </figure>
          <div className="product--label__info">
            <h3 className="product--label__price">{product && (product.salePrice != null ? <span>$ {product.salePrice.toFixed(2)}</span> : (<span>$ {product.originalPrice}</span>))} </h3>
            <button className="product__button">add to cart</button>
          </div>
        </div>
        </div>
        <div className="product--table">
            {features.map((feature , _) => <ProductFeature feature={feature} key={_} />)}
        </div>
      </div>
    </main>
  );
}

export default AboutProduct;
