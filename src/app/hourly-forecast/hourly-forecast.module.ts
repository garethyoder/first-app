/**
 * Created by Gareth Yoder on 12/29/2016.
 */

export class HourlyForecastApi {
  response: {
    version: string;
    termsofService: string;
    features: {
      hourly: number;
    }
  };
  hourly_forecast: HourlyForecast[];
}

export class HourlyForecast {
  FCTTIME: TimeForecast;
  temp: MeasuringSystem;
  dewpoint: MeasuringSystem;
  condition: string;
  icon: string;
  icon_url: string;
  fctcode: string;
  sky: string;
  wspd: MeasuringSystem;
  wdir: WindDirection;
  uvi: string;
  humidity: string;
  windchill: MeasuringSystem;
  heatindex: MeasuringSystem;
  feelslike: MeasuringSystem;
  qpf: MeasuringSystem;
  snow: MeasuringSystem;
  pop: number;
  mslp: MeasuringSystem;
}

export interface TimeForecast {
  hour: string;
  hour_padded: string;
  min: string;
  min_unpadded: string;
  sec: string;
  year: string;
  mon: string;
  mon_padded: string;
  mon_abbrev: string;
  mday: string;
  mday_padded: string;
  yday: string;
  isdst: string;
  epoch: string;
  pretty: string;
  civil: string;
  month_name: string;
  month_name_abbrev: string;
  weekday_name: string;
  weekday_name_night: string;
  weekday_name_abbrev: string;
  weekday_name_unlang: string;
  weekday_name_night_unlang: string;
  ampm: string;
  tz: string;
  age: string;
  UTCDATE: string;
}

export interface MeasuringSystem {
  english: string;
  metric: string;
}

export interface WindDirection {
  dir: string;
  degrees: string;
}
