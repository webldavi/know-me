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
        setPosts(data);
      });
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

  const [countPosts, setCountPosts] = useState(3);
  const [textPosts, setTextPosts] = useState("Ver mais");

  function updateCountPosts() {
    setCountPosts(countPosts == posts.length - 1 ? 3 : posts.length - 1);
    setTextPosts(countPosts == posts.length - 1 ? "Ver mais" : "Ver menos");
  }

  useEffect(() => {
    getPostsData();
  }, []);
  return (
    <section className="blogContainer" id="blog">
      <h1>#Blog</h1>
      <div id="cardsContainer">
        {" "}
        {posts.map((post, index) => {
          return (
            index <= countPosts && (
              <div key={post.id}>
                <img src={post.cover_image} alt="post image"  draggable="false"/>
                <div>
                  <span> {post.title}</span>
                  <p> {post.description}</p>
                  <div>
                    {" "}
                    {post.tag_list.map((tag, index) => {
                      return <div key={index}>#{tag}</div>;
                    })}{" "}
                  </div>
                  <p>Publicado em {postDate(post.published_at)} </p>
                  <a href={post.canonical_url} target="_blank">
                    Saiba Mais
                  </a>
                </div>
              </div>
            )
          );
        })}{" "}
      </div>
      <button
        onClick={updateCountPosts}
        type="button"
        className="text-4xl hover:scale-110"
      >
        {" "}
        {textPosts}
      </button>
    </section>
  );
}
