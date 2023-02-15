/*
IC-07 
Ellie Adams
2/15/23
*/

console.log("linked")

const FRAME_HEIGHT = 1000;
const FRAME_WIDTH = 500;
const MARGINS = {left:50, right:50, top:50, bottom:50};


const data = [55000, 48000, 27000, 66000, 90000];


// add frame 
const FRAME =
d3.select("#graph")
	.append('svg')
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame");



// add points based on data 
FRAME.selectAll("points")
	.data(data)
	.enter()
	.append("circle")
		.attr("cx", MARGINS.top)
		.attr("cy", (d) => {return d/100;})
		.attr("r", 20)
		.attr("class", "point");


		





