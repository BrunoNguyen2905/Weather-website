import axios from "axios";

const API_KEY = '022d5bfc1ed942d9a44112348212611'
const baseUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`;

export function getWeatherData(city: string): any {
    return axios.get(`${baseUrl}&q=${city}`)
}

export function getWeatherForecast(city: string, days: number): any {
    return axios.get(`${baseUrl}&q=${city}&days=${days}`)
}

