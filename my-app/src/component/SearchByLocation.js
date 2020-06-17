import React, { useContext, useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { locationAndWeatherContext } from'../contexts/ContextProvider'


const useStyles = makeStyles(() => ({
  root: {
    width: 600,
    marginBottom: '10px'
  },
  input: {
    marginRight: '20px'
  },
  button: {
    marginLeft: '20px'
  },
}));

export const SearchByLocation = () => {
  const classes = useStyles();
  const { setLocationName } = useContext(locationAndWeatherContext)
  const [ locationName, setStateOfLocation ] = useState([]);

  const handleOnChangeLocationName = event => setStateOfLocation(event.target.value);

  const setLocationForContext = () =>{
    setLocationName(locationName)
  }

  const resetLocation = () =>{
    setLocationName()
    setStateOfLocation()
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.input}
        id="standard-basic"
        type="text"
        placeholder='location'
        onChange = { handleOnChangeLocationName }
      />
      <Button variant="contained" onClick = { setLocationForContext }>
        SEARCH
      </Button>
      <Button className={classes.button} variant="contained" onClick = { resetLocation }>
        RESET LOCATION
      </Button>
    </div>
  );
};