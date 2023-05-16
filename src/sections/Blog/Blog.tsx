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
        },
    ]);

    function getPostsData() {
        fetch("https://dev.to/api/articles?username=vuedavi")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }
    function redirectUser(url: string) {
        window.open(url, "_blank");
    }
    useEffect(() => {
        getPostsData();
    }, []);
    return (
        <section className="blogContainer">
            <h1>#Blog</h1>
            <div>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <img src={post.cover_image} alt="post image" />
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.description}</p>
                                <div>
                                    {post.tag_list.map((tag) => {
                                        return <div>#{tag}</div>;
                                    })}
                                </div>
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
                })}
            </div>
        </section>
    );
}
