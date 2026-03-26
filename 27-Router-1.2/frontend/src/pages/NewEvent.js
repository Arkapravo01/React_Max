import React from "react";
import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";

const NewEventPage = () => {
  function submitHandler(event) {
    event.preventDefault();
  }

  return <EventForm method="post" />;
};

export default NewEventPage;

