function deepenPattern(patterns, stepSize, replaceStepSize, depth, start) {
	if (patterns.length == 0)
		throw "Cannot do empty Patterns";


	let deepenedPattern = patterns.join('\n');
	let patternIndex = 0;
	let i = start;
	do {
		patterns[patternIndex] = patterns[patternIndex].replaceAll(`Z${i}`, `Z${i + replaceStepSize}`);
		deepenedPattern += patterns[patternIndex]
		patternIndex = (patternIndex + 1) % patterns.length
		i += stepSize
	} while (i > depth && i + replaceStepSize >= depth)
	return deepenedPattern;
}

// let patterns = [`
// (forward)
// G0 Z-0.5
// G3 X47.7 Y0 Z-0.5 R47.7
// G2 X-47.7 Z-0.5 R47.7
// G3 X-95.4 Y47.7 Z-0.5 R47.7
// `,
// `
// (reverse)
// G0 Z-1.0
// G2 X-47.7 Y0 Z-1.0 R47.7
// G3 X47.7 Y0 Z-1.0 R47.7
// G2 X95.4 Y47.7 Z-1.0 R47.7
// `];

let patterns = [

`
G0 X-18.0 Y9.0 Z0.5 
G0 Z-0.5
G2 X18.0 Y9.0 Z-0.5 R19
G3 X19 Y7.8 Z-0.5 R3.5
G0 X47.5 Y7.8 Z-0.5
G2 X47.5 Y-7.8 Z-0.5 R7.8
G0 X19 Y-7.8 Z-0.5
G3 X18.0 Y-9.0 Z-0.5 R3.5
G2 X-18.0 Y-9.0 Z-0.5 R19
G3 X-19 Y-7.8 Z-0.5 R3.5
G0 X-47.5 Y-7.8 Z-0.5
G2 X-47.5 Y7.8 Z-0.5 R7.8
G0 X-19 Y7.8 Z-0.5
G3 X-18.0 Y9.0 Z-0.5 R3.5`
];

console.log(deepenPattern(patterns, -0.5, -1.0, -11.5, -0.5))