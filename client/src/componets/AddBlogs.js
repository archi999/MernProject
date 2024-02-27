import {  Button} from "@mui/material";
import axios from "axios";
//mport TextareaAutosize from '@mui/material/TextareaAutosize';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddBlogs = () => {
  // const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
    comments:""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    console.log('df')
    const res = await axios
      .post("http://localhost:8080/api/blogs/add", {
        title: inputs.title,
        desc: inputs.description,
        img: inputs.imageURL,
        comment: inputs.comments,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs"));
  };
  return (
    <div>
      <form>
        <div className="card text-center mx-auto p-2 my-3" style={{width: "30rem"}}>
          <h1 className="text-center font-weight-bold" >
            Post Your Blog
          </h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name="title" onChange={handleChange}
              value={inputs.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleChange} value={inputs.description} name="description"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Image URL</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={inputs.imageURL} name="imageURL" onChange={handleChange}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={inputs.comments} name="comments" onChange={handleChange}></textarea>
          </div>
         <button className='mx-1 my-2'   type="submit" 
          style={{ borderRadius: '2px', color: 'white', width:"3", backgroundColor:"ActiveBorder"}}
          onClick ={handleSubmit}>
           <b>Submit</b> 
          </button>
          </div>
     

      </form>
    </div>
  );
};

export default AddBlogs;