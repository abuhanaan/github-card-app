import React from "react";
import Card from "./Card";

const CardList = ({ profiles }) => {
  // console.log({ profiles });
  return (
    <div>
      {profiles.map((profile, index) => (
        <Card key={index} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
