import React, { Component } from 'react'
import './ColorFunctionality.scss'
import { Menu, MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined'

export default class ColorFunctionality extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorE1: null,
    }
  }

  handleColorFunctionality = (event) => {
    this.setState(
      { anchorEl: event.currentTarget },
      console.log('Event : ', event.currentTarget),
    )
  }

  handleCloseFunctionality = () => {
    this.setState({ anchorE1: null })
  }

  render() {
    return (
      <div className="ColorFunctionality-Container">
        <IconButton
          id="simple-menu"
          className="IconButton"
          size={this.props.ButtonSize}
          onClick={this.props.handleColorFunctionality}
        >
          <ColorLensOutlinedIcon fontSize="small" />
        </IconButton>
        <Menu
          className="simple-TextColorMenu"
          anchorEl={this.props.anchorEl}
          keepMounted
          open={Boolean(this.props.anchorEl)}
          onClose={this.props.handleCloseFunctionality}
        >
          <div
            style={{
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div>Text Color</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '8px 0 0 0',
              }}
              onClick={this.props.handleCloseFunctionality}
            >
              <div
                className="A1"
                onClick={() => {
                  this.props.ChangeBackGColor('#ffffff')
                }}
                style={{ backgroundColor: '#ffffff' }}
              ></div>
              <div
                className="A1"
                onClick={() => {
                  this.props.ChangeBackGColor('#b3b3b3')
                }}
                style={{ backgroundColor: '#b3b3b3' }}
              ></div>
            </div>
          </div>

          <MenuItem
            className="simple-TextColorMenuItem"
            onClick={this.props.handleCloseFunctionality}
            style={{
              height: '120px',
              width: '120px',
              padding: '12px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#ff8080')
              }}
              style={{ backgroundColor: '#ff8080' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#ffb84d')
              }}
              style={{ backgroundColor: '#ffb84d' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#ffff66')
              }}
              style={{ backgroundColor: '#ffff66' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#99ff99')
              }}
              style={{ backgroundColor: '#99ff99' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#b3ffff')
              }}
              style={{ backgroundColor: '#b3ffff' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#b3b3ff')
              }}
              style={{ backgroundColor: '#b3b3ff' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#d699ff')
              }}
              style={{ backgroundColor: '#d699ff' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#ffb3ff')
              }}
              style={{ backgroundColor: '#ffb3ff' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#ececec')
              }}
              style={{ backgroundColor: '#ececec' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#c0c0c0')
              }}
              style={{ backgroundColor: '#c0c0c0' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#cc9999')
              }}
              style={{ backgroundColor: '#cc9999' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#cccc99')
              }}
              style={{ backgroundColor: '#cccc99' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#99cc99')
              }}
              style={{ backgroundColor: '#99cc99' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#d9b3d9')
              }}
              style={{ backgroundColor: '#d9b3d9' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#80c0c0')
              }}
              style={{ backgroundColor: '#80c0c0' }}
            ></div>
            <div
              className="A1"
              onClick={() => {
                this.props.ChangeBackGColor('#9999cc')
              }}
              style={{ backgroundColor: '#9999cc' }}
            ></div>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
