import { service } from '../axiosConfig/axios.cofig'

export const getGivenLocationBasedOnLocationName = async (locationName) => {

  const weatherOfAGivenLocation = await service.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=1ba19cef59cef00a5fa51974b914656c`
  )

  return {
    ...weatherOfAGivenLocation.data.coord,
    name: weatherOfAGivenLocation.data.name
  }
};
