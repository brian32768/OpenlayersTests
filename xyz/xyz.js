// xyz.js

import './node_modules/ol/ol.css';
import { Map, View } from "./node_modules/ol";
import TileLayer from "./node_modules/ol/layer/Tile";
import XYZ from "./node_modules/ol/source/XYZ";
//import OSM from "./node_modules/ol/source/OSM";

var esri = "https://services.arcgisonline.com/ArcGIS/rest/services/";
var service = 'World_Street_Map';
var map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
                attributions: 'Tiles © <a href="' + esri + service + '/MapServer">ArcGIS</a>',
                url: esri + service + '/MapServer/tile/{z}/{y}/{x}'
            })
        })
    ],
    view: new View({
        center: [-13775000, 5768000],
        zoom: 11
    })
});

console.log('xyz.js loaded');

