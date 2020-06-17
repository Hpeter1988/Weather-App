import React, { useEffect, useState }from 'react'
import { getAllData } from '../service/getAllData';

export const locationAndWeatherContext = React.createContext({})

 const LocationAndWeatherProvider = locationAndWeatherContext.Provider

export const ContextProvider = props => {

  const [ locationAndWeatherData, setLocationAndWeatherData ] = useState([]);
  const [ searchRadius, setSearchRadius ] = useState(2);
  const [ locationName, setLocationName ] = useState('');

  useEffect(() => {
      getAllData(searchRadius, locationName).then(data =>
          setLocationAndWeatherData(data, locationName)
      );
  },[searchRadius, locationName]);

  return(
    <div>
      <LocationAndWeatherProvider value={ { locationAndWeatherData, setSearchRadius, setLocationName } }>
      {props.children}              
      </LocationAndWeatherProvider>
   </div>
  )
}
  