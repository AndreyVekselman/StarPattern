export function InvertedPyramid(n) {
  let Str = " Inverted Pyramid <br>";
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
  return Str;
}
