import React, { Component } from 'react'
const data = require('../../../server/data.js')
const css = require('./Dashboard')
const http = require('http')
let timetable = ''

class Dashboard extends Component {
  constructor(props) {
    super(props)

  }
  
  dataTest() {
    http.get('/getdata', (res) => {
      res.setEncoding('utf8')
      res.on('data', function (body) {
        console.log(body)
      })
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <div className='uk-flex uk-flex-center uk-text-center uk-margin-top uk-margin-left uk-margin-right'>
=======
      <div className='uk-flex uk-flex-center uk-text-center uk-margin-left uk-margin-right'>
        <button onClick={this.dataTest.bind(this)}>Data Test</button>
>>>>>>> 8734539d29ce058108b51d0c4807fbdd0fb704b7
        <div className='uk-card uk-card-default uk-card-body uk-card large uk-width-1-3@l uk-width-2-5@m uk-width-2-3@s uk-width-4-5@xs '>
          <p className='uk-text-large'>Roll Call in</p>
          <h1 className='uk-text-center uk-heading-primary uk-margin-small-top uk-margin-medium-bottom'>
            10:00:00
          </h1>
          <div className='uk-flex uk-flex-center'>
            <table className='uk-table uk-table-hover uk-table-small uk-width-4-5@s'>
              <tbody>
                <tr>
                  <td className='uk-text-lead uk-text-left'>
                    English
                    <dd className='uk-text-meta uk-text-muted uk-text-top uk-text-left'>
                      at 09:05 with Ms English
                    </dd>
                  </td>
                  <td className='uk-text-middle uk-table-shrink uk-text-lead'>201</td>
                </tr>
                <tr>
                  <td className='uk-text-lead uk-text-left uk-text-muted'>
                    <small>Study Period</small>
                    <dd className='uk-text-meta uk-text-muted uk-text-top uk-text-left'>

                    </dd>
                  </td>
                  <td className='uk-text-middle uk-table-shrink uk-text-lead uk-text-muted'>10:10</td>
                </tr>
                <tr>
                  <td className='uk-text-lead uk-text-left uk-text-muted'>
                    <small>Lunch</small>
                    <dd className='uk-text-meta uk-text-muted uk-text-top uk-text-left'>

                    </dd>
                  </td>
                  <td className='uk-text-middle uk-table-shrink uk-text-lead uk-text-muted'>11:10</td>
                </tr>
                <tr>
                  <td className='uk-text-lead uk-text-left'>
                    Maths
                    <dd className='uk-text-meta uk-text-muted uk-text-top uk-text-left'>
                      at 11:50 with Ms Maths
                    </dd>
                  </td>
                  <td className='uk-text-middle uk-table-shrink uk-text-lead'>101</td>
                </tr>
                <tr>
                  <td className='uk-text-lead uk-text-left'>
                    English
                    <dd className='uk-text-meta uk-text-muted uk-text-top uk-text-left'>
                      at 12:55 with Ms English
                    </dd>
                  </td>
                  <td className='uk-text-middle uk-table-shrink uk-text-lead'>202</td>
                </tr>
                <tr>
                  <td className='uk-text-lead uk-text-left uk-text-muted'>
                    <small>Recess</small>
                    <dd className='uk-text-meta uk-text-muted uk-text-top uk-text-left'>

                    </dd>
                  </td>
                  <td className='uk-text-middle uk-table-shrink uk-text-lead uk-text-muted'>13:55</td>
                </tr>
                <tr>
                  <td className='uk-text-lead uk-text-left'>
                    Maths
                    <dd className='uk-text-meta uk-text-muted uk-text-top uk-text-left'>
                      at 14:15 with Ms English
                    </dd>
                  </td>
                  <td className='uk-text-middle uk-table-shrink uk-text-lead'>101</td>
                </tr>
              </tbody>
            </table>
            <h1> </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
