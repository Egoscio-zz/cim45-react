import React, { CSSProperties } from "react";

import facebook from "../icons/facebook.svg";
import home from "../icons/home.svg";
import info from "../icons/info.svg";
import mail from "../icons/mail.svg";
import navigation from "../icons/navigation.svg";
import phone from "../icons/phone.svg";
import shoppingCart from "../icons/shopping-cart.svg";

const iconsMap: { [key: string]: string } = {
    facebook,
    home,
    info,
    mail,
    navigation,
    phone,
    shoppingCart
};

export enum IconType {
    facebook = "facebook",
    home = "home",
    info = "info",
    mail = "mail",
    navigation = "navigation",
    phone = "phone",
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
