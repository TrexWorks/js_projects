const bmiForm =  document.querySelector('form');
bmiForm.addEventListener('submit',function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const resultText = document.querySelector('#resultText');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please Give a valid height'
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please Give a valid weight'
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if (bmi < 18.6) {
            resultText.innerHTML = 'Under Weight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            resultText.innerHTML = 'Normal Range';
        } else if (bmi > 24.9) {
            resultText.innerHTML = 'Overweight';
        }
        result.innerHTML = `<span>${bmi}</span>`
    }
    
})