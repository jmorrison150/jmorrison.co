var slideimages1 = new Array() // create new array to preload images
for (var i = 0; i < 20; i++) {
	slideimages1[i] = new Image() // create new instance of image object
slideimages1[i].src = "./01/"+i.toString()+".png" // set image src property to image path, preloading image in the process
};

var slideimages2 = new Array() // create new array to preload images
for (var i = 0; i < 20; i++) {
	slideimages2[i] = new Image() // create new instance of image object
slideimages2[i].src = "./02/"+i.toString()+".png" // set image src property to image path, preloading image in the process
};

var slideimages3 = new Array() // create new array to preload images
for (var i = 0; i < 20; i++) {
	slideimages3[i] = new Image() // create new instance of image object
slideimages3[i].src = "./03/"+i.toString()+".png" // set image src property to image path, preloading image in the process
};

d3.select('#slider3').call(d3.slider()
	.value(10)
	.orientation("vertical")
	.on("slide", 
		function(evt, value) {
  			d3.select('#slider3text')
  			.text(Math.floor(value/100.0*20.0));
  			slideit(Math.floor(value/100.0*20.0));
	})
);

function slideit(step){
 //if browser does not support the image object, exit.
 if (!document.images)
  {return;}
 document.getElementById('slide1').src = slideimages1[step].src;
 document.getElementById('slide2').src = slideimages2[step].src;
  document.getElementById('slide3').src = slideimages3[step].src;
}

