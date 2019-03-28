$(document).ready(function(evt){
   $ ("#categories h2").click(function(){
       $(this).toggleClass("minus");
       if($(this).attr("class")!="minus"){
           $(this).next().hide();
       }
       else{
           $(this).next().show();
       }
        $("#image").attr("src", ""); 
       evt.preventDefault();
   });
    
   $("#categories").find("a:first").focus();
});


$(document).ready(function() { 
    // preload images
    $("#categories a").each(function() { 
        var swappedImage = new Image();
     swappedImage.src = $(this).attr("href"); 
    });
 
    // set up event handlers for links 
    $("#categories a").click(function(evt) { 
        // swap image 
       var imageURL = $(this).attr("href");
       $("#image").attr("src", imageURL); 
      
       // cancel the default action of the link 
       evt.preventDefault(); // jQuery cross-browser method 
       }); // end click 
       //// move focus to first thumbnail 
       $("li:first-child a").focus(); 
   }); // end ready