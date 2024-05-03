import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, CardMedia, Container, Stack } from '@mui/material';
import Layout from '@/components/Layout';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        padding: theme.spacing(2),
    },
    image: {
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        objectFit: 'cover',
    },
}));

const AboutUsPage = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Stack direction="row" spacing={2} m={2}>
                <Container>
                    <Paper className={classes.content} elevation={16}>
                        <Typography variant="h6" gutterBottom sx={{ color: "orange" }}>
                            How it started
                        </Typography>
                        <Typography variant="h3" gutterBottom mb={10} sx={{ color: "#817abc" }}>
                            Our dream is  Our dream is Our dream is  global
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#808080' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero at nisi venenatis,
                            in ultricies lorem tristique. Donec aliquet nunc sed est volutpat, a aliquet tortor laoreet.
                            Vestibulum fringilla ligula id massa fermentum, ut hendrerit mauris malesuada.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#808080' }}>
                            Nullam sit amet felis mauris. Fusce vel orci nec diam fermentum fringilla. Proin nec
                            convallis turpis, nec vestibulum mauris. Mauris nec purus sed nulla interdum tempor vel ut
                            nulla. Integer vitae venenatis nisl. Nullam quis arcu non nulla sollicitudin suscipit. Donec
                            ac elit ut justo iaculis interdum. Donec nec dolor enim. Nam consequat nunc eget turpis
                            auctor mollis. Nulla facilisi. Vivamus tincidunt sollicitudin massa, sit amet interdum quam
                            tempor in. Cras non sapien pharetra, elementum risus id, condimentum odio. Nullam sit amet
                            mi ut odio fermentum molestie. Morbi eget risus nec quam efficitur feugiat.
                        </Typography>
                    </Paper>
                </Container>
                <Container>
                    <Paper className={classes.content} elevation={16}>
                        <CardMedia
                            component="img"
                            src="https://source.unsplash.com/random"
                            //src={{data.url}}
                            title="Random Image"
                            alt="Random Image"
                            height="350"
                            width="600"
                            sx={{ borderRadius: "10px" }}
                        />
                        <Grid container spacing={3} xs={12} mt={1}>
                            <Grid item xs={6}>
                                <Typography mr={1} sx={{ fontSize: '2rem', color: '#555555' }}>3.5</Typography>
                                <Typography sx={{ fontSize: '1rem', color: '#808080' }}>Years Experience</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography mr={1} sx={{ fontSize: '2rem', color: '#555555' }}>23</Typography>
                                <Typography sx={{ fontSize: '1rem', color: '#808080' }}>Perfect challenge</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography mr={1} sx={{ fontSize: '2rem', color: '#555555' }}>830+</Typography>
                                <Typography sx={{ fontSize: '1rem', color: '#808080' }}>Position Reserved</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography mr={1} sx={{ fontSize: '2rem', color: '#555555' }}>100k</Typography>
                                <Typography sx={{ fontSize: '1rem', color: '#808080' }}>Subscriber</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Stack>
        </Layout>
    );
};

export default AboutUsPage;
