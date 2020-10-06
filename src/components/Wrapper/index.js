import React, { Component } from "react";
import Card from "../Card";
import API from "../../utils/API";
import Generate from "../Generate";
import Filter from "../Filter";
import List from "../List";
import Sort from "../Sort";
import "./style.css";

class Wrapper extends Component {
  state = {
    search: "",
    results: [],
    list: []
  };

  componentDidMount(){
    console.log("mounted");
  };

  generateList(){
    API.generateList()
      .then(res => this.setState({results: res.data.results}))
      .then(res => console.log(this.state.results[0]))
      .then(res => this.setState({list: this.state.results}))
      .catch(err => console.log(err));
  };

  filterList(gender){
    if(this.state.results){
      this.setState({list: this.state.results.filter(person => person.gender == gender)});
    }
  };

  sortList(){ // Sorts by age
    if(this.state.results){
      let temp = [];
      temp[0] = this.state.results[0];
      for(let i = 1; i < 20; i++){
        for(let j = 0; j < temp.length; j++){
          console.log("Is this infinite?")
          if(this.state.results[i].dob.age < temp[j].dob.age){
            temp.splice(j,0,this.state.results[i]);
            break;
          }
          if(j == temp.length - 1){
            temp.push(this.state.results[[i]]);
            break;
          }
        }
      }
      console.log("temp",temp);
      this.setState({list: temp});
    }
  };

  render(){
    return (
      <div>
        <Generate onClick={() => this.generateList()}/>
        <Filter type="Male" onClick={() => this.filterList("male")}/>
        <Filter type="Female" onClick={() => this.filterList("female")}/>
        <Sort onClick={() => this.sortList()}/>
        { this.state.list.length ? (
          <List>
            {this.state.list.map(res => {
              return(
                <Card key={res.phone} person={res}/>
              );
            })}
          </List>
        ) : (
          <h3> No results to display</h3>
        )}
      </div>
    );
  }
}
export default Wrapper;
