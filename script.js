// Developed by - Rupesh Kumar Mund

// Data Convertor Logic :- 
// Getting the values of input, output, inputType & outputType & storing in variables.

let inputData = document.getElementById("inputData");
let resultData = document.getElementById("resultData");
let inputTypeData = document.getElementById("inputTypeData");
let resultTypeData = document.getElementById("resultTypeData");

let option_Data_From,option_Data_To;

// Events for input, inputtype & resulttype if changed then what functioon will perform.
inputData.addEventListener("input", finalResultData);
inputTypeData.addEventListener("change", finalResultData);
resultTypeData.addEventListener("change", finalResultData);

option_Data_From = inputTypeData.value;
option_Data_To = resultTypeData.value; 

// This function will be called if input & inputType & resultType is changed 
function finalResultData() {

    option_Data_From = inputTypeData.value;
    option_Data_To = resultTypeData.value; 

    // Logic for converting gigabyte to megabyte & kilobyte.
    if (option_Data_From === "gigabyte" && option_Data_To === "megabyte") {
        resultData.value = Number(inputData.value) * 1024;
    } else if (option_Data_From === "gigabyte" && option_Data_To === "kilobyte") {
        resultData.value = Number(inputData.value) * 1048576;
    } else if (option_Data_From === "gigabyte" && option_Data_To === "gigabyte") {
        resultData.value = inputData.value;
    }

    // Logic for converting megabyte to kilobyte & gigabyte.
    if (option_Data_From === "megabyte" && option_Data_To === "gigabyte") {
        resultData.value = Number(inputData.value) * 0.0009765625;
    } else if (option_Data_From === "megabyte" && option_Data_To === "kilobyte") {
        resultData.value = Number(inputData.value) * 1024;
    } else if (option_Data_From === "megabyte" && option_Data_To === "megabyte") {
        resultData.value = inputData.value;
    }

    // Logic for converting kilobyte to megabyte & gigabyte.
    if (option_Data_From === "kilobyte" && option_Data_To === "megabyte") {
        resultData.value = Number(inputData.value) * 0.0009765625;
    }else if (option_Data_From === "kilobyte" && option_Data_To === "gigabyte") {
        resultData.value = Number(inputData.value) * (1/1048576);
    } else if (option_Data_From === "kilobyte" && option_Data_To === "kilobyte") {
        resultData.value = inputData.value;
    } 
}

// Length Convertor Logic :- 
// Getting the values of input, output, inputType & outputType & storing in variables.
let inputLength = document.getElementById("inputLength");
let resultLength = document.getElementById("resultLength");
let inputTypeLength = document.getElementById("inputTypeLength");
let resultTypeLength = document.getElementById("resultTypeLength");

let option_Length_From, option_Length_To;

// Events for input, inputtype & resulttype if changed then what functioon will perform.
inputLength.addEventListener("input", finalResultLength);
inputTypeLength.addEventListener("change", finalResultLength);
resultTypeLength.addEventListener("change", finalResultLength);

option_Length_From = inputTypeLength.value;
option_Length_To = resultTypeLength.value; 

// This function will be called if input & inputType & resultType is changed 
function finalResultLength() {

    option_Length_From = inputTypeLength.value;
    option_Length_To = resultTypeLength.value;  

    // Logic for converting meter to kilometer & centimeter.
    if (option_Length_From === "meter" && option_Length_To === "kilometer") {
        resultLength.value = Number(inputLength.value) * 0.001;
    } else if (option_Length_From === "meter" && option_Length_To === "centimeter") {
        resultLength.value = Number(inputLength.value) * 100;
    } else if (option_Length_From === "meter" && option_Length_To === "meter") {
        resultLength.value = inputLength.value;
    }

    // Logic for converting kilometer to meter & centimeter.
    if (option_Length_From === "kilometer" && option_Length_To === "meter") {
        resultLength.value = Number(inputLength.value) * 1000;
    } else if (option_Length_From === "kilometer" && option_Length_To === "centimeter") {
        resultLength.value = Number(inputLength.value) * 100000;
    } else if (option_Length_From === "kilometer" && option_Length_To === "kilometer") {
        resultLength.value = inputLength.value;
    }

    // Logic for converting centimeter to meter & kilometer.
    if (option_Length_From === "centimeter" && option_Length_To === "meter") {
        resultLength.value = Number(inputLength.value) * 0.01;
    } else if (option_Length_From === "centimeter" && option_Length_To === "kilometer") {
        resultLength.value = Number(inputLength.value) * 0.00001;
    } else if (option_Length_From === "centimeter" && option_Length_To === "centimeter") {
        resultLength.value = inputLength.value;
    } 
}

// Mass Convertor Logic :- 
// Getting the values of input, output, inputType & outputType & storing in variables.
let inputMass = document.getElementById("inputMass");
let resultMass = document.getElementById("resultMass");
let inputTypeMass = document.getElementById("inputTypeMass");
let resultTypeMass = document.getElementById("resultTypeMass");

