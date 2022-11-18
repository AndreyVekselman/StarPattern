import { HollowSquare } from "./Module/HollowSquare.mjs";
import { RightTriangle } from "./Module/RightTriangle.mjs";
import { LeftTriangle } from "./Module/LeftTriangle.mjs";
import { DownwardLeftTriangle } from "/Module/DownwardLeftTriangle.mjs";
import { LeftHollowTriangle } from "./Module/LeftHollowTriangle.mjs";
import { Pyramid } from "./Module/Pyramid.mjs";
import { InvertedPyramid } from "./Module/InvertedPyramid.mjs";
import { HollowInvertedPyramid } from "./Module/HollowInvertedPyramid.mjs";
import { Rhombus } from "./Module/Rhombus.mjs";
import { PrintStars } from "./Module/PrintStars.mjs";

let n = 5;

PrintStars(HollowSquare, n); //////////// Hollow square
PrintStars(RightTriangle, n); //////////// Right Triangle
PrintStars(LeftTriangle, n); //////////// Left Triangle
PrintStars(DownwardLeftTriangle, n); //////////// Downward Left Triangle
PrintStars(LeftHollowTriangle, n); //////////// Left Hollow Triangle
PrintStars(Pyramid, n); //////////// Pyramid
PrintStars(InvertedPyramid, n); //////////// Inverted Pyramid
PrintStars(HollowInvertedPyramid, n); //////// Hollow Inverted Pyramid
PrintStars(Rhombus, n); //////////// Rhombus
