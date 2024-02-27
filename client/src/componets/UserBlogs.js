/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "./Blogs";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Blog from './Blog'


const UserBlogs = () => {

  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  //console.log(id)
  const navigate=useNavigate()

  const sendRequest = async () => {
    try{ const res = await axios
      .get(`http://localhost:8080/api/blogs/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
   // console.log(data)
    return data;
  }
  catch(e)
  {console.log(e)}
   
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, [user]);

  // const handleDelete = (blogId) => {
  //   axios.delete(`http://localhost:8080/api/blogs/${blogId}`).then(() => {
  //     sendRequest().then((data) => setUser(data.user))
  //   });
  // };

  return (
    <div className="container">
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <div key={index} >
            <Blog
              id={blog._id}
              isUser={true}
              title={blog.title}
              desc={blog.desc}
              img={blog.img}
              user={user.name}
              date={blog.date}
              comment={blog.comment}
            />
            {/* <img
           
              src={blog.image}
              alt={blog.title}
            /> */}
           {/* // <button onClick={handleDelete(blog._id)}>{DeleteForeverIcon} </button> */}
          </div>
        ))}
    </div>
  );
};

export default UserBlogs;
