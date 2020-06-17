import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { locationAndWeatherContext } from'../contexts/ContextProvider'

const useStyles = makeStyles({
  tableHead: {
    backgroundColor: '#e0e0e0',
  },
});

export const WeatherTable =() => {
  const { locationAndWeatherData } = useContext(locationAndWeatherContext)

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className = {classes.tableHead}>
          <TableRow>
            <TableCell>Location Id.</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Weather</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locationAndWeatherData.weatherData ?
          locationAndWeatherData.weatherData.map((row) => (
            <TableRow key={row.GeoId}>
              <TableCell>{row.GeoId}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{`${row.temperature} `}&#8451;</TableCell>
              <TableCell>{row.weatherDescription}</TableCell>
            </TableRow>
          )): <TableRow></TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
