// openlayers.js

function initMap() {
    var map = new OpenLayers.Map("map");
    var osm = new OpenLayers.Layer.OSM("Simple OSM BaseMap");
    map.addLayer(osm);
    map.addControl(new OpenLayers.Control.LayerSwitcher());
    map.setCenter(
        new OpenLayers.LonLat(-124, 46).transform(
            new OpenLayers.Projection("EPSG:4326"),new OpenLayers.Projection("EPSG:90013")
        ), 5
    );
}
