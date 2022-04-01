import React, { Component } from 'react'
import Header from './Header'
import TakeNote from './TakeNote'
import GetNote from './GetNote'
import './Dashboard.scss'
import UserServices from '../../services/UserServices'
//Icons
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import IconButton from '@material-ui/core/IconButton'

const dashboardServices = new UserServices()

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      MenuFlag: false,
      NoteFlag: true,
      ReminderFlag: false,
      EditFlag: false,
      ArchiveFlag: false,
      TrashFlag: false,
      RecordData: [],
    }

    this.TakeNote = React.createRef()
  }

  componentWillMount() {
    console.log('Dashboard Component Will Mount Calling')
    this.GetNote()
  }

  GetNote = () => {
    console.log('GetNote Function Calling....')
    this.setState({
      NoteFlag: true,
      ReminderFlag: false,
      EditFlag: false,
      ArchiveFlag: false,
      TrashFlag: false,
      RecordData: [],
    })
    dashboardServices
      .GetNote()
      .then((data) => {
        console.log('GetNote Data : ', data.data.data)
        this.setState({ RecordData: data.data.data })
      })
      .catch((error) => {
        console.log('Error : ', error)
      })
  }

  MenuFlag = () => {
    console.log('Menu Flag : ', this.state.MenuFlag)
    this.setState({ MenuFlag: !this.state.MenuFlag })
  }

  handleCloseTakeNote = () => {
    this.TakeNote.current.handleCloseTakeNote()
  }

  handleReminderNote = () => {
    this.setState({
      NoteFlag: false,
      ReminderFlag: true,
      EditFlag: false,
      ArchiveFlag: false,
      TrashFlag: false,
      RecordData: [],
    })
    dashboardServices
      .GetReminderNote()
      .then((data) => {
        console.log('Reminder Data : ', data.data.data)
        this.setState({ RecordData: data.data.data })
      })
      .catch((error) => {
        console.log('Error : ', error)
      })
  }

  handleArchieveNote = () => {
    this.setState({
      NoteFlag: false,
      ReminderFlag: false,
      EditFlag: false,
      ArchiveFlag: true,
      TrashFlag: false,
      RecordData: [],
    })
    dashboardServices
      .GetArchiveNote()
      .then((data) => {
        console.log('Reminder Data : ', data.data.data)
        this.setState({ RecordData: data.data.data })
      })
      .catch((error) => {
        console.log('Error : ', error)
      })
  }

  handleDeleteNote = () => {
    this.setState({
      NoteFlag: false,
      ReminderFlag: false,
      EditFlag: false,
      ArchiveFlag: false,
      TrashFlag: true,
      RecordData: [],
    })
    dashboardServices
      .GetTrashNote()
      .then((data) => {
        console.log('Reminder Data : ', data.data.data)
        this.setState({ RecordData: data.data.data })
      })
      .catch((error) => {
        console.log('Error : ', error)
      })
  }

  render() {
    let State = this.state
    console.log('State : ', State)
    return (
      <div className="Dashboard-Container">
        <div className="Sub-Container">
          <div className="Header">
            <Header MenuFlag={this.MenuFlag} />
          </div>
          <div className="Body">
            <div className={!State.MenuFlag ? 'Menu1' : 'Menu2'}>
              <div
                className={State.NoteFlag ? 'MenuButton1' : 'MenuButton2'}
                onClick={this.GetNote}
              >
                <IconButton>
                  <EmojiObjectsOutlinedIcon />
                </IconButton>
                {!State.MenuFlag ? (
                  <div></div>
                ) : (
                  <div className="MenuText">Notes</div>
                )}
              </div>
              <div
                className={State.ReminderFlag ? 'MenuButton1' : 'MenuButton2'}
                onClick={this.handleReminderNote}
              >
                <IconButton>
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
                {!State.MenuFlag ? (
                  <div></div>
                ) : (
                  <div className="MenuText">Reminders</div>
                )}
              </div>
              <div className={State.EditFlag ? 'MenuButton1' : 'MenuButton2'}>
                <IconButton>
                  <EditOutlinedIcon />
                </IconButton>
                {!State.MenuFlag ? (
                  <div></div>
                ) : (
                  <div className="MenuText">Edit labels</div>
                )}
              </div>
              <div
                className={State.ArchiveFlag ? 'MenuButton1' : 'MenuButton2'}
                onClick={this.handleArchieveNote}
              >
                <IconButton>
                  <ArchiveOutlinedIcon />
                </IconButton>
                {!State.MenuFlag ? (
                  <div></div>
                ) : (
                  <div className="MenuText">Archive</div>
                )}
              </div>
              <div
                className={State.TrashFlag ? 'MenuButton1' : 'MenuButton2'}
                onClick={this.handleDeleteNote}
              >
                <IconButton>
                  <DeleteForeverOutlinedIcon />
                </IconButton>
                {!State.MenuFlag ? (
                  <div></div>
                ) : (
                  <div className="MenuText">Trash</div>
                )}
              </div>
            </div>
            <div className={!State.MenuFlag ? 'Sub-Body1' : 'Sub-Body2'}>
              <div className="Sub-Sub-Body1">
                <TakeNote ref={this.TakeNote} GetNote={this.GetNote} />
              </div>
              <div className="Sub-Sub-Body2" onClick={this.handleCloseTakeNote}>
                {State.RecordData !== null && State.RecordData.length !== 0 ? (
                  <GetNote state={this.state} GetNotes={this.GetNote} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
