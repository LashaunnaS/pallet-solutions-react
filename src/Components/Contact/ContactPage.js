import React from 'react';
import {Contact, FormContainer, Title, Description, ContactForm} from './ContactStyles';
import {isEmail} from 'validator';


class ContactPage extends React.Component {
    state = {
        fields: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        fieldErrors: {},
        people: [],
    };
    

    onFormSubmit = (evt) => {
        const people = [ ...this.state.people ];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        this.setState({fieldErrors});
        evt.preventDefault();

        if(Object.keys(fieldErrors).length) return;

        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        });
    };

    validate = (person) => {
        const errors = {};
        if (!person.name) errors.name = 'Named Required';
        if (!person.email) errors.email = 'Email Required';
        if (!person.phone) errors.phone = 'Phone nUmber Required';
        if (!person.message) errors.message = 'Message Required';
        if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
        return errors; 
    };

    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
        };

    render(){
    return (
        <Contact>
            <FormContainer>
                <Title>Contact</Title>
                <Description>
                    Have any questions, feel free to get in touch.<br />
                    <a href="tel:416-995-3868">Phone: 416-995-3868</a>
                </Description>
                <ContactForm>
                    <form onSubmit={this.onFormSubmit}>
                        <input 
                        placeholder="Your Name"
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        />

                        <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>

                        <br />

                        <input 
                        placeholder="Your Email"
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        />

                        <span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span>

                        <br />

                        <input 
                        placeholder="Your Number"
                        name='phone'
                        value={this.state.fields.phone}
                        onChange={this.onInputChange}
                        />

                        <span style={{ color: 'red' }}>{this.state.fieldErrors.phone}</span>

                        <br />

                        <textarea 
                        placeholder="Message"
                        name='message'
                        value={this.state.fields.message}
                        onChange={this.onInputChange}
                        />

                        <span style={{ color: 'red' }}>{this.state.fieldErrors.message}</span>

                        <br />

                        <button type="submit">Send</button>
                    </form>
                    <div>
                        <h3>list</h3>
                        <ul style={{ color: 'white' }}>{this.state.people.map(({name, email, phone, message}, i) =>
                            <li key={i}>{name} ({email})({phone})[{message}]</li>)}
                        </ul>
                    </div>
                </ContactForm>
            </FormContainer>
        </Contact>
    );
}
}

export default ContactPage;