import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGlobalContext } from './Context'
import NewsListing from './NewsListing';
import axios from 'axios';
import { useInfiniteScroll } from './useInfinite'
import loader from '../Ajux_loader.gif'
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
const News = ({ name }) => {
    const classes = useStyles();
    const { setStoryIds, storyIds, isLoading, setIsLoading } = useGlobalContext()
    const { count } = useInfiniteScroll()
    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/${name}.json`)
            .then(function (result) {
                setStoryIds(result.data)
                setIsLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const hide = (id) => {
        const newStoryIds = storyIds.filter((ids) => { return ids !== id })
        setStoryIds(newStoryIds)
    }

    if (isLoading) {
        return (
            <Container maxWidth="sm">
                <img src={loader} />
            </Container>
        )
    }

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {
                        storyIds ? storyIds.slice(0, count).map((id, index) => {
                            return (
                                <NewsListing key={index} data={id} pathname={name} hide={hide} />
                            )
                        }) : ''
                    }
                </Grid>
            </Container>
        </main>
    )
}

export default News