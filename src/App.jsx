import { useEffect, useState } from "react";
import "./App.css";

function App () {
    const [blogs, setBlogs] = useState([]);

    useEffect (() => {
      fetch ("http://localhost:1337/api/blogs?populate=*")
      .then ((res) => res.json ())
      .then ((data) => {
         console.log("Strapi Blogs", data.data);
         setBlogs (data.data);
         console.log (
          `http://localhost:1337/${data.data[0].attributes.Image.data[0].attributes.url}`);
      });
     
    },[]);
    


  return ( 
  <> 
<section className="max-w-[600px] p-20 mx-auto">
  {blogs.map((blog) =>(
    // eslint-disable-next-line react/jsx-key
    <div className="shadow mb-5 p-10">
    <h2 className="text-3xl"> {blog.attributes.Title} </h2>
    <p>{blog.attributes.Description}</p>
    <img
    src={`http://localhost:1337/${blog.attributes.Image.data[0].attributes.url}`} alt=""
/>    
    </div>

  ))}
</section>

  </>
);
} 
export default App;