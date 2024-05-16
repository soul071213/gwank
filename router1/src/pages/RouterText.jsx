import { Outlet, Link } from "react-router-dom";
export default function RouterTest() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
           <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}


<Home.js>

const Home = () => {

  return <h1>Home</h1>;

};

export default Home;



<Blogs.js>

const Blogs = () => {

  return <h1>Blog Articles</h1>;

};



export default Blogs;



<Contact.js>

const Contact = () => {

  return <h1>Contact Me</h1>;

};



export default Contact;



<NoPage.js>

const NoPage = () => {

  return <h1>404</h1>;

};



export default NoPage;

