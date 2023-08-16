import NextImage from "next/image";
import React from "react";
import Style from "../../styles/Product.css";

export function Product(props) {
    return(
        <>
      <div class="product-card">
    <NextImage className="product-image" src={props.imagem} width={350} height={180} alt="Imagem do Produto" />
        <div className="corpo">
            <h2>{props.nomeDoProduto}</h2>
            <p>{props.preco}</p>
        </div>
  </div>
        
        </>
    )
}