import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = (props) => {
  const router = useRouter();
  const addMeetupHandler = async (meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data.message + "test");

    router.push("/meetups");
  };

  return (
    <React.Fragment>
      <Head>
        <title> Add a new meetup </title>
        <meta
          name="description"
          content="add new meetup to your fav list!"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </React.Fragment>
  );
};

export default NewMeetUp;
