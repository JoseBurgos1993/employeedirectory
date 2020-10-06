import React from "react";
import "./style.css";
/*

  <div class="card">
    <img class="card-img-top" src={props.results[0].picture.medium} alt="Card cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
*/
function Card({person}) {
  const name = person.name.title + " " + person.name.first + " " + person.name.last;
  const age = person.dob.age;
  const gender = person.gender;
  const phone = person.phone;
  const picture = person.picture.medium;
  return (
    <div>
      <div class="col-md-6">
        <img src={picture} alt="Someone's face"></img>
      </div>
      <div class="col-md-6">
        <ul>
          <li>Name: {name}</li>
          <li>Gender: {gender}</li>
          <li>Age: {age}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
