"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Book from './Book';
import {bookList, removeBook} from '../actions/books.js';
import AddBookForm from './AddBookForm';


class Books extends React.Component {
    constructor(props) {
        console.dir(props);
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(bookList());
    }

    render() {
        return (
            <div>
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
                            let remove = () => {
                                this.props.dispatch(removeBook(book._id));
                            }

                            return <Book key={index} book={book} remove={remove} />
                        })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <AddBookForm />
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