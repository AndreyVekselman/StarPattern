export function Pyramid(n) {
  let Str = " Pyramid <br>";
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
  return Str;
}
