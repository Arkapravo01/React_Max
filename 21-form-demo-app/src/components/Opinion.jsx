import { use, useActionState, useOptimistic } from "react";
import { OpinionsContext } from "../store/opinions-context.jsx";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);

  const [optimisticVotes, setVotesOptimistically] = useOptimistic(
    votes,
    (prevVotes, mode) => (mode === "up" ? prevVotes + 1 : prevVotes - 1),
  );

  async function upvoteAction() {
    setVotesOptimistically("up");
    await upvoteOpinion(id);
  }

  async function downvoteAction() {
    setVotesOptimistically("down");
    await downvoteOpinion(id);
  }

  const [upvoteFormState, upvoteFormAction, upvotePending] =
    useActionState(upvoteAction);

  const [downvoteFormState, downvoteFormAction, downvotePending] =
    useActionState(downvoteAction);

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>

      <p>{body}</p>

      <form className="votes">
        <button
          formAction={upvoteFormAction}
          disabled={upvotePending || downvotePending}
        >
          ▲
        </button>

        <span>{optimisticVotes}</span>

        <button
          formAction={downvoteFormAction}
          disabled={upvotePending || downvotePending}
        >
          ▼
        </button>
      </form>
    </article>
  );
}
