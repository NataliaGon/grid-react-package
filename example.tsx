import React, { ComponentElement } from 'react';



import { GridContainer } from './gridContainer';
import { GridItem } from './gridItem';

type PanelContentProperties = {
    id?: Object;
}


const GridExample: () => ComponentElement<PanelContentProperties, any> = () => {
    const grid = {
        gridColumn: 2 / 5
    }
    return (

        <div>
            <GridContainer columnsDesktop='12' gutterWidthDesktop='30px' paddingDesktop='30px' mobileBreakpoint={800} columnsMobile='6' paddingMobile="10px">
                <div style={{ gridColumn: '2/5' }}></div>
                <GridItem offset='1' columns='3' gutterWidthDesktop='30px' smallR mobileBreakpoint='800' gutterWidthMob="20px" columnsMob='4' smallRMob /> </GridContainer>
        </div>
    );
}


export default GridExample;

