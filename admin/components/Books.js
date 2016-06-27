"use strict"

import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import {bookList} from '../actions/books.js';

class Books extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(bookList());
    }

    componentDidMount() {
        let { onAddClick } = this.props;
    }


    render() {

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>name</td>
                        <td>description</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.books.map((book, index) => {
                            return <Book key={index} book={book} />
                        })}
                    </tbody>
                </table>
                <div>
                    <form ref='form' className="form">
                        <input type="text" />
                        <input type="text" />
                        <button onClick={this.props.onAddClick}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}

module.exports = (connect(
    state => {
        return { books: state.books }
    },
    dispatch => {
        return {
            dispatch,
            onAddClick: id => dispatch(addBook(book))
        }
    }
)(Books));