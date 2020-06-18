import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import { locationAndWeatherContext } from'../contexts/ContextProvider'

export const TitleRow = () => {
  const { locationAndWeatherData } = useContext(locationAndWeatherContext)

  if(locationAndWeatherData.currentLocationData){
    return(
      <>
        <Typography variant="h4">
          { `Base location: ${locationAndWeatherData.currentLocationData.name}` }
        </Typography>
        <Typography variant="h4">
          { `latitude: ${locationAndWeatherData.currentLocationData.latitude}` }
        </Typography>
        <Typography variant="h4">
          { `longitude: ${locationAndWeatherData.currentLocationData.longitude}` }
        </Typography>
    </>)
  }else{
    return <div></div>
  }
}