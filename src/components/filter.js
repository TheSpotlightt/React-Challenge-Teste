import React from 'react';
import { Wrapper, Label, Select } from '../styles/filter';

export default function Filter(props) {
    const sortProducts = props.sort;
    const sortByPrice = props.sortByPrice;
    const sortByPopularity = props.sortByPopularity;
    const sortByAlphabeticOrder = props.sortByAlphabeticOrder;

    return (
        <Wrapper>
            <div>
                <Label> Preço: </Label>
                <Select value={sortProducts} onChange={sortByPrice}>
                    <option> Default </option>
                    <option value="lowest"> Menor Preço </option>
                    <option value="highest"> Maior Preço </option>
                </Select>
            </div>

            <div>
                <Label> Popularidade: </Label>
                <Select value={sortProducts} onChange={sortByPopularity}>
                    <option> Default </option>
                    <option value="highest"> Maior Popularidade </option>
                    <option value="lowest"> Menor Popularidade </option>
                </Select>
            </div>

            <div>
                <Label> Ordem Alfabética: </Label>
                <Select value={sortProducts} onChange={sortByAlphabeticOrder}>
                    <option> Default </option>
                    <option value="alfabetica"> Ordem Alfabética </option>
                </Select>
            </div>
        </Wrapper>
    )
}