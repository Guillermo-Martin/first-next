import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";

class Index extends Component {
  static async getInitialProps(ctx) {
    // console.log("inside of get initialprops");
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const json = await res.json()
    // return { stars: json.stargazers_count }

    // // make an API call using axios, and save the response into a variable
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    // // get the data from the response
    const { data } = response;
    
    // return an object; the key will be the name of the prop that you'll now have access to
    return { posts: data };
  }

  render() {
    // map through the data and create an li for each post
    const allPosts = this.props.posts.map(post => (
      <li key={post.id}>
        <Link href={`/post?id=${post.id}`}><a>{post.title}</a></Link>
      </li>
    ));

    return (
      <div>
        <h1>Our Index Page</h1>
        {/* render the posts */}
        <ul>
          {allPosts}
        </ul>
      </div>
    );
  }
}

export default Index;


// ===== NOTES =====
// const Index = () => {
//   console.log("Running index component!");

//   return (
//     <div>
//       <h1>Our Index Page</h1>
//     </div>
//   );
// }

// or without curly braces (equivalent to above)
// const Index = () => (
//   <div>
//     <h1>Our Index Page</h1>
//   </div>
// );


// ===== getInitialProps as a class-based component =====
// class Index extends Component {
//   static async getInitialProps(ctx) {
//     console.log("inside of get initialprops");
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Our Index Page</h1>
//       </div>
//     );
//   }
// }

// ===== getInitialProps as a functional component =====
// function Page({ stars }) {
//   return <div>Next stars: {stars}</div>
// }

// Index.getInitialProps = async (ctx) => {
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   // const json = await res.json()
//   // return { stars: json.stargazers_count }
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   const { data } = response;
//   console.log(data[0]);
// }

// export default Page