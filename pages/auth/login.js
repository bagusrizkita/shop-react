import Layout from "../../component/Layout";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

function Login(props) {
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
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Layout>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
                <p className="text-2xl">Login Page</p>
            </div>
        </Layout>
    )
}

export default Login;