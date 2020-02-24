const weather = require('openweather-apis');
require('dotenv').config();

class WeatherForecast {
  constructor() {
    weather.setAPPID(process.env.OPENWEATHERAPIKEY);
    weather.setLang('tr');
    weather.setUnits('metric');
    this.weather = weather;
  }

  async getForecastForCity(city) {
    this.weather.setCity(city);
    const result = await new Promise((res, rej) => {
      this.weather.getTemperature((err, temp) => res(temp));
    });
    return result;
  }

  async getPressureForCity(city) {
    this.weather.setCity(city);
    const result = await new Promise((res, rej) => {
      this.weather.getPressure((err, pres) => res(pres));
    });
    return result;
  }

  async getForecastForPeriod(city, period) {
    this.weather.setCity(city);
    const result = await new Promise((res, rej) => {
      this.weather.getWeatherForecastForDays(period, (err, obj) => res(obj));
    });
    return result;
  }

  async getForecast(city) {
    this.weather.setCity(city);
    const result = await new Promise((res, rej) => {
      this.weather.getSmartJSON((err, obj) => res(obj));
    });
    return result;
  }
}

exports.WeatherForecast = WeatherForecast;
