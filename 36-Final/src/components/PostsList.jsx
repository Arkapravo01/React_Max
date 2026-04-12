import NewPost from "./Newpost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximillian" body="React.js is awesome!" />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
