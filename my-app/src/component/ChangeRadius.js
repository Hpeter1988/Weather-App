import React, { useContext, useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { locationAndWeatherContext } from'../contexts/ContextProvider'

const useStyles = makeStyles(() => ({
  root: {
    width: 410,
    marginBottom: '10px',
    marginTop: '10px'
  },
  input: {
    marginRight: '20px',
  },
}));

export const ChangeRadius = () => {
  const classes = useStyles();
  const { setSearchRadius } = useContext(locationAndWeatherContext)
  const [ radius, setRadius ] = useState([]);

  const handleOnChangeRadius = event => setRadius(event.target.value);

  const setRadiusForCotext = () =>{
    setSearchRadius(radius)
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.input}
        id="standard-basic"
        type="number"
        placeholder='Radius'
        onChange = { handleOnChangeRadius }
      />
      <Button variant="contained" onClick = { setRadiusForCotext }>
        SET
      </Button>
    </div>
  );
};
