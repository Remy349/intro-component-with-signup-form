import React from 'react'
import { IntroContent } from './components/IntroContent'

class App extends React.Component {
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
            <form onClick={this.handleSubmit} className='intro__form'>
              <div className='intro__form-container'>
                <input
                  type='text'
                  className='intro__form-input'
                  autoComplete='off'
                  placeholder='First Name'
                />
              </div>
              <div className='intro__form-container'>
                <input
                  type='text'
                  className='intro__form-input'
                  autoComplete='off'
                  placeholder='Last Name'
                />
              </div>
              <div className='intro__form-container'>
                <input
                  type='text'
                  className='intro__form-input'
                  autoComplete='off'
                  placeholder='Email Address'
                />
              </div>
              <div className='intro__form-container'>
                <input
                  type='password'
                  className='intro__form-input'
                  placeholder='Password'
                />
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
