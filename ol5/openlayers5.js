// Inspired by the book "OpenLayers 3.x Cookbook Second Edition"

// This has to be run via parcel
// which uses node to translate these imports to something usable in a browser

console.log('openlayers5.js loading imports');

import './node_modules/ol/ol.css';
import { Map, View } from "./node_modules/ol";
import TileLayer from "./node_modules/ol/layer/Tile";
import OSM  from "./node_modules/ol/source/OSM";

console.log('openlayers5.js starts');

var map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [-13750000, 5800000],
        zoom: 9
    })
});

console.log('openlayers5.js initialized');
