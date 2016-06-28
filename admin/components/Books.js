"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Book from './Book';
import {bookList, addBook} from '../actions/books.js';

class Books extends React.Component {
    constructor(props) {
        console.dir(props);
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(bookList());
    }

    render() {
        let { dispatch } = this.props.dispatch;
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
                    <form ref={(c) => this._form = c} >
                        <input type="text" />
                        <input type="text" />
                        <button onClick={ (e) => {
                            e.preventDefault()
                            var content = ReactDOM.findDOMNode(this._form).elements
                            console.log(content)
                            //dispatch(addBook(book))
                        }}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}

module.exports = (connect(
    state => {
        return { books: state.books }
    }
)(Books));