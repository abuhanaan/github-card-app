import { useState } from "react";
import "./App.css";
import testData from "./testData";
import Form from "./components/Form";
import CardList from "./components/CardList";

function App({ title }) {
  const [profiles, setProfiles] = useState(testData);

  const addNewProfile = (profileData) => {
    console.log("App", profileData);
    setProfiles((profiles) => [...profiles, profileData]);
  };
  return (
    <div>
      <div className="header">{title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
