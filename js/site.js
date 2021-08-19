
function getValues(){
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue =document.getElementById("endValue").value;
    // changes values from string to number
    startValue = parseInt(startValue)
    endValue = parseInt(endValue)

    if(Number.isInteger(startValue)&& Number.isInteger(endValue)){

            numbers = generateNumbers(startValue, endValue)

            displayNumbers(numbers)
    }else{
        alert("You must enter integers")
    }
 
}

//generate numbers from startvalue to the endValue
function generateNumbers(sValue, eValue){
    let numbers = []
    // we want to get all numbers from start to end
    for(let i = sValue; i <= eValue; i++){
        numbers.push(i)
    }
    return numbers
}

//display the numbers and mark even numbers bold
function displayNumbers(numbersArr){
    let templateRows = ""

    for(let i = 0; i < numbersArr.length; i++){
        let number = numbersArr[i]
        let className = "odd"
        
        if(number % 2 == 0){
          className = "even"
        }

        templateRows += `<tr><td class='${className}'>${number}</td></tr>`     
    }

    document.getElementById("results").innerHTML = templateRows;
}