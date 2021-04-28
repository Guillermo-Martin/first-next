import { withRouter } from "next/router";

const Post = (props) => {
  return (
    <h1>You're looking at post #{props.router.query.id}</h1>
  );
}

// ===== getting the id from the query string using getInitialProps =====
// getInitialProps receives and object (it can be called anything)
// what's standard, though, is to grab the pieces you need
// Post.getInitialProps = async ({ query }) => {
//   // we now have access to "id" inside of props
//   return {id: query.id};
// }


export default withRouter(Post);