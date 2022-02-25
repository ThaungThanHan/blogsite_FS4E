import "./BlogPreview.scss";
import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BlogCard from "./BlogCard";

const BlogPreview = () => {
    const categories = ["Travel","Science","History","Technology"];
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [authorName,setAuthorName] = useState("");

    const months = ["January","Feburary","March","April","May","June","July","August","September","Ocotober","November","December"];

    const date = `${selectedDate.getDate()}/${months[selectedDate.getMonth()]}/${selectedDate.getFullYear()}`
    //dd/mm/yyyy
    return(
        <div className="container">
        <div className="preview">
            <div className="preview--forms">
                <div className="preview--forms--input">       
                    <label>Title</label>
                    <input onChange={(e)=>setTitle(e.target.value)} placeholder="Enter title" />
                </div>
                <div className="preview--forms--input">       
                    <label>Categories</label>
                    <select onChange={(e)=>setCategory(e.target.value)}>
                        <option value="">Please select category</option>
                        {categories.map((cate,index)=>(
                            <option key={index} value={cate}>{cate}</option>
                        ))}
                    </select>
                </div>
                <div className="preview--forms--input">       
                    <label>Date</label>
                    <DatePicker selected={selectedDate} onChange={(date)=>setSelectedDate(date)} />
                </div>
                <div className="preview--forms--input">       
                    <label>Author</label>
                    <input onChange={(e)=>setAuthorName(e.target.value)} placeholder="Enter author name" />
                </div>
            </div>
            <div className="preview--blogcard">
                <BlogCard title={title} image="how" category={category} date={date} author={authorName}/>
            </div>
        </div>
        </div>
    )
}

export default BlogPreview;