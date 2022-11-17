export function RightTriangle(n) {
  let Str = "Right Triangle <br>";
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
  return Str;
}
