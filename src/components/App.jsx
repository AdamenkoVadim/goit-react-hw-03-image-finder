import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar";

export  class App extends Component{
  submitSearchbar = searchName => {
    console.log(searchName);
  }
  render (){
  return (
    <>
     <Searchbar onSubmitForm = {this.submitSearchbar}/>
    </>
  )};
};
