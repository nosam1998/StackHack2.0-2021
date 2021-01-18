import React from "react";
import SubmitForm from "../components/Form";
import Navs from "../components/Nav";
import Jumbo from "../components/Jumbotron";

function Home() {
  return (
    <div>
      <Navs />
      <Jumbo />
      <SubmitForm />
    </div>
  );
}

export default Home;
