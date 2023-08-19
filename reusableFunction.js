// Reusable function

function getInputValue (fieldId){
    const inputField = document.getElementById(fieldId)
    const inputValuestring = inputField.value
    const inputValue = parseFloat(inputValuestring)
    inputField.value = ''
    if(isNaN(inputValue)){
        alert('please provide a valied number')
        return;
    }
    return inputValue;
}
// reusable function for set area innerText
function setElementInnerText (elementId,area){
    const element = document.getElementById(elementId)
    if(isNaN(area)){
        return;
    }

    element.innerText = area
}
// Add to calculation entry
function addToCalculationEntry(areatype,area){
    const calculationEntry = document.getElementById('calculation-entry')

    const countElement = calculationEntry.childElementCount;

    const p = document.createElement('p')
    p.classList.add('my-2')

    p.innerHTML = `${countElement + 1}. ${areatype} ${area} cm<sup>2</sup> <button class='btn btn-success'>converter</button> `
    calculationEntry.appendChild(p)

}