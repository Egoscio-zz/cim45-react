import "./App.css";

import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

import Icon, { IconType } from "./components/Icon";
import Page from "./components/Page";
import Product from "./components/Product";
import MapView from "./components/MapView";

import { tabs, products } from "./data";

export interface IPosition {
    error?: PositionError;
    value?: Position;
}

interface IState {
    currentPath: string;
    currentProduct: string;
    position: IPosition;
}

class App extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentPath: tabs[0].path,
            currentProduct: "",
            position: {}
        };
    }

    requestPosition = () => {
        navigator.geolocation.getCurrentPosition(
            (value: Position) =>
                this.setState({
                    position: { value, error: undefined }
                }),
            (error: PositionError) =>
                this.setState({
                    position: { error, value: undefined }
                })
        );
    };

    render() {
        const tab = tabs.find(tab => tab.path === this.state.currentPath);
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
                <div className="content">
                    {tab ? (
                        <h1 className="title text-center">{tab.name}</h1>
                    ) : null}
                    <Page path="/home" currentPath={this.state.currentPath}>
                        <h1 className="text-center">ABC Toys</h1>
                        <br />
                        <h3 className="text-center">Making learning fun!</h3>
                        <br />
                        <p>
                            ABC Toys is a company that opened its doors in 2001.
                            Our mission is to make learning a fun task by
                            creating toys safe for kindergarten kids that will
                            challenge their minds and motor skills. Parents love
                            our toys, too!
                        </p>
                    </Page>
                    <Page path="/products" currentPath={this.state.currentPath}>
                        {products.map(product => {
                            return (
                                <React.Fragment key={product.name}>
                                    <Product
                                        onProductClick={this.onProductClick}
                                        currentProduct={
                                            this.state.currentProduct
                                        }
                                        data={product}
                                    />
                                    <br />
                                </React.Fragment>
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
                            <a href="https://www.facebook.com/abctoys/">
                                Follow us on Facebook!
                            </a>
                        </p>

                        <p>
                            <Icon type={IconType.phone} />
                            (507) 286-8440
                        </p>

                        <p>
                            <Icon type={IconType.navigation} />
                            122 17th Ave. NW Rochester, MN 55901
                        </p>

                        <Form>
                            <Form.Group>
                                <Form.Label htmlFor="name-input">
                                    Name
                                </Form.Label>
                                <Form.Control
                                    id="name-input"
                                    placeholder="John Doe"
                                />

                                <br />

                                <Form.Label htmlFor="email-input">
                                    Email
                                </Form.Label>
                                <Form.Control
                                    id="email-input"
                                    placeholder="johndoe@example.com"
                                    type="email"
                                />

                                <br />

                                <Form.Label htmlFor="comment-input">
                                    Comment
                                </Form.Label>
                                <Form.Control
                                    id="comment-input"
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla pharetra diam."
                                    as="textarea"
                                />

                                <br />

                                <Button>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Page>
                    <Page path="/location" currentPath={this.state.currentPath}>
                        {this.state.position.value ? (
                            <>
                                <p>
                                    Your current location is indicated in the
                                    map below. We are working on implementing
                                    directions in our map system.
                                </p>
                                <p>
                                    Latitude:{" "}
                                    {this.state.position.value.coords.latitude}
                                </p>
                                <p>
                                    Longitude:{" "}
                                    {this.state.position.value.coords.longitude}
                                </p>
                            </>
                        ) : null}
                        {this.state.position.error ? (
                            <p>
                                Error ({this.state.position.error.code}):{" "}
                                {this.state.position.error.message}
                            </p>
                        ) : null}
                        <MapView
                            position={this.state.position}
                            requestPosition={this.requestPosition}
                        />
                    </Page>
                </div>
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
