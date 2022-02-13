import { Grid } from '@material-ui/core'
import React from 'react'
import BodyCard from './BodyCard'

const cardContents = [
    {
        title: "タイトル1",
        subheader: "サブヘッダー1",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル2",
        subheader: "サブヘッダー2",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル3",
        subheader: "サブヘッダー3",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル4",
        subheader: "サブヘッダー4",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
]

function Content() {
    const [post, setPosts] = useState([])

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('http://127.0.0.1:8000/api/posts/')
        .then(res => {
            setPosts(res.data)
        })
    }, [])
    const getCardContent = getObj => {
        const bodyCardContent = {...getObj, ...cardContent};
        return (
            <Grid item xs={12} sm={4} key={getObj.id}>
                <BodyCard {...bodyCardContent} />
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {post.map(contentObj => getCardContent(contentObj))}
        </Grid>
    )
}
export default Content