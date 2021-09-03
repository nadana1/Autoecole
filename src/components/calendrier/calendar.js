import React from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
export default function Calendar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const calendarRef = React.createRef()
    return (
      <div>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Calendar
          </Typography>
        
          <IconButton color="inherit" button component={RouterLink} to='/CandidatDashboard'>
              < AssignmentReturnIcon />
          </IconButton>
        </Toolbar>
      <FullCalendar
      ref={calendarRef}
      schedulerLicenseKey= 'CC-Attribution-NonCommercial-NoDerivatives'
      
        plugins={[ dayGridPlugin ,timeGridPlugin ,resourceTimelinePlugin ]}
        initialView="dayGridMonth"
        events="/events.json"
        customButtons={{
          myTimeDayBtn: {
            text: "timeDay",
            click() {
              const calendar = calendarRef.current;
            if (calendar){
              const calendarApi = calendar.getApi();
              calendarApi.changeView("timeGridDay");
            }
            },


        },
        myTimeWeekBtn: {
          text: "timeWeek",
          click() {
            const calendar = calendarRef.current;
          if (calendar){
            const calendarApi = calendar.getApi();
            calendarApi.changeView("timeGridWeek");
          }
          },


      },
      myTimeLineDayBtn: {
        text: "timeDay",
        click() {
          const calendar = calendarRef.current;
        if (calendar){
          const calendarApi = calendar.getApi();
          calendarApi.changeView("resourceTimelineDay");
        }
        },


    },
    myTimeLineWeekBtn: {
      text: "timeWeek",
      click() {
        const calendar = calendarRef.current;
      if (calendar){
        const calendarApi = calendar.getApi();
        calendarApi.changeView("resourceTimelineWeek");
      }
      },


  },
      } }
        initialView="dayGridMonth"
        headerToolbar={{
            left: "prev,next" ,
            center: "title" ,
            right: "today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn,myTimeLineDayBtn,myTimeLineWeekBtn", 
        }}
    
      />
      </div>
      
    )
  
}