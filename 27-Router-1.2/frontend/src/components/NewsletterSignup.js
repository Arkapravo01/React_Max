import { useEffect,useRef } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;


const prevState = useRef();

useEffect(() => {
  if (
    prevState.current !== "idle" &&
    state === "idle" &&
    data?.message
  ) {
    window.alert(data.message);
  }

  prevState.current = state;
}, [state, data]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
