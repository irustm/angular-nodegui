// https://github.com/nodegui/examples/blob/master/react-nodegui/weather-app-widget/src/utils/weather.ts

import { fetch } from 'node-fetch';

export const getCurrentWeather = async () => {
  const apiKey = '15e768797b4bf44b49979df29e6da67a';
  const city = 'Stockholm';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url).then(res => res.json());
  return response;
};
