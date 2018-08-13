// Inspired by the book "OpenLayers 3.x Cookbook Second Edition"

require "node_modules/ol/Map.js";
require "node_modules/ol/View.js";
require "node_modules/ol/layer/Tile.js";
require "node_modules/ol/source.js";

var map = new ol.Map({
    view: new ol.View({
        center: [-13750000, 5800000],
        zoom: 9
    }),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    target: 'js-map'
});

