import axios from "axios";

const Post = ({ id, comments }) => {
  const allComments = comments.map(comment => (
    <Comment {...comment} key={comment.id}/>
  ));

  return (
    <div>
      <h1>Comments for post #{id}</h1>
      {allComments}
    </div>
    
  );
}

const Comment = ({email, body}) => {
   return (
     <div>
       <h5>{email}</h5>
       <p>{body}</p>
     </div>
   )
}

// ===== getting the id from the query string using getInitialProps =====
// getInitialProps receives and object (it can be called anything)
// what's standard, though, is to grab the pieces you need
Post.getInitialProps = async ({ query }) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
  const { data } = response;

  // we now have access to "id" and comments inside of props
  return {id: query.id, comments: data};
}

export default Post;


// ===== retrieving ID using withRouter =====
// import { withRouter } from "next/router";

// const Post = (props) => {
//   return (
//     <h1>You're looking at post #{props.router.query.id}</h1>
//   );
// }

// export default withRouter(Post);