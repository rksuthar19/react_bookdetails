import React, {Component} from "react";
import {connect} from "react-redux";
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return <li key={book.title} onClick={() => this.props.selectBook(book)}
                       className="list-group-item">{book.title}</li>
        });
    }

    render() {
        return <ul className="list-group col-sm-4">{this.renderList()}</ul>
    }
}

/*........................................WHATEVER IT RETURNED WILL SHOW UP AS PROPS.......................................*/
function mapStToProp(state) {
    return {books: state.books}
}

/*......................ANYTHING RETURNED FROM THIS FUNCTION WILL END UP AS PROPS ON THE BOOK LIST CONTAINER................*/
function mapDispatchToProps(dispatch) {
    /*......................WHENEVER SELECT BOOK IS CALLED , THE RESULT SHOULD BE PASSED TO ALL OUR REDUCERS..................*/
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

/*......PROMOTE BOOK LIST FROM A COMPONENT TO A CONTAINER. IT NEEDS TO KNOW ABOUT THIS NEW DISPATCH METHOD SELECT BOOK.......*/
export default connect(mapStToProp, mapDispatchToProps)(BookList);