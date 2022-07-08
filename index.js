function submit(){
    const weightValue = document.querySelector(".weight").value;
    const heightValue = document.querySelector(".height").value;

    let weight = Number(weightValue);
    let height = Number(heightValue);

    let bmi = weight/(height * height);
        bmi = bmi.toFixed(1);

    document.getElementById("answer").innerHTML = " Your BMI is " + bmi;

    let bodyType = document.getElementById("bodyType");

    if(bmi >= 0 && bmi <= 18.5){
        bodyType.innerHTML = "Underweight";
    }
    else if(bmi > 18.5 && bmi <= 25){
        bodyType.innerHTML = "Normal";
    }
    else if(bmi > 25 && bmi <= 30){
        bodyType.innerHTML = "Overweight";
    }
    else(bodyType.innerHTML = "Obesity");


}