import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Card() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <UICard className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          1EWH{bull}198
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          DMC Delorean
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Doc Brown's Car
        </Typography>
        <Typography variant="body2" component="p">
          Car last serviced 6 months ago
        </Typography>
        <Button variant="contained" color="#ffff00" className={classes.margin}>
          Theme Provider
        </Button>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </UICard>
  );
}
