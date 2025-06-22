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

let patterns = [`
(forward)
G0 Z-0.5
G3 X47.7 Y0 Z-0.5 R47.7
G2 X-47.7 Z-0.5 R47.7
G3 X-95.4 Y47.7 Z-0.5 R47.7
`,
`
(reverse)
G0 Z-1.0
G2 X-47.7 Y0 Z-1.0 R47.7
G3 X47.7 Y0 Z-1.0 R47.7
G2 X95.4 Y47.7 Z-1.0 R47.7
`];

console.log(deepenPattern(patterns, -0.5, -1.0, -5.0, -0.5))