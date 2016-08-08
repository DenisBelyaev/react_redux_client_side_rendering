import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {addBook} from '../actions/books.js';

const submit = (values, dispatch) => {
    console.log(values);
}

class ContactForm extends Component {
    render() {
        const {fields: {name, description}, handleSubmit} = this.props;
        return (
            <form onSubmit= {handleSubmit(
                (book, dispatch) => {
        //            console.log(book);
                    return dispatch(addBook(book));
                }
            )}>
                <div>
                    <label>name</label>
                    <input type="text" placeholder="name" {...name}/>
                </div>
                <div>
                    <label>description</label>
                    <input type="text" placeholder="descriptione" {...description}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'contact',                           // a unique name for this form
    fields: ['name', 'description'], // all the fields in your form
})(ContactForm);



export default ContactForm;