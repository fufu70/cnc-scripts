Every reader has their own preference for holding a book. Some like to read with both pages fully open, at about 170 degrees from left to right page. Others like to read their book at a 90 degree angle from left to right page, tilting the book from one side to the next. Below are gcode templates to try and map what those patterns would look like

## 170 degree Book Holder

Below is the basic pattern to drill a book holder for the thumb.

```gcode
G0 X0 Y0 Z0.5 

G0 X0 Y-10.0 Z0.5
G0 Z-0.5
(bore the thumbhole)
G2 X0 Y-10 Z-0.5 I0 J10.0


(Return to the center)
G0 Z0.5
G0 X0 Y0 Z0.5 

(Go and cut the outside shape)
G0 X-15.0 Y5.0 Z0.5 
G0 Z-0.5
G2 X15.0 Y5.0 Z-0.5 R17.5
G3 X17.5 Y3.0 Z-0.5 R3.5
G0 X47.5 Y3.0 Z-0.5
G2 X47.5 Y-3.0 Z-0.5 R3.0
G0 X17.5 Y-3.0 Z-0.5
G3 X15.0 Y-5.0 Z-0.5 R3.5
G2 X-15.0 Y-5.0 Z-0.5 R17.5
G3 X-17.5 Y-3.0 Z-0.5 R3.5
G0 X-47.5 Y-3.0 Z-0.5
G2 X-47.5 Y3.0 Z-0.5 R3.0
G0 X-17.5 Y3.0 Z-0.5
G3 X-15.0 Y5.0 Z-0.5 R3.5
```

![Thumb Reader CNC](assets/gcode-reader.png)

