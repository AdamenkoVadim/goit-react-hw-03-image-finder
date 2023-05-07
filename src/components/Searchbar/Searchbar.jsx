import React from "react";
import css from "components/Searchbar/Searchbar.module.css"
/* import { AiOutlineSearch } from 'react-icons/ai'; */
export class Searchbar extends React.Component{
  state = {
    searchName:'',
  }

  hendleChangeName = (e) => {
    this.setState({searchName: e.currentTarget.value.toLowerCase()})
  }

  hendleSubmit = (e) => {
    e.preventDefault();
    this.props.submitSearchbar(this.state.searchName);
    this.setState({searchName: ''})
  }
  render() {
    return (
        <header className = {css.Searchbar} >
          <form 
            className={css.SearchForm} 
            noSubmit = {this.hendleSubmit}
          >
            
            <button type="submit" className={css.SearchForm__button}>
            <span class="button-label">Search</span>
            </button>

          <input
            className={css.SearchForm__input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange = {this.hendleChangeName}
          />
          </form>
        </header>
    )}
}