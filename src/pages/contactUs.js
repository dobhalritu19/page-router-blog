import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, CardMedia, Container, Stack } from '@mui/material';
import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form'
import styles from "@/styles/Login.module.css";

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
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        Router.push('/');
    }

    return (
        <Layout>
            <Stack direction="row" spacing={2} m={2} sx={{ minHeight: '500px', background: "#fff", borderRadius: "4px" }} p={6}>
                <Container>
                    <Typography variant="h3" gutterBottom mb={6} sx={{ color: "#817abc" }}>
                        Contact US
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#808080' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero at nisi venenatis,
                        in ultricies lorem tristique. Donec aliquet nunc sed est volutpat, a aliquet tortor laoreet.
                        Vestibulum fringilla ligula id massa fermentum, ut hendrerit mauris malesuada.
                    </Typography>
                </Container>
                <Container>
                    <form onSubmit={handleSubmit(onSubmit)} sx={{
                        width: '100%',
                        maxWidth: 360
                    }}>
                        <label className={styles.label}>First Name</label>
                        <input type="fname" {...register("fname", { required: true })} className={styles.input}></input>
                        <label className={styles.label}>Last Name</label>
                        <input type="lname" {...register("lname", { required: true })} className={styles.input}></input>
                        <label className={styles.label}>Email</label>
                        <input type="email" {...register("email", { required: true })} className={styles.input}></input>
                        {errors.email && <p>Email is required and must be valid</p>}
                        <button type="submit" className={styles.loginbutton}> Submit</button>
                    </form>
                </Container>
            </Stack>
        </Layout>
    );
};

export default AboutUsPage;
