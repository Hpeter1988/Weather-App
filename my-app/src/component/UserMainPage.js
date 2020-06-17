import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { WeatherTable } from './WeatherTable';
import { ChangeRadius } from './ChangeRadius';
import { SearchByLocation } from './SearchByLocation';
import { TitleRow } from './TitleRow';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    paper: {
        marginTop: '60px',
        margin: 'auto',
        maxWidth: 600,
        display:'felx',
      },
  });

export const UserMainPage = props => {

const classes = useStyles();    

return(
    <div>
        <TitleRow/>
        <Paper className={classes.paper}>
            <SearchByLocation/>
            <Divider variant="middle" />
            <ChangeRadius/>
            <Typography variant="h6" gutterBottom>
                Nearby weather
            </Typography>
            <WeatherTable/>
        </Paper>
    </div>
 )
}
