import React from "react";
import "./style.css";

function Card({person}) {
  const name = person.name.title + ". " + person.name.first + " " + person.name.last;
  const age = person.dob.age;
  const gender = person.gender;
  const phone = person.phone;
  const picture = person.picture.large;
  return (
    <div class="myrow">
      <div class="left">
        <img src={picture} alt="Someone's face"></img>
      </div>
      <ul>
        <li><span class="bold">Name: </span>{name}</li>
        <li><span class="bold">Gender: </span>{gender}</li>
        <li><span class="bold">Age: </span>{age}</li>
        <li><span class="bold">Phone: </span>{phone}</li>
      </ul>
    </div>
  );
}

export default Card;
