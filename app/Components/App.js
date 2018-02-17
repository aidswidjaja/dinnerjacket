import React, { Component } from 'react'
import Dashboard from './Dashboard/Dashboard'
import Timetable from './Timetable/Timetable'
import Notes from './Notes/Notes'
import Notices from './Notices/Notices'
import Settings from './Settings/Settings'
import Feedback from './Feedback/Feedback'
import Profile from './Profile/Profile'
const css = require('./App.css')
const data = require('../data')
const icons = require('../uikit-icons.min')

// Test

// Requirements for beta release
// Daily timetable
// Full timetable
// User notes
// Daily notices
// Student login

// Global variables
// Represents the current visible content

window.STATES = {
  DASHBOARD: 0,
  TIMETABLE: 1,
  NOTES: 2,
  NOTICES: 3,
  CALENDAR: 4,
  SETTINGS: 5,
  FEEDBACK: 6,
  PROFILE: 7
}

let loggedIn = false

class App extends Component {
  constructor(props) {
    super(props)

    // Set default state on launch
    this.state = {
      visible: window.STATES.DASHBOARD
    }
  }

  toggleLogin() {
    // Ensure this toggles correctly between Login and Logout
    // A user may already have a token and therefore in that case 
    // it needs to begin with 'Logout' functionality
    console.log('Login clicked')
    window.location.href = '/login'
  }

  showDashboard() {
    console.log('Dashboard tab clicked')
    let visible = this.state.visible
    this.setState({ visible: window.STATES.DASHBOARD })
  }

  showTimetable() {
    console.log('Timetable tab clicked')
    let visible = this.state.visible
    this.setState({ visible: window.STATES.TIMETABLE })

    // Switch to active tab colour
    let navbar = document.getElementById('navbar')

    let tab = document.getElementById('timetableTab')
    tab.className = 'uk-animation-toggle uk-active'
    tab.childNodes(0).className = 'uk-box-shadow-hover-medium uk-card-primary'
  }

  showNotes() {
    console.log('User notes tab clicked')
    let visible = this.state.visible
    this.setState({ visible: window.STATES.NOTES })
  }

  showNotices() {
    console.log('Daily notices tab clicked')
    let visible = this.state.visible
    this.setState({ visible: window.STATES.NOTICES })
  }

  showSettings() {
    console.log('Settings tab clicked')
    let visible = this.state.visible
    this.setState({ visible: window.STATES.SETTINGS })
  }

  showProfile() {
    console.log('Settings tab clicked')
    let visible = this.state.visible
    this.setState({ visible: window.STATES.PROFILE })
  }

  showFeedback() {
    console.log('Settings tab clicked')
    let visible = this.state.visible
    this.setState({ visible: window.STATES.FEEDBACK })
  }

  // Always renders navbar
  // Renders active page
  render() {
    return (
      <div id='main' className='main'>
        <nav className='uk-navbar uk-navbar-container uk-margin' uk-navbar='true'>
          <div className='uk-navbar-left'>      
            <ul id='navbar' className='uk-navbar-nav'>

              <li className='uk-animation-toggle uk-active' onClick={this.showDashboard.bind(this)}>
                <a className='uk-box-shadow-hover-medium uk-card-primary'>
                  <span className='uk-icon uk-margin-small-right' uk-icon='icon: home'/>
                  Dashboard
                </a>
              </li>

              <li id='timetableTab' className='uk-animation-toggle' onClick={this.showTimetable.bind(this)}>
                <a className='uk-box-shadow-hover-medium'>
                  <span className='uk-icon uk-margin-small-right' uk-icon='icon: star' />
                  Timetable
                </a>
              </li>

              <li className='uk-animation-toggle' onClick={this.showNotes.bind(this)}>
                <a className='uk-box-shadow-hover-medium'>
                  <span className='uk-icon uk-margin-small-right' uk-icon='icon: file-edit' />
                  User Notes
                </a>
              </li>

              <li className='uk-animation-toggle' onClick={this.showNotices.bind(this)}>
                <a className='uk-box-shadow-hover-medium'>
                  <span className='uk-icon uk-margin-small-right' uk-icon='icon: bell' />
                  Daily Notices
                </a>
              </li>

            </ul>
          </div>

          <div className='uk-navbar-right'>
            <ul className='uk-navbar-nav'>
              <li className='uk-animation-toggle'>
                <a className='uk-box-shadow-hover-medium' uk-icon='icon: chevron-down'>
                  Stu Studentson
                </a>

                <div className='uk-navbar-dropdown' uk-dropdown='mode: click'>
                  <ul className='uk-nav uk-navbar-dropdown-nav'>
                    <li>
                      <a onClick={this.showSettings.bind(this)}>
                        <span className='uk-icon uk-margin-small-right' uk-icon='icon: cog' />
                        Settings
                      </a>
                    </li>

                    <li>
                      <a onClick={this.showFeedback.bind(this)}>
                        <span className='uk-icon uk-margin-small-right' uk-icon='icon: comment' />
                        Feedback
                      </a>
                    </li>

                    <li>
                      <a onClick={this.showProfile.bind(this)}>
                        <span className='uk-icon uk-margin-small-right' uk-icon='icon: user' />
                        Profile
                      </a>
                    </li>

                    <li>
                      <a onClick={this.toggleLogin.bind(this)}>
                        <span className='uk-icon uk-margin-small-right' uk-icon='icon: sign-in' />
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div id='content'>
          {this.state.visible === window.STATES.DASHBOARD && <Dashboard />}
          {this.state.visible === window.STATES.TIMETABLE && <Timetable />}
          {this.state.visible === window.STATES.NOTES && <Notes />}
          {this.state.visible === window.STATES.NOTICES && <Notices />}
          {this.state.visible === window.STATES.SETTINGS && <Settings />}
          {this.state.visible === window.STATES.FEEDBACK && <Feedback />}
          {this.state.visible === window.STATES.PROFILE && <Profile />}
        </div>
        
      </div>
    )
  }
}

export default App
