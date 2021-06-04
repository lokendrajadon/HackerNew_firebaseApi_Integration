import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {
    BrowserRouter as Router,
     NavLink
} from "react-router-dom";
import { useGlobalContext } from './Context'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    }
}));
const NewsListing = ({ data, hide, pathname }) => {
    const classes = useStyles();
    const { getStory, setIsLoading,storyIds } = useGlobalContext()
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(data).then(data => setStory(data));
        setIsLoading(false)
    }, [storyIds]);

    return story && story.url ? (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Link href={story.url}>
                            {story.title}
                        </Link>
                    </CardContent>
                    <CardActions>
                        <Typography>
                            Points: {story.score} by:   <NavLink to={"/user/id="+story.by}> {story.by}</NavLink>
                        </Typography>
                           
                        <Typography>
                            {mapTime(story.time)}
                        </Typography>

                        <Typography onClick={() => hide(story.id)}>
                            Hide
                            </Typography>
                        {story.descendants ? <Typography>
                            Comments: {story.descendants}
                        </Typography> : ''}

                    </CardActions>
                </Card>
            </Grid>
        </>
    ) : null;

}

const mapTime = (timestamp) => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
        return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 1) {
        return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 1) {
        return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);

    if (interval > 1) {
        return `${interval} minutes`;
    }

    return `${Math.floor(seconds)} seconds`;
};

export default NewsListing