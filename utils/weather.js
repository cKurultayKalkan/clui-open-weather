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
    return await new Promise((res, rej) => {
      this.weather.getTemperature((err, temp) => res(temp));
    });
  }

  async getPressureForCity(city) {
    this.weather.setCity(city);
    return await new Promise((res, rej) => {
      this.weather.getPressure((err, pres) => res(pres));
    });
  }

  async getForecast(city) {
    this.weather.setCity(city);
    return await new Promise((res, rej) => {
      this.weather.getSmartJSON((err, obj) => res(obj));
    });
  }
}

exports.WeatherForecast = WeatherForecast;
