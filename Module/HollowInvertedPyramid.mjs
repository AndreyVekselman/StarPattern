export function HollowInvertedPyramid(n) {
  let Str = " Hollow Inverted Pyramid <br>";
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
  return Str;
}
