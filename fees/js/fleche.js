/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 

var pathObj = {
    "fleche": {
        "strokepath": [
            {
                "path": "M0,0l510,572l46-44l20,112l-111.3-24l45.3-44",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 576,
            "height": 640
        }
    }
}; 


/* 
 Setup and Paint your lazyline! 
 */ 

$(document).ready(function(){
            $('#fleche').lazylinepainter( 
                {
                    "svgData": pathObj,
                    "strokeWidth": 5,
                    "strokeColor": "#ff0700",
                    "onStrokeComplete": function(){$('#fleche svg path').attr({"fill": '#ff0700', 'fill-opacity': '1'});},
                }).lazylinepainter('paint');
    });
