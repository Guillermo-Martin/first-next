import Link from "next/link";

const Index = () => {
  console.log("Running index component!");

  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
      <h1>Our Index Page</h1>
    </div>
  );
}

// or without curly braces (equivalent to above)
// const Index = () => (
//   <div>
//     <h1>Our Index Page</h1>
//   </div>
// );

export default Index;