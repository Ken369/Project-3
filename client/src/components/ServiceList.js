import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ServiceList({services}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {services.map(service => (
            <React.Fragment>
                <ListItem alignItems="flex-start">
                <ListItemText
                    primary={moment(service.date).calendar()}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {service.topic}
                            </Typography>
                            {" — "}{service.reason}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />  
        </React.Fragment>
        ))}
    </List>
  );
}

