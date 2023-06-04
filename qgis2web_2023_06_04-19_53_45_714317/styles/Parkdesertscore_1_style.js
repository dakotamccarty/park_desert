var size = 0;
var placement = 'point';

var style_Parkdesertscore_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("park_desert_score");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -0.980475 && value <= 0.079694) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.079694 && value <= 0.328907) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,91,58,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.328907 && value <= 0.591296) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,158,89,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.591296 && value <= 0.850366) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,201,128,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.850366 && value <= 1.095552) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,237,170,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.095552 && value <= 1.375274) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,248,185,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.375274 && value <= 1.717445) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(199,233,173,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.717445 && value <= 2.162891) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,211,167,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.162891 && value <= 2.837834) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(100,171,176,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.837834 && value <= 6.881480) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,0.9620000000000001)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
