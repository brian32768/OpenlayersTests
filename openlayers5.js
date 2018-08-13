// Inspired by the book "OpenLayers 3.x Cookbook Second Edition"

// This has to be run via parcel
// which uses node to translate these imports to something usable in a browser

import Map from "node_modules/ol/Map.js";
import View from "node_modules/ol/View.js";
import Tile from "node_modules/ol/layer/Tile.js";
import OSM from "node_modules/ol/source.js";

var map = new Map({
    view: new View({
        center: [-13750000, 5800000],
        zoom: 9
    }),
    layers: [
        new Tile({
            source: new OSM()
        })
    ],
    target: 'js-map'
});

