// web 1 Calculator
const disp = document.getElementById('display');
function addToDisplay(input){
    disp.value += input;
}
function clearDisplay(){
    disp.value = "";
};
function calculate(){
    disp.value = eval(disp.value);
};
function calculate(){
    try{
        disp.value = eval(disp.value);
    } catch (error){
        disp.value = "Error";
    }
};