let option_Mass_From, option_Mass_To;

// Events for input, inputtype & resulttype if changed then what functioon will perform.
inputMass.addEventListener("input", finalResultMass);
inputTypeMass.addEventListener("change", finalResultMass);
resultTypeMass.addEventListener("change", finalResultMass);

option_Mass_From = inputTypeMass.value;
option_Mass_To = resultTypeMass.value;

// This function will be called if input & inputType & resultType is changed 
function finalResultMass() {
    
    // storing the value of inputType & resultType for using it in if else condition to decide which conversion to perform.
    option_Mass_From = inputTypeMass.value;
    option_Mass_To = resultTypeMass.value;

    // Logic for converting  gram to pound & kilogram .
    if (option_Mass_From === "gram" && option_Mass_To === "pound") {
        resultMass.value = Number(inputMass.value) * 0.00220462262;
    } else if (option_Mass_From === "gram" && option_Mass_To === "kilogram") {
        resultMass.value = Number(inputMass.value) * 0.001;
    } else if (option_Mass_From === "gram" && option_Mass_To === "gram") {
        resultMass.value = inputMass.value;
    }

    // Logic for converting kilogram to pound & gram.
    if (option_Mass_From === "kilogram" && option_Mass_To === "pound") {
        resultMass.value = Number(inputMass.value) * 2.20462262;
    } else if (option_Mass_From === "kilogram" && option_Mass_To === "gram") {
        resultMass.value = Number(inputMass.value) * 1000;
    } else if (option_Mass_From === "kilogram" && option_Mass_To === "kilogram") {
        resultMass.value = inputMass.value;
    }

    // Logic for converting pound to gram & kilogram.
    if (option_Mass_From === "pound" && option_Mass_To === "kilogram") {
        resultMass.value = Number(inputMass.value) * 0.45359237;
    } else if (option_Mass_From === "pound" && option_Mass_To === "gram") {
        resultMass.value = Number(inputMass.value) * 453.59237;
    } else if (option_Mass_From === "pound" && option_Mass_To === "pound") {
        resultMass.value = inputMass.value;
    }
}


// Time Convertor Logic :- 
// Getting the values of input, output, inputType & outputType & storing in variables.

let inputTime = document.getElementById("inputTime");
let resultTime = document.getElementById("resultTime");
let inputTypeTime = document.getElementById("inputTypeTime");
let resultTypeTime = document.getElementById("resultTypeTime");

let option_Time_From, option_Time_To;

// Events for input, inputtype & resulttype if changed then what functioon will perform.
inputTime.addEventListener("input", finalResultTime);
inputTypeTime.addEventListener("change", finalResultTime);
resultTypeTime.addEventListener("change", finalResultTime);

option_Time_From = inputTypeTime.value;
option_Time_To = resultTypeTime.value;

