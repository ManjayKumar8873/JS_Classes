const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || height != isNaN){
    results.innerHTML = `Please give a valid value ${height}`
  } else if (weight === '' || weight < 0 || weight != isNaN){
    results.innerHTML = `Please give a valid value ${weight}`
  } else 
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span> ${bmi} <span>`;
  }
})