/**
 * Created by Gareth Yoder on 12/25/2016.
 */

export class WeatherForecastApi {
  query: {
    results: {
      channel: {
        item: {
          forecast: DailyForecast[];
        }
      }
    }
  };
}

export class Weather {
  forecast: DailyForecast[];
}

export interface DailyForecast {
  code: number;
  date: string;
  day: string;
  high: number;
  low: number;
  text: string;
}

