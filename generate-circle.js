/**
 * Parameters are:
 * 	
 * 	radius bitRadius depth x y z
 * 
 * Call this function using:
 * 
 *  node generate-circle.js 30 3 -1 0 0 0.5
 * 
 */


const STEP_DEPTH = 0.5;

function cutCylinder(radius, bitRadius, depth, x, y, z) {
	let program = `G0 X${x} Y${y} Z${z} \n`;

	for (let r = bitRadius * 2; r < (radius - bitRadius);  r += (bitRadius * 2)) {
		program += cutSpiral(r, depth, x, y, z)
	}
	program += cutSpiral((radius - bitRadius), depth, x, y, z)

	return program;
}

function cutSpiral(radius, depth, x, y, z) {
	let program = `G0 X${x} Y${y - radius} Z${z} \n`;
	for (let i = z; i > depth; i -= STEP_DEPTH) {
		program += cutG2(radius, x, y, i);
	}
	program += cutG2(radius, x, y, depth);
	program += cutG2(radius, x, y, depth);
	return `${program}G0 Z${z}\n`;
}

function cutG2(radius, x, y, z) {
	return `G2 X${x} Y${y - radius} Z${z} I0 J${radius}\n`;
}

console.log(cutCylinder(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]), Number(process.argv[5]), Number(process.argv[6]), Number(process.argv[7])));