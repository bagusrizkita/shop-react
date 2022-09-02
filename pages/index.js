import Card from "../component/Card";
import Layout from "../component/Layout";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

function Index(props) {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            let response = await axios({
                method: 'get', //method
                url: 'https://dummyapi.io/data/v1/post', //url
                headers: { //set header
                    'app-id': '6308619f59914029799ec995'
                }
            })
                .then(function (response) {
                    setPosts(response.data.data)
                });
            // let response = await fetch(`https://dummyapi.io/data/v1/post`, {
            //     method: "get",
            //     headers: {
            //         "Content-Type": "content/type",
            //         "app-id": "6308619f59914029799ec995",
            //     },
            // })
            //     .then(function (response) {
            //         setPosts(response.data)
            //     });
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Layout title={process.env.appName}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
                {
                    posts.map((data) =>
                        <Card image={data.image} url="" title={data.text} body={data.owner.title + ' ' + data.owner.firstName + ' ' + data.owner.lastName} className={'capitalize'}></Card>
                    )
                }
            </div>
        </Layout>
    )
}

export default Index;