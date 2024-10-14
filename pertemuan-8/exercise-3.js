let person = {
    firstName : "elsha",
    weight : 39,
    height : 145,
    calculateBMI : function (){
        let bmi = this.weight/(this.height * this.height)
        console.log(bmi);
        this.BMI = bmi;
        if (bmi < 16.0){
            console.log("Severely Underwight");
        } else if (bmi >= 16.0 && bmi <= 18.4){
            console.log("Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9){
            console.log("Normal");
        } else if (bmi >= 25.0 && bmi <= 29.9){
            console.log("Overweight");
        } else if (bmi >= 30.0 && bmi <= 34.9){
           console.log("Moderately Obese");
        } else if (bmi >= 35.0 && bmi <= 39.9){
           console.log("Severely Obese");
        } else if (bmi >= 40.0){
            console.log("Morbidly Obese");
        }
    }
}
console.log(person.calculateBMI());
console.log(person);

