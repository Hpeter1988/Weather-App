import { getCurrentLocation } from './getCurrentLocation'
import { service } from '../axiosConfig/axios.cofig'
import { getGivenLocationBasedOnLocationName } from '../service/getGivenLocationBasedOnLocationName'

export const getAllData = async (searchRadius, searchLocation) => {

  const coordiantes =!searchLocation ? await getCurrentLocation() :
    await getGivenLocationBasedOnLocationName(searchLocation)

  const latitude = !searchLocation ? coordiantes.coords.latitude : coordiantes.lat
  const longitude = !searchLocation ? coordiantes.coords.longitude : coordiantes.lon

  const locations = await service.get(
      `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&maxRows=10&username=eggdice&radius=${searchRadius}`
      )

      const weatherData = await Promise.all(locations.data.geonames.map(async (location) => {

          const weather = await service.get(
              `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&units=metric&appid=1ba19cef59cef00a5fa51974b914656c`
              )

              return {
                GeoId: location.geonameId,
                name:weather.data.name,
                temperature: weather.data.main.temp,
                weatherDescription: weather.data.weather[0].description
              };

            }));

      return {
        currentLocationData:{
          latitude:latitude.toFixed(2),
          longitude:longitude.toFixed(2),
          name: coordiantes.name || locations.data.geonames[0].name
        },
        weatherData
      }
  };
