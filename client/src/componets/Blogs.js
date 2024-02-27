import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8080/api/blogs")
      .catch((err) => console.log(err)); 
    const data = await res.data;
    //console.log(data)
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, [blogs]);
const memosample=(m)=>{

  for(let i=0;i<100;i++){
    m++;
    console.log(m)
  }
}
  //console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user}
            title={blog.title}
            desc={blog.desc}
            img={blog.img}
            comment={blog.comment}
            user={blog.user}
            date={new Date(blog.date).toLocaleDateString()}
            
          />
         
    
        ))}
        
    </div>
  );
};

export default Blogs;