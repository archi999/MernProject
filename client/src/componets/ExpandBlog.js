import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { colors } from '@mui/material';

const ExpandBlog = ({ title, desc, img, user, isUser, id, comment, date }) => {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/myBlogs/${id}`);
    };
    const deleteRequest = async () => {

        const res = await axios
            .delete(`http://localhost:8080/api/blogs/${id}`)
            .catch((err) => console.log(err));
        console.log(res);
        //const data = await res.data;

        //return data;
    };
    const handleDelete = () => {
        deleteRequest()
            .then(() => navigate("/"))
            .then(() => navigate("/blogs"));
    };
    return (
        <div>


            <div className="card-body">
                <img src={img} className="img-fluid img-thumbnail" style={{ height: "30rem" }} alt="..." />
                <p className="card-text" >{desc}</p>
                <p className="card-text">{comment}</p>
                {isUser && (<><button style={{backgroundColor:"white",color:"red", paddingRight:"5px",border:"2px pink",borderStyle:"hidden"}} className="mx-3 my-3" onClick={handleDelete}><b><span style={{color:"black"}}><DeleteForeverIcon /></span>Delete</b></button></>)}
                {isUser && (<><button className="mx-3 my-3" style={{backgroundColor:"white",color:"red", paddingRight:"5px",border:"2px pink",borderStyle:"hidden"}} onClick={handleEdit}><i className="bi bi-pencil-square" style={{color:"black",padding:"auto"}} ></i><b>Edit</b></button></>)}
                <p className="card-text text-end"><small className="text-body-secondary"><em>{date}</em></small></p>

            </div>

        </div>
    )
}

export default ExpandBlog
