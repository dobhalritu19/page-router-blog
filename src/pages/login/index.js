import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout';
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Divider } from '@mui/material';
import styles from "@/styles/Login.module.css";
import Router from 'next/router';
import { setSession } from "../../utils/session"

function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setSession("true")
    Router.push('/');
  }

  return (
    <Layout>
      <Container maxWidth="sm" className={styles.loginContainer}>
        <Typography variant="h3" component="h2" gutterBottom style={{ marginLeft: '1rem', fontSize: '2rem', color: '#817abc', textAlign: 'center' }} mt={4} mb={2}>
          Login Page
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} sx={{
          width: '100%',
          maxWidth: 360
        }}>
          <label className={styles.label}>Email</label>
          <input type="email" {...register("email", { required: true })} className={styles.input}></input>
          {errors.email && <p>Email is required and must be valid</p>}
          <label className={styles.label}>Password</label>
          <input type="password"  {...register("password")} className={styles.input}></input>
          <button type="submit" className={styles.loginbutton}> Submit</button>
        </form>
      </Container>
    </Layout>
  )

}
export default LoginForm;