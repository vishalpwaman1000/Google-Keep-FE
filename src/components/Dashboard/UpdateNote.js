import React, { useEffect, useState } from 'react'
import ColorFunctionality from './ColorFunctionality'
import Modal from '@material-ui/core/Modal'
import './UpdateNote.scss'
import UserServices from '../../services/UserServices.js'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Pin from '../../asserts/pin.svg'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
//
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined'
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import Moment from 'moment' // Use For DateTime Format

const dashboardService = new UserServices()

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: '8px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '500px',
    height: '150px',
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '6px 20px',
  },
}))

export default function UpdateNote(props) {
  const [NoteField, setNoteField] = useState({
    NoteID: '',
    Title: '',
    Discription: '',
    NoteColor: '',
    ReminderTime: '',
    OpenModel: '',
  })

  const [open, setOpen] = useState(true)
  const [anchorEl, setanchorEl] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    // console.log('Use Effect Calling....\n Current Note : ', props.CurrentNote)
    setNoteField({
      NoteID: props.CurrentNote.noteID,
      Title: props.CurrentNote.title,
      Discription: props.CurrentNote.discription,
      NoteColor: props.CurrentNote.noteColor,
      ReminderTime: props.CurrentNote.reminderTime,
    })
    setOpen(props.show)
  }, [props.CurrentNote, props.show])

  const handleUpdateClose = () => {
    if (
      NoteField.Title !== '' &&
      NoteField.Discription !== '' &&
      NoteField.NoteColor !== ''
    ) {
      const data = {
        noteId: props.CurrentNote.noteID,
        title: NoteField.Title,
        discription: NoteField.Discription,
        noteColor: NoteField.NoteColor,
        reminderTime: NoteField.ReminderTime,
      }

      console.log('Update Request Data : ', data)

      dashboardService
        .UpdateNote(data)
        .then((data) => {
          console.log('Data : ', data)
          props.handleCloseModel()
          props.GetNote()
        })
        .catch((error) => {
          console.log('Error : ', error)
          props.handleCloseModel()
          props.GetNote()
        })
    } else {
      console.log('Some Field Empty')
    }
  }

  const handleColorFunctionality = (event) => {
    setanchorEl(event.currentTarget)
  }

  const handleCloseFunctionality = () => {
    setanchorEl(null)
  }

  const ChangeBackGColor = (color) => {
    setNoteField(
      { ...NoteField, NoteColor: color },
      console.log('Color Selected : ', color),
    )
  }

  return (
    <div className="UpdateNote-Container">
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        onClose={props.handleCloseModel}
        open={open}
        className={classes.modal}
      >
        <div
          className={classes.paper}
          style={{ backgroundColor: NoteField.NoteColor }}
        >
          <div className="Title">
            <TextField
              placeholder="Title"
              fullWidth
              InputLabelProps={{ fontWeight: '400' }}
              inputProps={{
                style: { fontSize: 15, fontWeight: 550, color: 'black' },
              }}
              value={NoteField.Title}
              onChange={(e) => {
                setNoteField(
                  { ...NoteField, Title: e.target.value },
                  console.log(
                    'Title : ',
                    e.target.value,
                    ' NoteField : ',
                    NoteField,
                  ),
                )
              }}
            />
            <IconButton size="small">
              <img src={Pin} alt="" />
            </IconButton>
          </div>
          <TextField
            fullWidth
            className="TakeANote"
            placeholder="Take a note..."
            inputProps={{
              style: { fontSize: 15, fontWeight: 550, color: 'black' },
            }}
            value={NoteField.Discription}
            onChange={(e) => {
              setNoteField(
                { ...NoteField, Discription: e.target.value },
                console.log('Discription : ', e.target.value),
              )
            }}
          />
          <TextField
            id="datetime-local"
            type="datetime-local"
            value={NoteField.ReminderTime}
            onChange={(e) => {
              setNoteField(
                { ...NoteField, ReminderTime: e.target.value },
                console.log('Time : ', e.target.value),
              )
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
                ChangeBackGColor={ChangeBackGColor}
                anchorEl={anchorEl}
                handleCloseFunctionality={handleCloseFunctionality}
                handleColorFunctionality={handleColorFunctionality}
              />
              <IconButton className="IconButton" size="medium">
                <ImageOutlinedIcon fontSize="small" />
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
              onClick={handleUpdateClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
