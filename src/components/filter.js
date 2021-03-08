import React, { useState} from 'react';
import { 
    Wrapper, 
    Label, 
    Select, 
    MenuLabel, 
    Icon, 
    Container
} from '../styles/filter';

import FallDown from '../styles/animation/fall-down'

export default function Filter(props) {
    const [click, setClick] = useState(false);
    
    const sortProducts = props.sort;
    const sortByPrice = props.sortByPrice;
    const sortByPopularity = props.sortByPopularity;
    const sortByAlphabeticOrder = props.sortByAlphabeticOrder;
    
    const handleClick = () => setClick(!click);

    return (
        <Wrapper>
            {
                click ? 
                <>
                    <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                            <Icon clicked={click}>&nbsp;</Icon>
                    </MenuLabel>           
                    <FallDown duration=".8s" delay="0s">
                            <Container clicked={click}>
                                <Label> Filtrar por: </Label>
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
                            </Container> 
                    </FallDown> 
                </> :
                <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                        <Icon clicked={click}>&nbsp;</Icon>
                </MenuLabel> 
            }
        </Wrapper>
    )
}