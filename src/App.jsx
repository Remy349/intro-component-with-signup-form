import React from 'react'
import { FormInput } from './components/FormInput'
import { IntroContent } from './components/IntroContent'

import iconError from './images/icon-error.svg'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      errorFirstName: false,
      errorLastName: false,
      errorEmailAddress: false,
      errorEmailAddressMessage: '',
      errorPassword: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  formValidation() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (this.state.firstName === '') {
      this.setState({ errorFirstName: true })
    } else {
      this.setState({ errorFirstName: false })
    }

    if (this.state.lastName === '') {
      this.setState({ errorLastName: true })
    } else {
      this.setState({ errorLastName: false })
    }

    if (this.state.emailAddress === '') {
      this.setState({
        errorEmailAddress: true,
        errorEmailAddressMessage: 'empty',
      })
    } else if (!emailRegex.test(this.state.emailAddress)) {
      this.setState({
        errorEmailAddress: true,
        errorEmailAddressMessage: 'invalid',
      })
    } else {
      this.setState({
        errorEmailAddress: false,
        errorEmailAddressMessage: '',
      })
    }

    if (this.state.password === '') {
      this.setState({ errorPassword: true })
    } else {
      this.setState({ errorPassword: false })
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.formValidation()
  }

  render() {
    return (
      <main className='intro'>
        <IntroContent />
        <div className='intro__forms'>
          <div>
            <div className='intro__forms-content'>
              <p className='intro__forms-content_text'>
                Try it free 7 days <span>then $20/mo. thereafter</span>
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={this.handleSubmit} className='intro__form'>
              <FormInput
                inputValue={this.state.firstName}
                inputType='text'
                inputName='firstName'
                onChange={this.handleInputChange}
                placeholder='First Name'
                placeholderError=''
                errorInput={this.state.errorFirstName}
                icon={iconError}
                message='First Name cannot be empty'
              />
              <FormInput
                inputValue={this.state.lastName}
                inputType='text'
                inputName='lastName'
                onChange={this.handleInputChange}
                placeholder='Last Name'
                placeholderError=''
                errorInput={this.state.errorLastName}
                icon={iconError}
                message='Last Name cannot be empty'
              />
              <FormInput
                inputValue={this.state.emailAddress}
                inputType='text'
                inputName='emailAddress'
                onChange={this.handleInputChange}
                placeholder='Email Address'
                placeholderError='email@example/com'
                errorInput={this.state.errorEmailAddress}
                icon={iconError}
                message={
                  this.state.errorEmailAddressMessage === 'empty'
                    ? 'Email Address cannot be empty'
                    : 'Looks like this is not an email'
                }
              />
              <FormInput
                inputValue={this.state.password}
                inputType='password'
                inputName='password'
                onChange={this.handleInputChange}
                placeholder='Password'
                placeholderError=''
                errorInput={this.state.errorPassword}
                icon={iconError}
                message='Password cannot be empty'
              />
              <button className='intro__form-submit' type='submit'>
                Claim your free trial
              </button>
              <p className='intro__form-terms'>
                By clicking the button, you are agreeing to our{' '}
                <a href='#'>Terms and Services</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

export default App
