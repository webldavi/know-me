import { useEffect, useState } from "react";
import "./Blog.css";
export default function Welcome() {
    const [posts, setPosts] = useState([
        {
            id: 123,
            cover_image: "",
            title: "",
            description: "",
            tag_list: [],
            canonical_url: "",
            published_at: "",
        },
    ]);

    function getPostsData() {
        fetch("https://dev.to/api/articles?username=webdavi")
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                setPosts(data);
            });
    }

    function redirectUser(url: string) {
        window.open(url, "_blank");
    }
    function postDate(date: string) {
        const dateObj = new Date(Date.parse(date));

        let day: string | number = dateObj.getDate();
        let month: string | number = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();

        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;

        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }
    useEffect(() => {
        getPostsData();
    }, []);
    return (
        <section className="blogContainer" id="blog">
            <h1>#Blog</h1>
            <div id="cardsContainer">
                {posts.map((post) => {
                    return (
                        <div key={post.id} id="blogCard">
                            <img src={post.cover_image} alt="post image" />
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.description}</p>
                                <div>
                                    {" "}
                                    {post.tag_list.map((tag, index) => {
                                        return <div key={index}>#{tag}</div>;
                                    })}{" "}
                                </div>
                                <p>
                                    Publicado em {postDate(post.published_at)}
                                </p>
                                <button
                                    onClick={() =>
                                        redirectUser(post.canonical_url)
                                    }
                                >
                                    Saiba Mais
                                </button>
                            </div>
                        </div>
                    );
                })}{" "}
            </div>
        </section>
    );
}
