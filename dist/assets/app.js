const cityForm = document.querySelector('#location');
const card = document.querySelector('#card');
const details = document.querySelector('#details');
const time = document.querySelector('#time');
const icon = document.querySelector('#icon');

const forecast = new Forecast();

const updateUI = (data) => {

    // DESTRUCTURING

    const { citydets , weather } = data; 

    details.innerHTML = `

    <h5 class="text-2xl tracking-widest text-gray-600">${citydets.EnglishName}</h5>
                <h6 class="mt-1 tracking-widest text-gray-500">${weather[0].WeatherText}</h6>
                <div class="mt-1 text-3xl lg:text-4xl tracking-widest font-light text-gray-500">
                    <span>${weather[0].Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    `
    icon.setAttribute('src', `assets/img/icons/${weather[0].WeatherIcon}.svg`)

    weather[0].IsDayTime ?
        time.setAttribute('src', 'assets/img/day.svg') 
        : time.setAttribute('src', 'assets/img/night.svg');

    card.classList.remove('hidden')
}


cityForm.addEventListener('submit' , e => {

    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset() 

    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    localStorage.setItem('city', city)    
})
 
if(localStorage.city){

    forecast.updateCity(localStorage.city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}