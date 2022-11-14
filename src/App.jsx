import React from 'react'
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
              <div className='intro__form-container'>
                <input
                  type='text'
                  className={
                    this.state.errorFirstName
                      ? 'intro__form-input error'
                      : 'intro__form-input'
                  }
                  autoComplete='off'
                  placeholder={this.state.errorFirstName ? '' : 'First Name'}
                  name='firstName'
                  onChange={this.handleInputChange}
                  value={this.state.firstName}
                />
                <img
                  className={
                    this.state.errorFirstName
                      ? 'intro__form-icon show'
                      : 'intro__form-icon hide'
                  }
                  src={iconError}
                  alt='Icon error'
                />
                <p
                  className={
                    this.state.errorFirstName
                      ? 'intro__form-message show'
                      : 'intro__form-message hide'
                  }
                >
                  First Name cannot be empty
                </p>
              </div>
              <div className='intro__form-container'>
                <input
                  type='text'
                  className={
                    this.state.errorLastName
                      ? 'intro__form-input error'
                      : 'intro__form-input'
                  }
                  autoComplete='off'
                  placeholder={this.state.errorLastName ? '' : 'Last Name'}
                  name='lastName'
                  onChange={this.handleInputChange}
                  value={this.state.lastName}
                />
                <img
                  className={
                    this.state.errorLastName
                      ? 'intro__form-icon show'
                      : 'intro__form-icon hide'
                  }
                  src={iconError}
                  alt='Icon error'
                />
                <p
                  className={
                    this.state.errorLastName
                      ? 'intro__form-message show'
                      : 'intro__form-message hide'
                  }
                >
                  Last Name cannot be empty
                </p>
              </div>
              <div className='intro__form-container'>
                <input
                  type='text'
                  className={
                    this.state.errorEmailAddress
                      ? 'intro__form-input error'
                      : 'intro__form-input'
                  }
                  autoComplete='off'
                  placeholder={
                    this.state.errorEmailAddress
                      ? 'email@example/com'
                      : 'Email Address'
                  }
                  name='emailAddress'
                  onChange={this.handleInputChange}
                  value={this.state.emailAddress}
                />
                <img
                  className={
                    this.state.errorEmailAddress
                      ? 'intro__form-icon show'
                      : 'intro__form-icon hide'
                  }
                  src={iconError}
                  alt='Icon error'
                />
                <p
                  className={
                    this.state.errorEmailAddress
                      ? 'intro__form-message show'
                      : 'intro__form-message hide'
                  }
                >
                  {this.state.errorEmailAddressMessage === 'empty'
                    ? 'Email Address cannot be empty'
                    : 'Looks like this is not an email'}
                </p>
              </div>
              <div className='intro__form-container'>
                <input
                  type='password'
                  className={
                    this.state.errorPassword
                      ? 'intro__form-input error'
                      : 'intro__form-input'
                  }
                  placeholder={this.state.errorPassword ? '' : 'Password'}
                  name='password'
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
                <img
                  className={
                    this.state.errorPassword
                      ? 'intro__form-icon show'
                      : 'intro__form-icon hide'
                  }
                  src={iconError}
                  alt='Icon error'
                />
                <p
                  className={
                    this.state.errorPassword
                      ? 'intro__form-message show'
                      : 'intro__form-message hide'
                  }
                >
                  Password cannot be empty
                </p>
              </div>
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
