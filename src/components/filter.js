import React from 'react';

export default function Filter(props) {
    const productsCount = props.productsCount;
    const sortProducts = props.sort;
    const sortByPrice = props.sortByPrice;
    const sortByPopularity = props.sortByPopularity;
    const sortByAlphabeticOrder = props.sortByAlphabeticOrder;

    return (
        <div>
            <div> {productsCount} Products </div>

            <div>
                <label> preço: </label>
                <select value={sortProducts} onChange={sortByPrice}>
                    <option> Default </option>
                    <option value="lowest"> Menor Preço </option>
                    <option value="highest"> Maior Preço </option>
                </select>
            </div>

            <div>
                <label> Popularidade: </label>
                <select value={sortProducts} onChange={sortByPopularity}>
                    <option> Default </option>
                    <option value="highest"> Maior Popularidade </option>
                    <option value="lowest"> Menor Popularidade </option>
                </select>
            </div>

            <div>
                <label> Ordem Alfabética: </label>
                <select value={sortProducts} onChange={sortByAlphabeticOrder}>
                    <option> Default </option>
                    <option value="alfabetica"> Ordem Alfabética </option>
                </select>
            </div>
        </div>
    )
}