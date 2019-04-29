import React, { createRef } from "react";

import { IPosition } from "../App";

import { Map, LatLng, TileLayer, Icon, IconOptions, Marker } from "leaflet";

interface IProps {
    position: IPosition;
    requestPosition(): void;
}

class MapView extends React.Component<IProps, any> {
    private reference = createRef<HTMLDivElement>();
    private map?: Map;

    private configureMap(map: Map, position: Position) {
        const latlng = new LatLng(
            position.coords.latitude,
            position.coords.longitude
        );

        map.setView(latlng, 13);

        const tileLayer = new TileLayer(
            "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
            {
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: "mapbox.streets",
                accessToken:
                    "pk.eyJ1IjoianVzdGluaGVybyIsImEiOiJjanYxcmYwbDAxeDZ3NGRwZjB2ajJuaHByIn0.717oaRyaVOvTFq5uynHHIg"
            }
        );

        tileLayer.addTo(map);

        const icon = new Icon<IconOptions>({
            iconUrl:
                "https://unpkg.com/leaflet@1.1.0/dist/images/marker-icon-2x.png",
            iconSize: [25, 40]
        });

        const marker = new Marker(latlng, { icon });

        marker.addTo(map);
    }

    componentDidMount() {
        this.map = new Map(this.reference.current!);
        const position = this.props.position.value;
        if (!position) this.props.requestPosition();
        else {
            this.configureMap(this.map!, position);
        }
    }

    componentWillUpdate(nextProps: IProps) {
        const position = nextProps.position.value;
        if (position) {
            this.configureMap(this.map!, position!);
        }
    }

    render() {
        return <div style={{ height: "500px" }} ref={this.reference} />;
    }
}

export default MapView;
