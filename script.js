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

PrintStars(HollowSquare(n)); //////////// Hollow square
//////
out = document.querySelector(".out2");
out.innerHTML = RightTriangle(n); //////////// Right Triangle
//////////
out = document.querySelector(".out3");
out.innerHTML = LeftTriangle(n); //////////// Left Triangle
//////////
out = document.querySelector(".out4");
out.innerHTML = DownwardLeftTriangle(n); //////////// Downward Left Triangle
//////////
out = document.querySelector(".out5");
out.innerHTML = LeftHollowTriangle(n); //////////// Left Hollow Triangle
////////////
out = document.querySelector(".out6");
out.innerHTML = Pyramid(n); //////////// Pyramid
////////
out = document.querySelector(".out7");
out.innerHTML = InvertedPyramid(n); //////////// Inverted Pyramid
////////
out = document.querySelector(".out8");
out.innerHTML = HollowInvertedPyramid(n); //////// Hollow Inverted Pyramid
////////////////////
out = document.querySelector(".out9");
out.innerHTML = Rhombus(n); //////////// Rhombus
/////////////////////////
PrintStars(Rhombus(n));
