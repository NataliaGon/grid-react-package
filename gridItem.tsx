import * as React from "react";
import classNames from 'classnames/bind';
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../core";

import MediaQuery from 'react-responsive';
const cx = classNames.bind(styles);




interface GridItemProperties extends ComponentBaseProperties {
    columns?: any;
    columnsMob?: any
    smallR?: boolean;
    smallL?: boolean;
    smallRMob?: boolean;
    smallLMob?: boolean;
    large?: boolean;
    largeMob?: boolean;
    offset?: any;
    gutterWidthDesktop?: any;
    gutterWidthMob?: any;
    mobileBreakpoint?: any
}

export class GridItem extends ComponentBase<GridItemProperties> {
 
    public render() {
        const defaultGutterWidth = '20px'
        const gridItemStyleDesktop = {
            gridColumn: `${this.props.offset}/${parseInt(this.props.offset) + parseInt(this.props.columns)}`,
            backgroundColor: '#ff0045',
            height: '300px',
            marginRight: this.props.smallR || this.props.large ? -parseInt(this.props.gutterWidthDesktop ? this.props.gutterWidthDesktop : defaultGutterWidth) : '',
            marginLeft: this.props.smallL || this.props.large ? -parseInt(this.props.gutterWidthDesktop ? this.props.gutterWidthDesktop : defaultGutterWidth) : ''
        }
        const gridItemStyleMobile = {
            gridColumn: `${this.props.offset}/${parseInt(this.props.offset) + parseInt(this.props.columnsMob)}`,
            backgroundColor: '#ff0045',
            height: '300px',
            marginRight: this.props.smallRMob || this.props.largeMob ? -parseInt(this.props.gutterWidthMob ? this.props.gutterWidthMob : defaultGutterWidth) : '',
            marginLeft: this.props.smallLMob || this.props.largeMob ? -parseInt(this.props.gutterWidthMob ? this.props.gutterWidthMob : defaultGutterWidth) : ''
        }
        return (
            <React.Fragment>
                <MediaQuery minDeviceWidth={parseInt(this.props.mobileBreakpoint) + 1}>
                    <div style={gridItemStyleDesktop}>

                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={parseInt(this.props.mobileBreakpoint)}>
                    <div style={gridItemStyleMobile}>

                    </div>
                </MediaQuery>
            </React.Fragment>
        );
    }
}
