/**
 * Parameters are:
 * 	
 * 	bitRadius width height depth stepSize x y z
 * 
 * Call this function using:
 * 
 *  node flatten.js 1 4 4 -0.5 -1 0 0 0.5
 * 
 * Would generate something like:
 * 
 * G0 X0 Y0 Z0.5
 * G0 X0.5 Y0.5 Z0.5
 * G0 X0.5 Y0.5 Z-0.5
 * G0 X3.5 Y0.5 Z-0.5
 * G0 X3.5 Y1.5 Z-0.5
 * G0 X0.5 Y1.5 Z-0.5
 * G0 X0.5 Y2.5 Z-0.5 
 * G0 X3.5 Y2.5 Z-0.5
 * G0 X3.5 Y3.5 Z-0.5 
 * G0 X0.5 Y3.5 Z-0.5
 * 
 * (go home)
 * G0 Z0.5
 * G0 X0 Y0 Z0.5
 * 
 */

function generateFlatten(bitRadius, width, height, depth, stepSize, x, y, z) {
	let input = {
		bitRadius, width, height, depth, stepSize, x, y, z
	};
	input.bitRadius *= 0.8;
	let script = startScript(input);

	let action = runNextStep({
		tip: getStart(input),
		nextStep: "enter",
		input: input
	});
	script += action.script;

	while (action.nextStep != 'goHome') {
		action = runNextStep(action);
		if (!isAreaEnd(action.tip, input) && !isEnd(action.tip, input)) {
			script += action.script;	
		}
	}

	return script + goHomeScript(input);
}

function runNextStep(action) {
	switch(action.nextStep) {
		case "moveSide":
			return moveSide(action.tip, action.input);
		case "moveUp":
			return moveUp(action.tip, action.input);
		case "moveDown":
			return moveDown(action.tip, action.input);
		case "goHome":
			return goHome(action.tip, action.input);

		case "enter":
		default:
			return enter(action.tip, action.input);
	}
}

function getAction({tip, nextStep, script}, input) {
	return {
		tip,
		nextStep,
		script,
		input
	}
}

function getStart(input) {
	return {
		x: input.x + (input.bitRadius / 2),
		y: input.y + (input.bitRadius / 2),
		z: input.z + input.stepSize,
	}
}

function enter(tip, input) {
	return getAction({
		tip,
		nextStep: determineNextStep(tip, input, "moveSide"),
		script: enterScript(tip, input)
	}, input)
}

function enterScript(tip, input) {
	let tipX = tip.x;
	let tipY = tip.y;
	let tipZ = tip.z;

	return `
(enter)
G0 Z${input.z}
G0 X${tipX} Y${tipY} Z${input.z}
G0 X${tipX} Y${tipY} Z${tipZ}`;
}

function moveUp(tip, input) {
	let tipX = tip.x;
	let tipY = tip.y;
	let tipZ = tip.z;

	let nextTip = {
		x: tipX + input.bitRadius, 
		y: tipY,
		z: tipZ
	};
	return getAction({
		tip: nextTip,
		nextStep: determineNextStep(nextTip, input, "moveSide"),
		script: moveUpScript(tip, input)
	}, input)
}

function moveUpScript(tip, input) {
	let tipX = tip.x;
	let tipY = tip.y;
	let tipZ = tip.z;

	return `
(moveUp)
G0 X${tipX + input.bitRadius} Y${tipY} Z${tipZ}`;
}


function moveSide(tip, input) {
	let tipX = tip.x;
	let tipY = tip.y;
	let tipZ = tip.z;

	let step = input.height - input.bitRadius; 
	if (tipY > input.height - input.bitRadius + input.y) {
		step *= -1;
	}
	let nextTip = {
		x: tipX, 
		y: tipY + step, 
		z: tipZ
	};

	return getAction({
		tip: nextTip,
		nextStep: determineNextStep(nextTip, input, "moveUp"),
		script: moveSideScript(tip, input)
	}, input)
}

function moveSideScript(tip, input) {
	let tipX = tip.x;
	let tipY = tip.y;
	let tipZ = tip.z;

	let step = input.height - input.bitRadius; 
	if (tipY > input.height - input.bitRadius + input.y) {
		step *= -1;
	}
	return `
(moveSide)
G0 X${tipX} Y${tipY + step} Z${tipZ}`;
}

function moveDown(tip, input) {
	let nextTip = getStart(input);
	nextTip.z += tip.z + input.stepSize;

	return getAction({
		tip: nextTip,
		nextStep: determineNextStep(nextTip, input, "moveSide"),
		script: moveDownScript(tip, input)
	}, input);
}

function moveDownScript(tip, input) {
	let nextTip = getStart(input);
	nextTip.z += tip.z + input.stepSize;

	return `
(moveDown)
G0 Z${input.z}
G0 X${nextTip.x} Y${nextTip.y} Z${input.z}
G0 X${nextTip.x} Y${nextTip.y} Z${nextTip.z}`;
}

function determineNextStep(tip, input, defaultStep) {
	if (isEnd(tip, input)) {
		return "goHome";
	}
	if (isAreaEnd(tip, input)) {
		return "moveDown";
	}
	return defaultStep
}

function isEnd(tip, input) {
	let tipX = tip.x;
	let tipY = tip.y;
	let tipZ = tip.z;

	return (tipX >= ((input.bitRadius / 2) + input.width + input.x)
		&& tipY >= ((input.bitRadius / 2) + input.height + input.y))
		|| tipZ < (input.depth + input.z);
}

function isAreaEnd(tip, input) {
	let tipX = tip.x;
	let tipY = tip.y;
	let tipZ = tip.z;

	return tipX >= ((input.bitRadius / 2) + input.width + input.x)
		|| tipY >= ((input.bitRadius / 2) + input.height + input.y);
}

function startScript(input) {
	return `
G0 Z${input.z}
G0 X${input.x} Y${input.y} Z${input.z}
G1 Z${input.z} F800`;
}

function goHomeScript(input) {
	return `
(go home)
G0 Z${input.z}
G0 X${input.x} Y${input.y} Z${input.z}`;
}


// generateFlatten(bitRadius, width, height, depth, stepSize, x, y, z);
// console.log(generateFlatten(1, 4, 4, -3, -0.5, 0, 0, 0.5))
console.log(generateFlatten(6.35, 240.6, 568, -1, -1, 0, 0, 0.5))
