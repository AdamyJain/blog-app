import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import "./singlepost.css"
import axios from 'axios'

export default function Singlepost() {
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);

    useEffect(()=>{
        const getPost = async () => {
            const res = axios.get("/posts/" + path);
            console.log(res);
        }
    },[path])
    
    return (
        <>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src="https://marketplace.canva.com/EAEmB3DmXk0/1/0/1600w/canva-bright-gradient-lettering-rainbow-facebook-cover-0Z5QgybLshE.jpg" alt="" className="singlepostImg" />
                    <h1 className="singlepostTitle">
                        Lorem ipsum dolor sit amet
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singlepostInfo">
                        <span className="singlepostAuthor">Author: abc</span>
                        <span className="singlepostTime">1 hour ago</span>
                    </div>
                    <p className="singlepostDesc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta magnam eveniet asperiores minima excepturi blanditiis, tenetur inventore, tempore iure architecto neque non odit dicta voluptates itaque sed voluptas aperiam ea.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, atque nulla. Dicta perspiciatis officiis eum esse rerum maxime optio voluptas tempore. Exercitationem maiores iure veniam, voluptatem similique voluptates dignissimos blanditiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non, impedit minima nisi recusandae quod ut reiciendis eius expedita cum doloribus dolorum est! Accusantium ipsum harum necessitatibus soluta minus cum!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptates beatae voluptate laudantium earum ipsam animi rem dolorem quibusdam aliquam sequi quod, quos consectetur vitae cupiditate? Eligendi laborum in dignissimos.
                    </p>
                </div>
            </div>
        </>
    )
}
