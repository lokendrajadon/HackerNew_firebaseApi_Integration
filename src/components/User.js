import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGlobalContext } from './Context'
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    Link,
    useParams
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    }
}));
const User = () => {
    const { id } = useParams();
    const classes = useStyles();
    const {storyIds, setStoryIds } = useGlobalContext()
    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
        .then(function (result) {
            setStoryIds(result.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);



    return (
        <main>
            <div className={classes.heroContent}>
                       
                     
                <Container maxWidth="sm">
                    {/* <Buttons /> */}
                </Container>
                
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
           
            <Grid item xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      
                            {storyIds.about}
                      
                    </CardContent>
                    <CardActions>
                        <Typography>
                            User: {storyIds.id} 
                        </Typography>
                        <Typography>
                           {/* Created: {mapTime(storyIds.time)} */}
                        </Typography>
                        <Typography>
                           Karma: {storyIds.karma}
                        </Typography>
                        <Typography>
                            About:
                            <Link to='/'>	submissions</Link>
                            <Link to='/'>		comments</Link>
                            <Link to='/'>		favorites</Link>

                        </Typography>
                    

                    </CardActions>
                </Card> 
            </Grid>
            </Container>
        </main>
    )
}

export default User