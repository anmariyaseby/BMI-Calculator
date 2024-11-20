function bmicalculator(){
    const radios = document.getElementsByName("grp");
    let isChecked = false;
    const height= document.getElementById("height").value
    const weight= document.getElementById("weight").value
    const age = document.getElementById("age").value
    for (let radio of radios) {
        if (radio.checked) {
          isChecked = true;
          break;
        }
      }
    if(height!=0 && weight!=0 && age!=0 && isChecked==true){
        let bmi= (weight/((height/100)**2)).toFixed(2)
    
        msg.innerHTML=`Your BMI is ${bmi}`
        let classification=""
        if (bmi < 18.5) {
            classification = "underweight";
        } else if (bmi < 25) {
            classification = "normal weight";
        } else {
            classification = "overweight";
        }
        category.innerHTML=`${classification}`
    }
    if(isChecked==false){
        alert("Select gender")
    }
    if(height==0){
        alert("Enter Height")
    }
    if(weight==0){
        alert("Enter weight")
    }
    if(age==0){
        alert("Enter Age")
    }
    
    
}