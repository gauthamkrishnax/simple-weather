class Forecast{
    constructor(){
        this.key = '34Je1G8oIWxh1OIcAZIx44CmcfQUbje8';
        this.weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const citydets = await this.getCity(city);
        const weather = await this.getWeather(citydets.Key);
    
        return { citydets , weather };
    }

    async getWeather(id){

        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherUrl + query);
        const data = await response.json()
        return data;
    }
    async getCity(city){
     
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityUrl + query)
        const data = await response.json();
        return data[0];
    }
}
