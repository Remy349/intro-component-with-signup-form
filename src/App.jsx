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

  handleSubmit(e) {
    e.preventDefault()
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
                  className='intro__form-input'
                  autoComplete='off'
                  placeholder='First Name'
                  name='firstName'
                  onChange={this.handleInputChange}
                  value={this.state.firstName}
                />
                <img
                  className='intro__form-icon show'
                  src={iconError}
                  alt='Icon error'
                />
                <p className='intro__form-message show'>
                  First Name cannot be empty
                </p>
              </div>
              <div className='intro__form-container'>
                <input
                  type='text'
                  className='intro__form-input'
                  autoComplete='off'
                  placeholder='Last Name'
                  name='lastName'
                  onChange={this.handleInputChange}
                  value={this.state.lastName}
                />
                <img
                  className='intro__form-icon'
                  src={iconError}
                  alt='Icon error'
                />
                <p className='intro__form-message'>Last Name cannot be empty</p>
              </div>
              <div className='intro__form-container'>
                <input
                  type='text'
                  className='intro__form-input'
                  autoComplete='off'
                  placeholder='Email Address'
                  name='emailAddress'
                  onChange={this.handleInputChange}
                  value={this.state.emailAddress}
                />
                <img
                  className='intro__form-icon'
                  src={iconError}
                  alt='Icon error'
                />
                <p className='intro__form-message'>
                  Looks like this is not an email
                </p>
              </div>
              <div className='intro__form-container'>
                <input
                  type='password'
                  className='intro__form-input'
                  placeholder='Password'
                  name='password'
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
                <img
                  className='intro__form-icon'
                  src={iconError}
                  alt='Icon error'
                />
                <p className='intro__form-message'>Password cannot be empty</p>
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
