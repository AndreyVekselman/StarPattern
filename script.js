import { HollowSquare } from "./Module/HollowSquare.mjs";
import { RightTriangle } from "./Module/RightTriangle.mjs";
import { LeftTriangle } from "./Module/LeftTriangle.mjs";

let out = document.querySelector(".out1");
let Str = "";
let n = 5;

//////////// Hollow square
out.innerHTML = HollowSquare(n);
//////

out = document.querySelector(".out2");
//////////// Right Triangle
out.innerHTML = RightTriangle(n);
//////////

out = document.querySelector(".out3");
//////////// Left Triangle
out.innerHTML = LeftTriangle(n);
//////////

out = document.querySelector(".out4");

//////////// Downward Left Triangle
Str = "Downward Left Triangle <br>";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    if (j <= n - i) {
      Str += "* ";
    } else {
      Str += "&nbsp";
    }
  }
  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
//////////
out = document.querySelector(".out5");
Str = "";

//////////// Left Hollow Triangle
Str = " Left Hollow Triangle <br>";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == n) {
      Str += "* ";
    } else if (j == 1 || j == i) {
      Str += "* ";
    } else {
      Str += "&nbsp ";
    }
  }
  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
////////////

out = document.querySelector(".out6");
Str = "";
//////////// Pyramid
Str = " Pyramid <br>";
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
Str += "<br><hr>";
out.innerHTML = Str;
/////

out = document.querySelector(".out7");
Str = "";
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
