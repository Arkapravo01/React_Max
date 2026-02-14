import { createContext, useEffect, useState } from "react";

export const OpinionsContext = createContext({
  opinions: [],
  addOpinion: async (opinion) => {},
  upvoteOpinion: async (id) => {},
  downvoteOpinion: async (id) => {},
});

export function OpinionsContextProvider({ children }) {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    async function loadOpinions() {
      const response = await fetch("http://localhost:3000/opinions");

      if (!response.ok) return;

      const data = await response.json();
      setOpinions(data);
    }

    loadOpinions();
  }, []);

  async function addOpinion(enteredOpinionData) {
    const response = await fetch("http://localhost:3000/opinions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredOpinionData),
    });

    if (!response.ok) return;

    const savedOpinion = await response.json();

    setOpinions((prevOpinions) => [
      savedOpinion,
      ...prevOpinions,
    ]);
  }

  async function upvoteOpinion(id) {
    const response = await fetch(
      `http://localhost:3000/opinions/${id}/upvote`,
      { method: "POST" }
    );

    if (!response.ok) return;

    setOpinions((prevOpinions) =>
      prevOpinions.map((opinion) =>
        opinion.id === id
          ? { ...opinion, votes: opinion.votes + 1 }
          : opinion
      )
    );
  }

  async function downvoteOpinion(id) {
    const response = await fetch(
      `http://localhost:3000/opinions/${id}/downvote`,
      { method: "POST" }
    );

    if (!response.ok) return;

    setOpinions((prevOpinions) =>
      prevOpinions.map((opinion) =>
        opinion.id === id
          ? { ...opinion, votes: opinion.votes - 1 }
          : opinion
      )
    );
  }

  const contextValue = {
    opinions,
    addOpinion,
    upvoteOpinion,
    downvoteOpinion,
  };

  return (
    <OpinionsContext.Provider value={contextValue}>
      {children}
    </OpinionsContext.Provider>
  );
}
