import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
//make sure action created flows through all reducers
import { bindActionCreators } from "redux";

class BookList extends Component {
  render() {
    //must create a map function here to return the following:
    let books = this.props.books.map((e) => {
      return (
        <li
          key={e.id}
          onClick={() => this.props.selectBook(e)}
          className="list-group-item">
          {e.title}
        </li>
      );
    });

    return (
      <ul className="list-group col-sm-4">
        {books}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.books);
  //what is returned will show up as props inside of BookList
  //this gives you access to books in props.. (books would be good for mapping)
  return {
    books: state.books
  };
}

//anything returned from this function will end up as props on
//BookList Container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
