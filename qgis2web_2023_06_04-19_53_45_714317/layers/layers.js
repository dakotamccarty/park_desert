var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Parkdesertscore_1 = new ol.format.GeoJSON();
var features_Parkdesertscore_1 = format_Parkdesertscore_1.readFeatures(json_Parkdesertscore_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkdesertscore_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkdesertscore_1.addFeatures(features_Parkdesertscore_1);
var lyr_Parkdesertscore_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parkdesertscore_1, 
                style: style_Parkdesertscore_1,
                interactive: true,
    title: 'Park desert score<br />\
    <img src="styles/legend/Parkdesertscore_1_0.png" /> -0.98 - 0.08<br />\
    <img src="styles/legend/Parkdesertscore_1_1.png" /> 0.08 - 0.33<br />\
    <img src="styles/legend/Parkdesertscore_1_2.png" /> 0.33 - 0.59<br />\
    <img src="styles/legend/Parkdesertscore_1_3.png" /> 0.59 - 0.85<br />\
    <img src="styles/legend/Parkdesertscore_1_4.png" /> 0.85 - 1.1<br />\
    <img src="styles/legend/Parkdesertscore_1_5.png" /> 1.1 - 1.38<br />\
    <img src="styles/legend/Parkdesertscore_1_6.png" /> 1.38 - 1.72<br />\
    <img src="styles/legend/Parkdesertscore_1_7.png" /> 1.72 - 2.16<br />\
    <img src="styles/legend/Parkdesertscore_1_8.png" /> 2.16 - 2.84<br />\
    <img src="styles/legend/Parkdesertscore_1_9.png" /> 2.84 - 6.88<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Parkdesertscore_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Parkdesertscore_1];
lyr_Parkdesertscore_1.set('fieldAliases', {'fid': 'fid', 'hex_id': 'hex_id', 'iso_5_park_count': 'iso_5_park_count', 'iso_10_park_count': 'iso_10_park_count', 'iso_15_park_count': 'iso_15_park_count', 'iso_5_access_score': 'iso_5_access_score', 'iso_10_access_score': 'iso_10_access_score', 'iso_15_access_score': 'iso_15_access_score', '독거노인_normalized': '독거노인_normalized', '기초생활수_normalized': '기초생활수_normalized', 'Housing price (만원/ⅿ²)_normalized': 'Housing price (만원/ⅿ²)_normalized', 'Young People (Under 19)_normalized': 'Young People (Under 19)_normalized', 'Old people (older 65)_normalized': 'Old people (older 65)_normalized', 'access_score': 'access_score', 'deprivation_score': 'deprivation_score', 'park_desert_score': 'park_desert_score', });
lyr_Parkdesertscore_1.set('fieldImages', {'fid': 'TextEdit', 'hex_id': 'TextEdit', 'iso_5_park_count': 'TextEdit', 'iso_10_park_count': 'TextEdit', 'iso_15_park_count': 'TextEdit', 'iso_5_access_score': 'TextEdit', 'iso_10_access_score': 'TextEdit', 'iso_15_access_score': 'TextEdit', '독거노인_normalized': 'TextEdit', '기초생활수_normalized': 'TextEdit', 'Housing price (만원/ⅿ²)_normalized': 'TextEdit', 'Young People (Under 19)_normalized': 'TextEdit', 'Old people (older 65)_normalized': 'TextEdit', 'access_score': 'TextEdit', 'deprivation_score': 'TextEdit', 'park_desert_score': 'TextEdit', });
lyr_Parkdesertscore_1.set('fieldLabels', {'fid': 'no label', 'hex_id': 'no label', 'iso_5_park_count': 'no label', 'iso_10_park_count': 'no label', 'iso_15_park_count': 'no label', 'iso_5_access_score': 'no label', 'iso_10_access_score': 'no label', 'iso_15_access_score': 'no label', '독거노인_normalized': 'no label', '기초생활수_normalized': 'no label', 'Housing price (만원/ⅿ²)_normalized': 'no label', 'Young People (Under 19)_normalized': 'no label', 'Old people (older 65)_normalized': 'no label', 'access_score': 'no label', 'deprivation_score': 'no label', 'park_desert_score': 'no label', });
lyr_Parkdesertscore_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});