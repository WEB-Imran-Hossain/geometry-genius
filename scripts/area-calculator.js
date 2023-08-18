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
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
}

// ----------------------------------------------------------
function calculateRectangleArea() {
  //    get Rectangle width value
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  //   clear the width value text
  document.getElementById("rectangle-width").value = "";

  //   get rectangle length value
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  //   clear the length value text
  document.getElementById("rectangle-length").value = "";

  //   get data from calculate
  const area = width * length;

  //   show triangle area
  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = area;
}
