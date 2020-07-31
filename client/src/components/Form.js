import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function Form() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <UICard className={classes.root}>
      <CardContent style={{flex:1, backgroundColor:'lightgrey'}}>
        <Typography variant="h5" component="h2">
          Digital Logbook
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          5/6/19
        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <form>
  <label padding='1000px'>
    <input type="text" placeholder="mechanic name" name="name" />
    <input type="text" placeholder="Odometer kms" name="name" />
    <Typography variant="body2" component="p">
          Report
          <br />
        </Typography>
    <input type="text" placeholder="Report" name="name"/>
  </label>
</form>
<input type="submit" value="Submit" />
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Save</Button>
      </CardActions>
    </UICard>
  );
}
