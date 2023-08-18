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

 // validate input: base and height
 if (isNaN(base) || isNaN(height)) {
  alert("Please insert a number");
  return;
}

  
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

  // validate input: width and length
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a number");
    return;
  }

  //   get data from calculate
  const area = width * length;

  //   show Rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}

// ---------------------------------------------------------------
// Rectangle area
// reuseable function ---> reduce duplicate code
// calculation Parallelogram Area
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  //   clear the base value text
  document.getElementById("parallelogram-base").value = "";
  const height = getInputValue("parallelogram-height");

  // validate input: base and height
  if(isNaN(base) || isNaN(height)){
    alert("Please insert a number");
    return;
  }

  //   clear the height value text
  document.getElementById("parallelogram-height").value = "";

  //   get data from calculate
  const area = base * height;
  setElementInnerText("parallelogram-area", area);
}

// reuseable get input value field in number
function getInputValue(fieldId) {
  inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
// calculation Rhombus Area
function calculateRhombusArea(){
  const diagonalOne = getInputValue('diagonal-one')
  const diagonalTWO = getInputValue('diagonal-two')

  // validate input: diagonal and diagonal
  if(isNaN(diagonalOne) || isNaN(diagonalTWO)){
    alert("Please insert a number");
    return;
  }

  const area = 0.5 * diagonalOne * diagonalTWO;
  setElementInnerText("rhombus-area", area);
}


// calculation Pentagon Area
function calculatePentagonArea() {
  const penta = getInputValue("pentagon-penta");
  const gonia = getInputValue("pentagon-gonia");
   
  // validate input: penta and gonia
   if(isNaN(penta) || isNaN(gonia)){
    alert("Please insert a number");
    return;
  }
  const area = 0.5 * penta * gonia;
  setElementInnerText("pentagon-area", area);
}

// calculation Ellipse Area
function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");
  // validate input: majorRadius and minorRadius
  if(isNaN(majorRadius) || isNaN(minorRadius)){
    alert("Please insert a number");
    return;
  }
  const area = 3.14 * majorRadius * minorRadius;
  const areaTwoDecimal = area.toFixed(2);
  setElementInnerText("Ellipse-area", areaTwoDecimal);
}

// reuseable set span text
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// Data validation
// 1. set the proper type of the input field (number, date, email)
// 2. check type using typeof
// 3. isNaN: isNaN is checking weather input is not a number or not
