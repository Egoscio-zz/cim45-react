import "./App.css";

import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import Icon from "./components/Icon";
import Page from "./components/Page";
import Product from "./components/Product";

import { tabs, products } from "./data";

interface IState {
    currentPath: string;
    currentProduct: string;
}

class App extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPath: tabs[0].path,
            currentProduct: ""
        };
    }

    render() {
        return (
            <>
                <Navbar sticky="top">
                    <Nav
                        style={{ width: "100%" }}
                        justify={true}
                        activeKey={this.state.currentPath}
                        variant="pills"
                        onSelect={this.onNavSelect}
                    >
                        {tabs.map(tab => (
                            <Nav.Item key={tab.path}>
                                <Nav.Link eventKey={tab.path}>
                                    <Icon type={tab.icon} />
                                    <span>{tab.name}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar>
                <Page path="/home" currentPath={this.state.currentPath}>
                    <h1>ABC Toys</h1>
                    <h3>Making learning fun!</h3>

                    <p>
                        ABC Toys is a company that opened its doors in 2001. Our
                        mission is to make learning a fun task by creating toys
                        safe for kindergarten kids that will challenge their
                        minds and motor skills. Parents love our toys, too!
                    </p>
                </Page>
                <Page path="/products" currentPath={this.state.currentPath}>
                    {products.map(product => {
                        return (
                            <Product
                                key={product.name}
                                onProductClick={this.onProductClick}
                                currentProduct={this.state.currentProduct}
                                data={product}
                            />
                        );
                    })}
                </Page>
                <Page path="/contact" currentPath={this.state.currentPath}>
                    Email address Telephone Address Facebook Page FORM: Name
                    Email Comment Submit Button
                </Page>
                <Page path="/location" currentPath={this.state.currentPath}>
                    Once we open our store, we'll provide you with its location,
                    and directions from your current location!
                </Page>
            </>
        );
    }

    onNavSelect = (eventKey: string) => {
        this.setState({
            currentPath: eventKey
        });
    };

    onProductClick = (product: string) => {
        this.setState({
            currentProduct: product
        });
    };
}

export default App;
