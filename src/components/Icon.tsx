import React, { Component } from "react";

import infoIcon from "../icons/info.svg";

const iconsMap: { [key: string]: string } = {
    info: infoIcon
};

export enum IconType {
    info = "info"
}

interface IProps {
    icon: IconType;
}

class Icon extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <img src={iconsMap[IconType[this.props.icon]]} />;
    }
}

export default Icon;
