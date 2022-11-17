export function DownwardLeftTriangle(n) {
  let Str = "Downward Left Triangle <br>";
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
  return Str;
}
