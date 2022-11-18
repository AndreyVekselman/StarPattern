//this function create a new div and print inside a string (Str)
export function PrintStars(Str, n) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = Str(n);
  newDiv.setAttribute("class", "out");
  document.body.appendChild(newDiv);
}
