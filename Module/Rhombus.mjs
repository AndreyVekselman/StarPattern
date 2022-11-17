export function Rhombus(n) {
  let Str = " Rhombus <br>";
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
  return Str;
}