// This function will be called if input & inputType & resultType is changed 
function finalResultTime() {
    
    // storing the value of inputType & resultType for using it in if else condition to decide which conversion to perform.
    option_Time_From = inputTypeTime.value;
    option_Time_To = resultTypeTime.value;

    // Logic for converting year to other parameters.
    if (option_Time_From === "year" && option_Time_To === "month") {
        resultTime.value = Number(inputTime.value) * 12;
    } else if (option_Time_From === "year" && option_Time_To === "week") {
        resultTime.value = Number(inputTime.value) * 52.14;
    } else if (option_Time_From === "year" && option_Time_To === "day") {
        resultTime.value = Number(inputTime.value) * 365;
    } else if (option_Time_From === "year" && option_Time_To === "hour") {
        resultTime.value = Number(inputTime.value) * 8760;
    }  else if (option_Time_From === "year" && option_Time_To === "minute") {
        resultTime.value = Number(inputTime.value) * 525600;
    } else if (option_Time_From === "year" && option_Time_To === "second") {
        resultTime.value = Number(inputTime.value) * 31536000;
    } else if (option_Time_From === "year" && option_Time_To === "year") {
        resultTime.value = inputTime.value;
    }
    
    // Logic for converting Month to other parameters.
    if (option_Time_From === "month" && option_Time_To === "year") {
        resultTime.value = Number(inputTime.value) * 0.08333333;
    } else if (option_Time_From === "month" && option_Time_To === "month") {
        resultTime.value = inputTime.value;
    } else if (option_Time_From === "month" && option_Time_To === "week") {
        resultTime.value = Number(inputTime.value) * 4.34524;
    } else if (option_Time_From === "month" && option_Time_To === "day") {
        resultTime.value = Number(inputTime.value) * 30.4167;
    }  else if (option_Time_From === "month" && option_Time_To === "hour") {
        resultTime.value = Number(inputTime.value) * 730;
    } else if (option_Time_From === "month" && option_Time_To === "minute") {
        resultTime.value = Number(inputTime.value) * 43800;
    } else if (option_Time_From === "month" && option_Time_To === "second") {
        resultTime.value = Number(inputTime.value) * 2628000;
    }

    // Logic for converting Week to other parameters.
    if (option_Time_From === "week" && option_Time_To === "year") {
        resultTime.value = Number(inputTime.value) * 0.019178;
    } else if (option_Time_From === "week" && option_Time_To === "month") {
        resultTime.value = Number(inputTime.value) * 0.230136;
    } else if (option_Time_From === "week" && option_Time_To === "week") {
        resultTime.value = inputTime.value;
    } else if (option_Time_From === "week" && option_Time_To === "day") {
        resultTime.value = Number(inputTime.value) * 7;
    } else if (option_Time_From === "week" && option_Time_To === "hour") {
        resultTime.value = Number(inputTime.value) * 168;
    } else if (option_Time_From === "week" && option_Time_To === "minute") {
        resultTime.value = Number(inputTime.value) * 10080;
    } else if (option_Time_From === "week" && option_Time_To === "second") {
        resultTime.value = Number(inputTime.value) * 604800;
    }

    // Logic for converting Day to other parameters.
    if (option_Time_From === "day" && option_Time_To === "year") {
        resultTime.value = Number(inputTime.value) * 0.002739726;
    } else if (option_Time_From === "day" && option_Time_To === "month") {
        resultTime.value = Number(inputTime.value) * 0.032876676;
    } else if (option_Time_From === "day" && option_Time_To === "week") {
        resultTime.value = Number(inputTime.value) * 0.142857142;
    } else if (option_Time_From === "day" && option_Time_To === "day") {
        resultTime.value = inputTime.value;
    }  else if (option_Time_From === "day" && option_Time_To === "hour") {
        resultTime.value = Number(inputTime.value) * 24;
    } else if (option_Time_From === "day" && option_Time_To === "minute") {
        resultTime.value = Number(inputTime.value) * 1440;
    } else if (option_Time_From === "day" && option_Time_To === "second") {
        resultTime.value = Number(inputTime.value) * 86400;
    }

    // Logic for converting Hour to other parameters.
    if (option_Time_From === "hour" && option_Time_To === "year") {
        resultTime.value = Number(inputTime.value) * 0.00011415525;
    } else if (option_Time_From === "hour" && option_Time_To === "month") {
        resultTime.value = Number(inputTime.value) * 0.001369861137;
    } else if (option_Time_From === "hour" && option_Time_To === "week") {
        resultTime.value = Number(inputTime.value) * 0.0059523754;
    } else if (option_Time_From === "hour" && option_Time_To === "day") {
        resultTime.value = Number(inputTime.value) * 0.04166665;
    }  else if (option_Time_From === "hour" && option_Time_To === "hour") {
        resultTime.value = inputTime.value;
    } else if (option_Time_From === "hour" && option_Time_To === "minute") {
        resultTime.value = Number(inputTime.value) * 60;
    } else if (option_Time_From === "hour" && option_Time_To === "second") {
        resultTime.value = Number(inputTime.value) * 3600;
    }

    // Logic for converting Minute to other parameters.
    if (option_Time_From === "minute" && option_Time_To === "year") {
        resultTime.value = Number(inputTime.value) * 0.0000019025;
    } else if (option_Time_From === "minute" && option_Time_To === "month") {
        resultTime.value = Number(inputTime.value) * 0.00002283104;
    } else if (option_Time_From === "minute" && option_Time_To === "week") {
        resultTime.value = Number(inputTime.value) * 0.00009920638;
    } else if (option_Time_From === "minute" && option_Time_To === "day") {
        resultTime.value = Number(inputTime.value) * 0.00069444414;
    }  else if (option_Time_From === "minute" && option_Time_To === "hour") {
        resultTime.value = Number(inputTime.value) * 0.01666665;
    } else if (option_Time_From === "minute" && option_Time_To === "minute") {
        resultTime.value = inputTime.value;
    } else if (option_Time_From === "minute" && option_Time_To === "second") {
        resultTime.value = Number(inputTime.value) * 60;
    }

    // Logic for converting Second to other parameters.
    if (option_Time_From === "second" && option_Time_To === "year") {
        alert("Very neglible number after conversion - Rupesh Mund(Developer)\nYou can Try other conversion");
    } else if (option_Time_From === "second" && option_Time_To === "month") {
        alert("Very neglible number after conversion - Rupesh Mund(Developer)\nYou can Try other conversion");
    } else if (option_Time_From === "second" && option_Time_To === "week") {
        alert("Very neglible number after conversion - Rupesh Mund(Developer)\nYou can Try other conversion");
    } else if (option_Time_From === "second" && option_Time_To === "day") {
        resultTime.value = Number(inputTime.value) * 0.00001157407;
    }  else if (option_Time_From === "second" && option_Time_To === "hour") {
        resultTime.value = Number(inputTime.value) * 0.000277777777;
    } else if (option_Time_From === "second" && option_Time_To === "minute") {
        resultTime.value = Number(inputTime.value) * 0.016666666667;
    } else if (option_Time_From === "second" && option_Time_To === "second") {
        resultTime.value = inputTime.value;
    }
}







