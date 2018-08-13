// Sort of based on openlayers.org sample that just did not work

var url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer';

var layers = [
        new ol.layer.Tile.TileLayer({
            source: new ol.source.OSM()
    })
        /*
    new ol.layer.Tile.TileLayer({
        extent: [-13884991, 2870341, -7455066, 6338219],
        source: new ol.source.TileArcGISRest({
            url: url
        })
    })
*/
];

var map = new ol.Map({
    view: new ol.View({
        center: [-10997148, 4569099],
        zoom: 4
    }),
    layers: layers,
    target: 'map',
});
