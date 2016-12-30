/**
 * Created by Gareth Yoder on 12/25/2016.
 */

export class TenDayForecastApi {
  response: {
    version: string;
    termsofService: string;
    features: {
      forecast10day: number;
    }
  };
  forecast: WeatherForecast;
}

export class WeatherForecast {
  txt_forecast: {
    date: string;
    forecastday: ForecastDaySummary[];
  };
  simpleforecast: {
    forecastday: ForecastDay[]
  };
}

export interface ForecastDaySummary {
  period: number;
  icon: string;
  icon_url: string;
  title: string;
  fcttext: string;
  fcttext_metric: string;
  pop: string;
}

export interface ForecastDay {
  date: ForecastDate;
  period: number;
  high: Temperature;
  low: Temperature;
  conditions: string;
  icon: string;
  icon_url: string;
  skyicon: string;
  pop: number;
  qpf_allday: PrecipitationMeasurement;
  qpf_day: PrecipitationMeasurement;
  qpf_night: PrecipitationMeasurement;
  snow_allday: SnowfallMeasurement;
  snow_day: SnowfallMeasurement;
  snow_night: SnowfallMeasurement;
  maxwind: WindMeasurement;
  avewind: WindMeasurement;
  avehumidity: number;
  maxhumidity: number;
  minhumidity: number;
}

export interface ForecastDate {
  epoch: string;
  pretty: string;
  day: number;
  month: number;
  year: number;
  yday: number;
  hour: number;
  min: string;
  sec: number;
  isdst: string;
  monthname: string;
  monthname_short: string;
  weekday_short: string;
  weekday: string;
  ampm: string;
  tz_short: string;
  tz_long: string;
}

export interface Temperature {
  fahrenheit: string;
  celsius: string;
}

export interface PrecipitationMeasurement {
  in: number;
  mm: number;
}

export interface SnowfallMeasurement {
  in: number;
  cm: number;
}

export interface WindMeasurement {
  mph: number;
  kph: number;
  dir: string;
  degrees: number;
}
