import "./App.css";

import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

import Icon, { IconType } from "./components/Icon";
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
                <Navbar sticky="top" bg="light">
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
                <h1 className="title text-center">
                    {(() => {
                        const tab = tabs.find(
                            tab => tab.path === this.state.currentPath
                        );
                        return tab ? tab.name : null;
                    })()}
                </h1>
                <Page path="/home" currentPath={this.state.currentPath}>
                    <h1 className="text-center">ABC Toys</h1>
                    <h3 className="text-center">Making learning fun!</h3>

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
                    <p>
                        <Icon type={IconType.mail} />
                        <a href="mailto:info@abctoysivc.xyz">
                            Send us an email
                        </a>
                    </p>

                    <p>
                        <Icon type={IconType.facebook} />
                        <a href="https://www.facebook.com/abc_toys_ivc/">
                            Follow us on Facebook!
                        </a>
                    </p>

                    <p>
                        <Icon type={IconType.phone} />
                        (507)286-8440
                    </p>

                    <p>
                        <Icon type={IconType.navigation} />
                        122 17th Ave. NW Rochester, MN 55901
                    </p>

                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="John Doe" />
                            <Form.Text />

                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                placeholder="johndoe@example.com"
                                type="email"
                            />
                            <Form.Text />

                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla pharetra diam."
                                as="textarea"
                            />

                            <Button>Submit</Button>
                        </Form.Group>
                    </Form>
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
