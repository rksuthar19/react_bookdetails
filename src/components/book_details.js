import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        return this.props.book
            /*.............IF USER HAS CLICKED ON PARTICULAR BOOK RENDER IT'S DETAILS.............*/
            ? <div className="inset">
                <h3>Book Title</h3>
                <p>{this.props.book.title}</p>
                <h4>Details</h4>
                <p>{this.props.book.details}</p>
            </div>
            /*.............................RENDER INITIAL STATUS...................................*/
            : <div className="inset"><p>Please select a book to display details.</p></div>
    }
}

/*.......................BINDING ACTIVE BOOK TO BOOK FROM REDUCER............................*/
function mapStatToProp(state) {
    return {book: state.activeBook};
}

export default connect(mapStatToProp)(BookDetail);