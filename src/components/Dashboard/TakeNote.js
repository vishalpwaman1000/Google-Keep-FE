import React, { Component } from 'react'
import './TakeNote.scss'
import Pin from '../../asserts/pin.svg'
import UserServices from '../../services/UserServices'
import ColorFunctionality from './ColorFunctionality'
//Icons
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined'
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined'
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined'
import TextField from '@material-ui/core/TextField'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined'
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
//Button
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const dashboardServices = new UserServices()

export default class TakeNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      OpenTakeNote: false,
      Title: '',
      Discription: '',
      NoteColor: '#ffffff',
      ReminderTime: null,
      anchorEl: null,
    }
  }

  handleCloseTakeNote() {
    console.log('Call Child handle Close Take Note Function From Parent')
    this.setState({ OpenTakeNote: false })
  }

  handleInput = () => {
    this.setState({ OpenTakeNote: true })
  }

  Validation = (State) => {
    let Valid = true
    Object.values(State).forEach((val) => {
      val.length === '' && (Valid = false)
    })
    return Valid
  }

  ClearInput = () => {
    this.setState({
      Title: '',
      Discription: '',
      NoteColor: '#ffffff',
      ReminderTime: '',
    })
  }

  handleClose = () => {
    this.setState({ OpenTakeNote: false })
    console.log(' State : ', this.state)
    if (
      this.state.Title !== '' &&
      this.state.Discription !== '' &&
      this.state.NoteColor !== ''
    ) {
      let data = {
        title: this.state.Title,
        discription: this.state.Discription,
        noteColor: this.state.NoteColor,
        reminderTime: this.state.ReminderTime,
      }
      dashboardServices
        .CreateNote(data)
        .then((data) => {
          console.log('Data : ', data)
          this.props.GetNote()
          this.ClearInput()
        })
        .catch((error) => {
          console.log('Error : ', error)
        })
    } else {
      console.log('Please Fill All Information')
    }
  }

  handleColorFunctionality = (event) => {
    this.setState(
      { anchorEl: event.currentTarget },
      console.log('Event : ', event.currentTarget),
    )
  }

  handleCloseFunctionality = () => {
    this.setState(
      { anchorEl: null },
      console.log('handleCloseFunctionality Calling'),
    )
  }

  ChangeBackGColor = (color) => {
    this.setState({ NoteColor: color }, console.log('Color Selected : ', color))
  }

  render() {
    let State = this.state
    return (
      <div className="TakeNote-Container">
        <div className="Sub-TakeNote-Container">
          {!State.OpenTakeNote ? (
            <div className="Input-Field1">
              <div
                className="Sub-Input"
                onClick={() => {
                  this.handleInput()
                }}
              >
                Take a note...
              </div>
              <IconButton>
                <CheckBoxOutlinedIcon />
              </IconButton>
              <IconButton>
                <BrushOutlinedIcon />
              </IconButton>
              <IconButton>
                <PanoramaOutlinedIcon />
              </IconButton>
            </div>
          ) : (
            <div
              className="Input-Field2"
              style={{ backgroundColor: this.state.NoteColor }}
            >
              <div className="Title">
                <TextField
                  placeholder="Title"
                  fullWidth
                  InputLabelProps={{ fontWeight: '400' }}
                  inputProps={{
                    style: { fontSize: 15, fontWeight: 550, color: 'black' },
                  }}
                  value={State.Title}
                  onChange={(e) => {
                    this.setState(
                      { Title: e.target.value },
                      console.log('Title : ', e.target.value),
                    )
                  }}
                />
                <IconButton size="small">
                  <img src={Pin} alt="" />
                </IconButton>
              </div>
              <TextField
                className="TakeANote"
                placeholder="Take a note..."
                inputProps={{
                  style: { fontSize: 15, fontWeight: 550, color: 'black' },
                }}
                value={State.Discription}
                onChange={(e) => {
                  this.setState(
                    { Discription: e.target.value },
                    console.log('Discription : ', e.target.value),
                  )
                }}
              />
              <TextField
                id="datetime-local"
                type="datetime-local"
                value={State.ReminderTime}
                onChange={(e) => {
                  this.setState({ ReminderTime: e.target.value })
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ margin: '5px 0 0 0' }}
              />
              <div className="AddFunctionality">
                <div className="Sub-AddFunctionality1">
                  <IconButton className="IconButton" size="medium">
                    <AddAlertOutlinedIcon fontSize="small" />
                  </IconButton>
                  <IconButton className="IconButton" size="medium">
                    <PersonAddOutlinedIcon fontSize="small" />
                  </IconButton>
                  {/* Color Functionality Component */}
                  <ColorFunctionality
                    ChangeBackGColor={this.ChangeBackGColor}
                    ButtonSize="medium"
                    anchorEl={this.state.anchorEl}
                    handleCloseFunctionality={this.handleCloseFunctionality}
                    handleColorFunctionality={this.handleColorFunctionality}
                  />
                  <IconButton className="IconButton" size="medium">
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                  </IconButton>
                  <IconButton className="IconButton" size="medium">
                    <ArchiveOutlinedIcon fontSize="small" />
                  </IconButton>
                  <IconButton className="IconButton" size="medium">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                  <IconButton className="IconButton" size="medium">
                    <UndoOutlinedIcon fontSize="small" />
                  </IconButton>
                  <IconButton className="IconButton" size="medium">
                    <RedoOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
                <Button
                  className="Sub-AddFunctionality2"
                  onClick={this.handleClose}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
