const Post = (props) => {
  return (
    <h1>You're looking at post #{props.id}</h1>
  );
}

// getInitialProps receives and object (it can be called anything)
// what's standard, though, is to grab the pieces you need
Post.getInitialProps = async ({ query }) => {
  // we now have access to "id" inside of props
  return {id: query.id};
}


export default Post;