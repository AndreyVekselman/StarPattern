//this function create a new div and print inside a string (Str)
export function PrintStars(Str) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = Str;
  newDiv.setAttribute("class", "out");
  document.body.appendChild(newDiv);
}
