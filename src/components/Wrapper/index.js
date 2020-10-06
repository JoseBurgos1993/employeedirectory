import React, { Component } from "react";
import Card from "../Card";
import API from "../../utils/API";
import Generate from "../Generate";
import Filter from "../Filter";
import List from "../List";
import "./style.css";

class Wrapper extends Component {
  state = {
    search: "",
    results: [],
    list: []
  };

  componentDidMount(){
    console.log("HERE");
    /*
    API.generateList()
      .then(res => this.setState({results: res.data.results}))
      //.then(res => console.log(this.state.results))
      .catch(err => console.log(err));
    //console.log(res.data.results);
    //this.state.list = API.generateList().results;
    */
  }

  generateList(){
    API.generateList()
      .then(res => this.setState({results: res.data.results}))
      .then(res => console.log(this.state.results[0]))
      .catch(err => console.log(err));
  }

 //<h3> There are {this.state.results[0].gender} results.</h3>
  render(){
    return (
      <div>
        <Generate onClick={() => this.generateList()}/>
        <Filter />
        { this.state.results.length ? (
          <List>
            {this.state.results.map(res => {
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
