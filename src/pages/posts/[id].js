import { Typography, Container, Paper, Card, CardMedia } from '@mui/material';
import { useRouter } from "next/router"
import Layout from '../../components/Layout';
import isAuth from "@/components/isAuth";

function postDetails({ postData }) {

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <Container maxWidth="md" sx={{ marginTop: "50px", marginBottom: "100px" }}>
                <Typography variant="h4" component="h1" gutterBottom style={{ color: '#817abc' }}>
                    {postData.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Date: January 1, 2024
                </Typography>
                <Paper elevation={3} style={{ padding: '10px', marginTop: '20px' }}>
                    <CardMedia
                        component="img"
                        src="https://source.unsplash.com/random"
                        //src={{data.url}}
                        title="Random Image"
                        alt="Random Image"
                        height="400"
                    />
                </Paper>
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros id augue cursus scelerisque. Integer nec sem vel lorem sodales molestie a sit amet ligula. Maecenas tincidunt lorem vel turpis euismod scelerisque. Sed malesuada commodo tortor, et sodales velit vestibulum et. Nullam vehicula velit et odio placerat, quis mattis ipsum rutrum. Nullam tincidunt convallis urna, vel vulputate purus lacinia in. Nulla facilisi. Donec sed arcu mauris. Proin at bibendum elit. Nulla facilisi. Integer rhoncus est nec ex efficitur, quis luctus nisi pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Fusce dictum odio in lectus ultricies, at tempus ex efficitur. Phasellus non aliquam ipsum. Aliquam non fringilla lorem. Phasellus ultrices elementum libero, id congue justo scelerisque vel. Donec blandit magna id risus malesuada, id luctus enim dapibus. In interdum metus ac tortor eleifend, quis dictum orci bibendum. Sed pellentesque risus nec elit congue, nec posuere mi tincidunt. In hac habitasse platea dictumst. Integer nec quam in nulla dictum convallis. Vivamus tempus, lorem nec posuere luctus, est dui fringilla elit, ut iaculis lectus nulla eget quam. Morbi eleifend felis in elit facilisis varius.
                    </Typography>
                </Paper>
            </Container>
        </Layout>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map((post) => {
        return {
            params: {
                id: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: true // or 'blocking' if you prefer server-side rendering
    };
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()

    return {
        props: {
            postData
        },
        //revalidate: 1 // In seconds. Regenerate static page after each second
    };
}

export default isAuth(postDetails);