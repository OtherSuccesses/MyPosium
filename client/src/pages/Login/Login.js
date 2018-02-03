import React, { Component } from 'react';
import { Field, Label, Control, Input, Button, Container } from 'bloomer';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    let { username, password } = this.state;
    let user = { username, password };
    e.preventDefault();
    this.submitUser(user);
  }

  submitUser = user => {
    axios
      .post('api/users/login', user)
      .then(result => {
        console.log(result)
        result.data.isAuth ? (window.location.href = '/dashboard') : (window.location.href = '/login')
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <Container>
        <Link to="/">Go Home</Link>
        <Field>
            <Label>User Name:</Label>
            <Control>
                <Input
                  type="text"
                  placeholder='Enter User Name'
                  name='username'
                  value={this.state.username}
                  onChange={this.handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Name</Label>
            <Control>
              <Input
                type="password"
                placeholder='Enter Password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Control>
        </Field>
        <Control>
            <Button isColor='primary' onClick={this.handleSubmit}>Submit</Button>
        </Control>
      </Container>
    )
  }
}