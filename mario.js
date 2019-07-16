
//printPyramid(8);
//drawPyramid(8);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
 /*
function drawPyramid(height) {
	//  console.log("Uh oh... the pyramid is under construction.");
	//    console.log("Check back soon, our developers are hard at work as we speak!");
 	let pyramid = document.getElementById('pyramid');
	for (let i = 0; i < height; i++) {
		let line = document.createElement('div');
		line.classList.add('line');
		for (let j = 0; j <= height + 1; j++) {
             let block = document.createElement('div');
             block.classList.add('block');
             block.classList.add(j >= height - i ? 'filled' : 'space');
             line.appendChild(block);	
		};
		pyramid.appendChild(line);
	}
	let dl = document.getElementById('construction');
	pyramid.removeChild(dl);
}
  */



function printPyramid(height, filler) {
//  console.log("Uh oh... the pyramid is under construction.");
//    console.log("Check back soon, our developers are hard at work as we speak!");
let str = '';
for (let i = 0; i < height - 1; i++) {
str = str.concat("\u00A0");
};
str = str.concat(filler+filler);
var pyramid = document.getElementById('pyramid');
pyramid.innerHTML='';
for (let i = 0; i < height; i++) {
       let line = document.createElement('p');
       line.innerHTML += str;
       pyramid.appendChild(line);
   //    console.log(str);
       str = str.substring(0,height - 2 - i) + filler + str.substring(height - i - 1);
}
/*let dl = document.getElementById('construction');
pyramid.removeChild(dl);  */

    // TODO
    // print that pyramid!
   
}

