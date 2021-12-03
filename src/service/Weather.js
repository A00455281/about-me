
export const WEATHER_DATE_CITYWISE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&APPID=8d1bb7ec4402e57cd867bba6fa948c65'
export const CELSIUS = "celsius"
export const FAHRENHEIT = "fahrenheit"
const APPID = '8d1bb7ec4402e57cd867bba6fa948c65'

export function getTempInDegreeCel(tempInKelvin) {
    return Math.round(tempInKelvin - 273.15);
}

export function getTempInFahrenheit(tempInKelvin) {
    return changeScaleOfTemperature(getTempInDegreeCel(tempInKelvin), CELSIUS, FAHRENHEIT);
}

export function changeScaleOfTemperature(temp, inputScale, outputScale) {
    if (inputScale === outputScale) {
        return temp;
    }
    if( !isNaN(temp) && inputScale === CELSIUS && outputScale === FAHRENHEIT) {
        return Math.round((temp*1.8) + 32)
    }
    if( !isNaN(temp) && inputScale === FAHRENHEIT && outputScale === CELSIUS) {
        return Math.round((temp - 32) * 0.56)
    }
} 