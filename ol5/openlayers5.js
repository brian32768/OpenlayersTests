// Inspired by the book "OpenLayers 3.x Cookbook Second Edition"

// This has to be run via parcel
// which uses node to translate these imports to something usable in a browser

import Map from "ol/Map.js";
import View from "ol/View.js";
import Tile from "ol/layer/Tile.js";
import OSM from "ol/source.js";

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

