import React, { Component } from 'react'
import './Registration.scss'
import account from '../../asserts/account.svg'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
// import Checkbox from '@material-ui/core/Checkbox';

export default class Registration extends Component {
  render() {
    return (
      <div className="Registration-Container">
        <div className="Sub-Container">
          <div className="Box1">
            <div className="Sub-Box1">
              <div className="Header">
                <div className="Sub-Header1">Google</div>
                <div className="Sub-Header2">Create your Google Account</div>
              </div>
              <div className="Body">
                <form autoComplete="off">
                  <div className="Sub-Body1">
                    <TextField
                      size="small"
                      label="First Name"
                      variant="outlined"
                      className="TextField"
                    />
                    <TextField
                      size="small"
                      label="Last Name"
                      variant="outlined"
                      className="TextField"
                    />
                  </div>
                  <TextField
                    fullWidth
                    size="small"
                    label="Username"
                    variant="outlined"
                    className="TextField"
                  />
                  <FormHelperText
                    style={{ margin: '0 0 0 10px', color: 'black' }}
                  >
                    You can use letters, numbers & periods
                  </FormHelperText>
                  <div className="Sub-Body2">
                    <TextField
                      size="small"
                      label="Password"
                      variant="outlined"
                      className="TextField"
                    />
                    <TextField
                      size="small"
                      label="Confirm"
                      variant="outlined"
                      className="TextField"
                    />
                  </div>
                  <FormHelperText
                    style={{ margin: '0 0 0 10px', color: 'black' }}
                  >
                    Use 8 or more characters with a mix of letters, numbers & symbols
                  </FormHelperText>
                </form>
              </div>
              <div className="Footer"></div>
            </div>
          </div>
          <div className="Box2">
            <img src={account} className="Account-Image" alt=''/>
            <div className="Account-Text">
              One account. All of VCoder working for you
            </div>
          </div>
        </div>
      </div>
    )
  }
}
