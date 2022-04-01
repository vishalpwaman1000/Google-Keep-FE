import React, { Component } from 'react'
import './NoteIcon.scss'
import ColorFunctionality from './ColorFunctionality'
import UserServices from '../../services/UserServices'
import IconButton from '@material-ui/core/IconButton'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const DashboardService = new UserServices()

export default class NoteIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      NoteID: props.noteID,
      NoteColor: '#ffffff',
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
    console.clear()
    this.setState({ NoteColor: color }, console.log('Color Selected : ', color))
    let data = {
      noteID: this.state.NoteID,
      noteColor: color,
    }

    console.log('Change Note Color : ', data)
    DashboardService.ChangeNoteColor(data)
      .then((data) => {
        console.log('Note Icon Data : ', data)
        this.props.GetNote()
      })
      .catch((error) => {
        console.log('Note Icon Error : ', error)
        this.props.GetNote()
      })
  }

  handleDeleteNote = () => {
    console.clear()
    let data = {
      noteID: this.state.NoteID,
    }
    console.log('Delete Note ID : ', data)
    DashboardService.TrashNote(data)
      .then((data) => {
        console.log('Delete Note : ', data)
        this.props.GetNote()
      })
      .catch((error) => {
        console.log('Delete Note Error : ', error)
        this.props.GetNote()
      })
  }

  handleArchiveNote = () => {
    console.clear()
    let data = {
      noteID: this.state.NoteID,
    }
    console.log('Archieve Note ID : ', data)
    DashboardService.ArchiveNote(data)
      .then((data) => {
        console.log('Delete Note : ', data)
        this.props.GetNote()
      })
      .catch((error) => {
        console.log('Delete Note Error : ', error)
        this.props.GetNote()
      })
  }

  render() {
    return (
      <div className="UpdateNote-Container">
        <div className="UpdateNote-Sub-Container">
          <IconButton className="IconButton" size="small">
            <AddAlertOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className="IconButton" size="small">
            <PersonAddOutlinedIcon fontSize="small" />
          </IconButton>
          <ColorFunctionality
            className="IconButton"
            ButtonSize="small"
            GetNote={this.props.GetNotes}
            ChangeBackGColor={this.ChangeBackGColor}
            anchorEl={this.state.anchorEl}
            handleCloseFunctionality={this.handleCloseFunctionality}
            handleColorFunctionality={this.handleColorFunctionality}
          />
          <IconButton
            className="IconButton"
            size="small"
            onClick={this.handleDeleteNote}
          >
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton
            className="IconButton"
            size="small"
            onClick={this.handleArchiveNote}
          >
            <ArchiveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className="IconButton" size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    )
  }
}
