import classes from "./NewPost.module.css";

function NewPost(props) {
  
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={props.onBodyChange} id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
