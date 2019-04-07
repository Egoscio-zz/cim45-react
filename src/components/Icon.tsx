import React, { CSSProperties } from "react";

import home from "../icons/home.svg";
import info from "../icons/info.svg";
import mail from "../icons/mail.svg";
import navigation from "../icons/navigation.svg";
import shoppingCart from "../icons/shopping-cart.svg";

const iconsMap: { [key: string]: string } = {
    home,
    info,
    mail,
    navigation,
    shoppingCart
};

export enum IconType {
    home = "home",
    info = "info",
    mail = "mail",
    navigation = "navigation",
    shoppingCart = "shoppingCart"
}

interface IProps {
    style?: CSSProperties;
    type: IconType;
}

class Icon extends React.Component<IProps> {
    render() {
        return (
            <img
                style={{ ...this.props.style }}
                src={iconsMap[IconType[this.props.type]]}
            />
        );
    }
}

export default Icon;
