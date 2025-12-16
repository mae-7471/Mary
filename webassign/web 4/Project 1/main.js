function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (isNaN(weight) || isNaN(heightCm) || heightCm <= 0) {
    result.innerHTML = "Please enter valid height and weight!";
    return;
  }

  const height = heightCm / 100;
  const bmi = weight / (height * height);

  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal weight";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";

  result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${status})`;
}
