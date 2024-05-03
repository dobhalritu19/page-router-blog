import isAuth from "@/components/isAuth";
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Divider } from '@mui/material';
import Layout from '@/components/Layout';
import { useRouter } from "next/router"

const Posts = ({ posts }) => {

    const router = useRouter()
    return (
        <Layout>
            <Container maxWidth="lg" sx={{ minHeight: '500px' }}>
                <Typography variant="h3" component="h2" gutterBottom style={{ marginLeft: '1rem', fontSize: '2rem', color: '#817abc', textAlign: 'center' }} mt={4} mb={2}>
                    Welcome to Our Blog
                </Typography>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    {posts.slice(0, 9).map((data) => (
                        <Grid item xs={3} p={1} m={1} onClick={() => router.push(`/posts/${data.id}`)} sx={{
                            backgroundColor: "#fff"
                        }} >
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://source.unsplash.com/random"
                                        //image={data.url}
                                        alt="Random Image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: "center" }}>
                                            {data.title.substring(0, 30)}
                                        </Typography>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography mr={1} style={{ fontSize: '.9rem' }}>Fri Jun 19 2020</Typography>
                                            <Divider orientation="vertical" flexItem />
                                            <Typography ml={1} style={{ fontSize: '.9rem' }}>Comments (0)</Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container >
        </Layout>
    )
};


// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    posts.slice(0, 3)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time

    // console.log("posts", posts)
    return {
        props: {
            posts,
        },
    }
}

export default isAuth(Posts);

// import { useState, useEffect } from "react"
// import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Divider } from '@mui/material';
// import Layout from '../../components/Layout';
// import { useRouter } from "next/router"

// export default function posts({ posts }) {
//     const router = useRouter()
//     return (
//         <Layout>
//             <Container maxWidth="lg" sx={{ minHeight: '500px' }}>
//                 <Typography variant="h3" component="h2" gutterBottom style={{ marginLeft: '1rem', fontSize: '2rem', color: '#817abc', textAlign: 'center' }} mt={4} mb={2}>
//                     Welcome to Our Blog
//                 </Typography>
//                 <Grid container
//                     direction="row"
//                     justifyContent="center"
//                     alignItems="center"
//                     spacing={1}>
//                     {posts.slice(0, 9).map((data) => (
//                         <Grid item xs={3} p={1} m={1} onClick={() => router.push(`/posts/${data.id}`)} sx={{
//                             backgroundColor: "#fff"
//                         }} >
//                             <Card>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="140"
//                                         image="https://source.unsplash.com/random"
//                                         //image={data.url}
//                                         alt="Random Image"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: "center" }}>
//                                             {data.title.substring(0, 30)}
//                                         </Typography>
//                                         <div style={{ display: 'flex', alignItems: 'center' }}>
//                                             <Typography mr={1} style={{ fontSize: '.9rem' }}>Fri Jun 19 2020</Typography>
//                                             <Divider orientation="vertical" flexItem />
//                                             <Typography ml={1} style={{ fontSize: '.9rem' }}>Comments (0)</Typography>
//                                         </div>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container >
//         </Layout>
//     )
// }


// // This function gets called at build time
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()
//     posts.slice(0, 3)
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time

//     // console.log("posts", posts)
//     return {
//         props: {
//             posts,
//         },
//     }
// }