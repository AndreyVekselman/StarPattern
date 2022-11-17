export function LeftTriangle(n) {
  let Str = "Left Triangle <br>";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      Str += "* ";
    }
    Str += "<br>";
  }
  Str += "<br><hr>";
  return Str;
}
