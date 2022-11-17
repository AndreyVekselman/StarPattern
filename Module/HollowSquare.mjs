export function HollowSquare(n) {
  let Str = "Hollow square <br>";
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
  return Str;
}
