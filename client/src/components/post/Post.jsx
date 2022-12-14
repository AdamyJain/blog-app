import { Link } from "react-router-dom"
import "./post.css"

export default function Post({ post }) {
    return (
        <div className="post">
            {post.photo && (
                <img src={post.photo}
                    alt="" className="postImg" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat">{post.categories}</span>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    )
}
