
import React,{useState} from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from 'react-router-dom'
import ExpandBlog from "./ExpandBlog";


const Blogs = ({ title, desc, img, user, isUser, id,comment,date}) => {
//  const classes = useStyles();
let shotdesc=desc.slice(0,400)
const[expand,setExpand]=useState(false)
let p="Read more...";
//console.log(isUser);
  return (
    <div>

<div className="card text-center mx-auto p-2 my-3" style={{width: "50rem",backgroundColor:expand?"lightblue":"lightgray"}} >

  <div className="card-body">
    <h3 className="card-title">{title}</h3>
<button className="btn btn-link" onClick={()=>setExpand(!expand)} > {expand?"Minimize":"Read more..."}</button>
{expand ? <ExpandBlog title={title} desc={desc} img={img}  user={user} isUser={isUser} id={id} comment={comment} date={date}/> :null}
  </div>
</div>

    </div>
  );
};

export default Blogs;