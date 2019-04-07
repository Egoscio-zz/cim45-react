import React from "react";

import { IProduct } from "../data";
import Icon, { IconType } from "../components/Icon";

interface IProps {
    currentProduct: string;
    data: IProduct;
    onProductClick: (product: string) => void;
}

class Product extends React.Component<IProps, any> {
    render() {
        return (
            <>
                <div onClick={this.onClick} key={this.props.data.name}>
                    <Icon type={IconType.info} />
                    <span>{this.props.data.name}</span>
                    {this.props.currentProduct == this.props.data.name ? (
                        <>
                            <img src={this.props.data.image} />
                            <p>{this.props.data.description}</p>
                        </>
                    ) : null}
                </div>
            </>
        );
    }

    onClick = () => {
        if (this.props.currentProduct == this.props.data.name) {
            this.props.onProductClick("");
        } else {
            this.props.onProductClick(this.props.data.name);
        }
    };
}

export default Product;
