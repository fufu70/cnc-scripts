Too many kids photos and not enough frames, we've all been there. I've been luggin lumber around in my garage for weeks now, waiting to be used and this seemed like a perfect problem. How to create frames efficiently and economically using a single plank of lumber.

Photos themselves don't always follow a rule, some are 8.5x11, others follow A4 or A5. Ours are 209mmx255mm, 129mmx184mm, 94mmx129mm, and 68mmx94mm. They all look special and important on their own, but it'd be nice to cut a whole bunch of frames and then trim thick stock paper to size.

## A frame inside a frame

We have 4 of the large 209x255 frames. We'll be using a 1/4inch (radius of 0.125mm) drill bit to rough out everything and leverage it to open up the grooves as well.

We want the thickness of the frame to be about 30mm and the grooves to be about 10mm.

Starting from the innermost 

```gcode
G0 X0 Y0 Z0.5

(innermost groove 209x255 - 0.125)
(Go to starting point)
G0 X-104.475 Y127.475 Z0.5

G0 Z-0.5
G0 X104.475 Y127.475 Z-0.5
G0 X104.475 Y-127.475 Z-0.5
G0 X-104.475 Y-127.475 Z-0.5
G0 X-104.475 Y127.475 Z-0.5

(Repeat this pattern)
G0 Z-1.5
G0 X104.475 Y127.475 Z-1.5
G0 X104.475 Y-127.475 Z-1.5
G0 X-104.475 Y-127.475 Z-1.5
G0 X-104.475 Y127.475 Z-1.5

(...)

G0 Z0.5
(Grooves)
G0 X-104.75 Y127.75 Z0.5

G0 Z-0.5
G0 X104.75 Y127.75 Z-0.5
G0 X104.75 Y-127.75 Z-0.5
G0 X-104.75 Y-127.75 Z-0.5
G0 X-104.75 Y127.75 Z-0.5

G0 X-105 Y128 Z-0.5
G0 X105 Y128 Z-0.5
G0 X105 Y-128 Z-0.5
G0 X-105 Y-128 Z-0.5
G0 X-105 Y128 Z-0.5

(...)

G0 X-109 Y132 Z-0.5
G0 X109 Y132 Z-0.5
G0 X109 Y-132 Z-0.5
G0 X-109 Y-132 Z-0.5
G0 X-109 Y132 Z-0.5

(-------------------------------------)
(2nd most groove 209x255 + 30 - 0.125)
(Go to starting point)
G0 Z0.5
G0 X-134.475 Y157.475 Z0.5

G0 Z-0.5
G0 X134.475 Y157.475 Z-0.5
G0 X134.475 Y-157.475 Z-0.5
G0 X-134.475 Y-157.475 Z-0.5
G0 X-134.475 Y157.475 Z-0.5

(Repeat this pattern)
G0 Z-1.5
G0 X134.475 Y157.475 Z-1.5
G0 X134.475 Y-157.475 Z-1.5
G0 X-134.475 Y-157.475 Z-1.5
G0 X-134.475 Y157.475 Z-1.5

(...)


G0 Z0.5
(Grooves)
G0 X-134.75 Y157.75 Z0.5

G0 Z-0.5
G0 X134.75 Y157.75 Z-0.5
G0 X134.75 Y-157.75 Z-0.5
G0 X-134.75 Y-157.75 Z-0.5
G0 X-134.75 Y157.75 Z-0.5

G0 X-135 Y158 Z-0.5
G0 X135 Y158 Z-0.5
G0 X135 Y-158 Z-0.5
G0 X-135 Y-158 Z-0.5
G0 X-135 Y158 Z-0.5

(...)

G0 X-139 Y162 Z-0.5
G0 X139 Y162 Z-0.5
G0 X139 Y-162 Z-0.5
G0 X-139 Y-162 Z-0.5
G0 X-139 Y162 Z-0.5

(-------------------------------------)
(3rd groove 209x255 + 60 - 0.125)
(Go to starting point)
G0 Z0.5
G0 X-164.475 Y187.475 Z0.5

G0 Z-0.5
G0 X164.475 Y187.475 Z-0.5
G0 X164.475 Y-187.475 Z-0.5
G0 X-164.475 Y-187.475 Z-0.5
G0 X-164.475 Y187.475 Z-0.5

(Repeat this pattern)
G0 Z-1.5
G0 X164.475 Y187.475 Z-1.5
G0 X164.475 Y-187.475 Z-1.5
G0 X-164.475 Y-187.475 Z-1.5
G0 X-164.475 Y187.475 Z-1.5

(...)


G0 Z0.5
(Grooves)
G0 X-164.75 Y187.75 Z0.5

G0 Z-0.5
G0 X164.75 Y187.75 Z-0.5
G0 X164.75 Y-187.75 Z-0.5
G0 X-164.75 Y-187.75 Z-0.5
G0 X-164.75 Y187.75 Z-0.5

G0 X-165 Y188 Z-0.5
G0 X165 Y188 Z-0.5
G0 X165 Y-188 Z-0.5
G0 X-165 Y-188 Z-0.5
G0 X-165 Y188 Z-0.5

(...)

G0 X-169 Y192 Z-0.5
G0 X169 Y192 Z-0.5
G0 X169 Y-192 Z-0.5
G0 X-169 Y-192 Z-0.5
G0 X-169 Y192 Z-0.5

(-------------------------------------)
(4th groove 209x255 + 90 - 0.125)
(Go to starting point)
G0 Z0.5
G0 X-194.475 Y217.475 Z0.5

G0 Z-0.5
G0 X194.475 Y217.475 Z-0.5
G0 X194.475 Y-217.475 Z-0.5
G0 X-194.475 Y-217.475 Z-0.5
G0 X-194.475 Y217.475 Z-0.5

(Repeat this pattern)
G0 Z-1.5
G0 X194.475 Y217.475 Z-1.5
G0 X194.475 Y-217.475 Z-1.5
G0 X-194.475 Y-217.475 Z-1.5
G0 X-194.475 Y217.475 Z-1.5

(...)

G0 Z0.5
(Grooves)
G0 X-194.75 Y217.75 Z0.5

G0 Z-0.5
G0 X194.75 Y217.75 Z-0.5
G0 X194.75 Y-217.75 Z-0.5
G0 X-194.75 Y-217.75 Z-0.5
G0 X-194.75 Y217.75 Z-0.5

G0 X-195 Y218 Z-0.5
G0 X195 Y218 Z-0.5
G0 X195 Y-218 Z-0.5
G0 X-195 Y-218 Z-0.5
G0 X-195 Y218 Z-0.5

(...)

G0 X-199 Y222 Z-0.5
G0 X199 Y222 Z-0.5
G0 X199 Y-222 Z-0.5
G0 X-199 Y-222 Z-0.5
G0 X-199 Y222 Z-0.5

(-------------------------------------)
(5th most groove 209x255 + 120 - 0.125)
(Last cut to remove all excess from final frame)
G0 Z0.5
G0 X-224.475 Y247.475 Z0.5

G0 Z-0.5
G0 X224.475 Y247.475 Z-0.5
G0 X224.475 Y-247.475 Z-0.5
G0 X-224.475 Y-247.475 Z-0.5
G0 X-224.475 Y247.475 Z-0.5

(Repeat this pattern)
G0 Z-1.5
G0 X224.475 Y247.475 Z-1.5
G0 X224.475 Y-247.475 Z-1.5
G0 X-224.475 Y-247.475 Z-1.5
G0 X-224.475 Y247.475 Z-1.5

(...)

(Finish in center)
G0 Z0.5
G0 X0 Y0 Z0.5
```


![Thumb Reader CNC](assets/209x255.png)
