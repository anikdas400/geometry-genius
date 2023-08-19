
// card 1-- triangle calculation

function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base')
    const baseValuestring = baseField.value;
    const base = parseFloat(baseValuestring)
    baseField.value = '';

    // get triangle hight value
    const hightField = document.getElementById('triangle-hight')
    const hightValuestring = hightField.value;
    const hight = parseFloat(hightValuestring)
    hightField.value = '';

    // get triangle area value
    const triangleArea = 0.5 * base * hight

    // set area in areaValue innertext

    const areaValue = document.getElementById('triangle-area')
    areaValue.innerText = triangleArea;

    addToCalculationEntry('Triangle',triangleArea)

}
// card 2-- rectangle calculation
function calculateRectangleArea(){

    const lengthField = document.getElementById('rectangle-length')
    const lengthFieldValuestring = lengthField.value;
    const length = parseFloat(lengthFieldValuestring)
    lengthField.value = '';

    const widthField = document.getElementById('rectangle-width')
    const widthFieldValuestring = widthField.value;
    const width = parseFloat(widthFieldValuestring)
    widthField.value = '';

    const rectangleArea = length * width;

    const areaValue = document.getElementById('rectangle-area')
    areaValue.innerText = rectangleArea;

    addToCalculationEntry('Rectangle',rectangleArea)

}

// USE Reusable function

// card 3-- parallelogram area calculation using reusable function
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const hight =getInputValue('parallelogram-hight')
    const area = base * hight;

    setElementInnerText ('parallelogram-area',area)
// akhane Parallelogram akta name matro
    addToCalculationEntry('Parallelogram',area)

}

// card 4-- rhombus area calculation using reusable function
function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1')
    const d2 = getInputValue('rhombus-d2')
    const area = .5 * d1 * d2;
    
    setElementInnerText('rhombus-area',area)

    addToCalculationEntry('Rhombus',area)
}

// card 5-- pentagon area calculation using reusable function
function calculatePentagonArea(){
    const p = getInputValue('pentagon-p')
    const b = getInputValue('pentagon-b')
    const area = .5 * p * b;

    setElementInnerText('pentagon-area',area)

    addToCalculationEntry('Pentagon',area)
}
// card 6-- Ellipse area calculation using reusable function
function calculateEllipseArea(){
    const a = getInputValue('ellipse-a')
    const b = getInputValue('ellipse-b')
    const area = Math.PI * a * b;
    const areas = area.toFixed(2)

    setElementInnerText('ellipse-area',areas)
// akhane Ellipse akta name matro
    addToCalculationEntry('Ellipse',areas)
}