 /*
  *import Map from 'ol/Map.js';
        import View from 'ol/View.js';
        import TileLayer from 'ol/layer/Tile.js';
        import XYZ from 'ol/source/XYZ.js';
        */

        var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile.TileLayer({
                    source: new ol.source.XYZ({
                    url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
                        '?apikey=Your API key from http://www.thunderforest.com/docs/apikeys/ here'
                    })
                })
            ],
            view: new ol.View({
                center: [-472202, 7530279],
                zoom: 12
            })
        });