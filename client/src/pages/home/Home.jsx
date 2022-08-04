import Posts from "../../components/posts/Posts"
import Header from "../../components/header/Header"
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}
