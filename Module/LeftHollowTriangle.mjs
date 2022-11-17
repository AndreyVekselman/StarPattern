export function LeftHollowTriangle(n) {
  let Str = " Left Hollow Triangle <br>";
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
  return Str;
}
