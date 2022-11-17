import { HollowSquare } from "./Module/HollowSquare.mjs";
import { RightTriangle } from "./Module/RightTriangle.mjs";
import { LeftTriangle } from "./Module/LeftTriangle.mjs";
import { DownwardLeftTriangle } from "/Module/DownwardLeftTriangle.mjs";
import { LeftHollowTriangle } from "./Module/LeftHollowTriangle.mjs";
import { Pyramid } from "./Module/Pyramid.mjs";

let out = document.querySelector(".out1");
let n = 5;

out.innerHTML = HollowSquare(n); //////////// Hollow square
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
//////////// Pyramid
out.innerHTML = Pyramid(n);
/////

out = document.querySelector(".out7");
//////////// Inverted Pyramid
Str = " Inverted Pyramid <br>";
n = 5;
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    Str += "&nbsp ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    Str += "* ";
  }

  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
/////

out = document.querySelector(".out8");
Str = "";
//////////// Hollow Inverted Pyramid
Str = " Hollow Inverted Pyramid <br>";
n = 5;
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    Str += "&nbsp ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (i == n) {
      Str += "* ";
    } else if (j == 1 || j == 2 * i - 1) {
      Str += "* ";
    } else {
      Str += "&nbsp ";
    }
  }
  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
////////////////////

out = document.querySelector(".out9");
Str = "";
//////////// Rhombus
Str = " Rhombus <br>";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    Str += "&nbsp ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    Str += "* ";
  }

  Str += "<br>";
}
for (let i = n - 1; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    Str += "&nbsp ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    Str += "* ";
  }
  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
/////////////////////////
