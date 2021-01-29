const key = '34Je1G8oIWxh1OIcAZIx44CmcfQUbje8';

//GET WEATHER INFO

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/' 
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json()

    return data;
;}


// GET CITY INFO

const getCity = async (city) =>
{
   const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
   const query = `?apikey=${key}&q=${city}`;

   const response = await fetch(base + query)
   const data = await response.json();
   return data[0];
}
