import React from "react";
import Product from "./Product";

export default function Products(){
        const products = [
        {
            id: 1,
            title: 'PC Portable Gamer HP VICTUS',
            price: '7490 DH',
            thumbnail : '../pictures/HP16D0195NF.jpg'
        },
        {
            id: 2,
            title: 'PC Portable Gamer HP VICTUS',
            price: '2190 DH',
            thumbnail : '../pictures/HP14424U3EA.jpg'
        },
        {
            id: 3,
            title: 'Pc Portable Chromebook Acer',
            price: '3640 DH',
            thumbnail: '../pictures/HUA6901443442959.jpg'
        },
        {
            id: 4,
            title: 'PC Portable - HUAWEI',
            price: '1270 DH',
            thumbnail: '../pictures/NXATHEF002.jpg'
        },
    ];

return (<div className="row">
    {products.map((product) => (

        <Product key={product.id} title={product.title}
        price={product.price} thumbnail={product.thumbnail} />

        ))}
</div>);


}