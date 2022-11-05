let out = document.querySelector(".out1");
let Str = "";
let n = 0;
let flag = 0;
//////////// Hollow squre
Str = "Hollow squre <br>";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == 1 || i == n) {
      Str += "* ";
    } else if (j == 1 || j == n) {
      Str += "* ";
    } else {
      Str += "&nbsp ";
    }
  }
  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
//////
out = document.querySelector(".out2");
Str = "";
//////////// Right Triangle
Str = "Right Triangle <br>";
n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j <= n - i) {
      Str += "&nbsp ";
    } else {
      Str += "* ";
    }
  }
  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
//////////
out = document.querySelector(".out3");
Str = "";

//////////// Left Triangle
Str = "Left Triangle <br>";
n = 5;
flag = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j > flag) {
      Str += "&nbsp ";
    } else {
      Str += "* ";
    }
  }
  flag++;
  Str += "<br>";
}
Str += "<br><hr>";
out.innerHTML = Str;
//////////
out = document.querySelector(".out4");
Str = "";

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
///git training