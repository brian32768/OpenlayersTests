// Inspired by the book "OpenLayers 3.x Cookbook Second Edition"

console.log("umma gumma");

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

