"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");    
    var i, link, image;
    

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() 
    {
        link=this;
        image1.src=link.getAttribute("href");
        image1.src=links[0];
    };
    image1.onmouseout = function() 
    {
        link=this;
        image1.src=link.getAttribute("href");
        image1.src=links[2];
    };
    
    image2.onmouseover = function() 
    {
        link=this;
        image2.src=link.getAttribute("href");
        image2.src=links[1];
    };
    image2.onmouseout = function() 
    {
        link=this;
        image2.src=link.getAttribute("href");
        image2.src=links[3];
    };
};
