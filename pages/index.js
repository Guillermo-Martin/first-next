import React, { Component } from "react";

class Index extends Component {
  static async getInitialProps(ctx) {
    console.log("inside of get initialprops");
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return (
      <div>
        <h1>Our Index Page</h1>
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