const calDisplay = document.getElementById("calDisplay");
function addToDisplay(input){
    calDisplay.value += input;
}
function clearCal(){
    calDisplay.value = "";
}
function workOut(){
    try{
        calDisplay.value = eval(calDisplay.value);
    }
    catch(error){
        calDisplay.value = "Error";
    }
}