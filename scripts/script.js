const submit =()=>{
   let weightValue = document.querySelector(".weight").value;
   let heightValue = document.querySelector(".height").value;
   

    let weight = Number(weightValue);
    let height = Number(heightValue);

    let bmi = weight/(height * height);
        bmi = bmi.toFixed(1);

    document.getElementById("answer").innerHTML = `Your BMI is ${bmi}`;

    let bodyType = document.getElementById("bodyType");

    if(!weightValue || !heightValue){
        alert("please fill in your details");
        document.getElementById("answer").innerHTML = "";
        return;
    }

    if(weightValue < 0 || heightValue < 0){
        alert("please enter a positive value");
        document.getElementById("answer").innerHTML = "";
        return;
    }

    if(bmi >= 0 && bmi <= 18.5){
        bodyType.innerHTML = "Underweight";
        document.getElementById("solution").innerHTML = "Fam, try dey chop!";
    }
    else if(bmi > 18.5 && bmi <= 25){
        bodyType.innerHTML = "Healthy weight";
        document.getElementById("solution").innerHTML = "Fam, you gallant!";
    }
    else if(bmi > 25 && bmi <= 30){
        bodyType.innerHTML = "Overweight";
        document.getElementById("solution").innerHTML = "Fam, you gats diet and hit the gym.";
    }
    else{bodyType.innerHTML = "Obesity";
        document.getElementById("solution").innerHTML = "Fam, omo you gats diet, hit the gym and add medications."}
    
}

const clearScreen =()=> {
    document.getElementById("answer").innerHTML = "";
    document.querySelector(".weight").value = "";
    document.querySelector(".height").value = "";
    document.getElementById("bodyType").innerHTML = "";
    document.getElementById("solution").innerHTML = "";
    document.getElementById("gender").value = "select gender";
}


