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
(Square Rounded Corners)
G0 Z-0.5
G0 X25 Y25 Z-0.5
G0 X25 Y537.5 Z-0.5
G2 X37.5 Y550 Z-0.5 R12.5
G0 X208.5 Y550 Z-0.5
G2 X220 Y537.5 Z-0.5 R12.5
G0 X220 Y25 Z-0.5
G2 X208.5 Y12.5 Z-0.5 R12.5
G0 X37.5 Y12.5 Z-0.5
G2 X25 Y25 Z-0.5 R12.5
`
];

console.log(deepenPattern(patterns, -0.5, -1.0, -24, -0.5))