import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../component/Card";
import Layout from "../../component/Layout";
import LoadingAnimation from "../../component/LoadingAnimation";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

function Index(props) {
    const [posts, setPosts] = useState([]);

    const [hasMore, sethasMore] = useState(true);

    const [page, setpage] = useState(2);

    const getPosts = async () => {
        try {
            let response = await axios({
                method: 'get', //method
                url: 'https://randomuser.me/api/?page=1&results=20&seed=abc', //url
                // headers: { //set header
                //     'app-id': '6308619f59914029799ec995'
                // }
            })
                .then(function (response) {
                    setPosts(response.data.results)
                });
        } catch (e) {
            console.log(e.message)
        }
    }

    const fetchComments = async () => {
        try {
            let response = await axios({
                method: 'get', //method
                url: `https://randomuser.me/api/?page=${page}&results=20&seed=abc`, //url

            })
                .then(function (response) {
                    setPosts(response.data.results)
                });
        } catch (e) {
            console.log(e.message)
        }
        return posts
    }

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setPosts([...posts, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts)
    return (
        <Layout>
            <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<LoadingAnimation />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
                    {posts.map((post) =>
                        <Card key={post.login.uuid} image={post.picture.medium} url="" title={post.name.first} body={post.email} className={'capitalize'}></Card>
                    )}
                </div>
            </InfiniteScroll>
        </Layout >
    )
}

export default Index;