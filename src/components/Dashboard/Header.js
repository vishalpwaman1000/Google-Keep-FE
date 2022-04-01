import React from 'react'
import './Header.scss'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Note from '../../asserts/Note.png'
import { alpha, makeStyles } from '@material-ui/core/styles'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.05),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '600px',
      height: '45px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    height: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function Header(props) {
  const classes = useStyles()
  return (
    <div className="Header-Container">
      <div className="Header-Sub-Container">
        <div className="Sub-Header1">
          <IconButton onClick={()=>{props.MenuFlag()}}>
            <MenuIcon />
          </IconButton>
          <img src={Note} alt="" className="NoteIcon" />
          <div className="NoteText">Note</div>
        </div>
        <div className="Sub-Header2">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
        <div className="Sub-Header3">
          <IconButton>
            <AccountCircleRoundedIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
