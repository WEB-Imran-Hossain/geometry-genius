function calculateTriangleArea() {
  //    get triangel base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  //   clear the base value text
  document.getElementById("triangle-base").value = "";

  //   get triangle height value
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  //   clear the height value text
  document.getElementById("triangle-height").value = "";

//   get data from calculate
  const area = 0.5 * base * height;

//   show triangle area
const areaSpan = document.getElementById("triangle-area")
areaSpan.innerText = area
console.log(area);

}
