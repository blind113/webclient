import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {  useNavigate } from 'react-router-dom';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { faBusinessTime,
  faCalendarTimes,
  faChartLine,
  faCogs, 
  faList, 
  faUserClock, 
  faPeopleCarry,
  faUserCog,
  faHourglassEnd, 
  faUserFriends, 
  faGlobe, 
  faBell, 
  faHistory, 
  faChalkboardTeacher, 
  faStopwatch, 
  faChartBar,
  faUser,
  faCalendar,  
  faCalendarMinus,
  faSitemap,
  faIdCard,
  faFileInvoiceDollar
  } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';


const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
 }));
const menus = [{
    name: 'Painel',
    Icon: faChartLine,
    link: '/'
},{ 
    name: 'Pedidos',
    Icon: faList,
    items: [{
        name: 'Horas Extras',
        Icon: faBusinessTime,
        link: '/HorasExtras',
      },{
        name: 'Justf. De Faltas',
        Icon: faCalendarTimes,
        link: '/JustFaltas',
      },{
        name: 'Troca De Horário',
        Icon: faUserClock,
        link:  '/trocaHorario',
      }, {
        name: 'Troca De Escala',
        Icon: faHourglassEnd,
        link: '/trocaHorario',
      },{
        name: 'Troca De Equipe',
        Icon: faUserCog,
        link: '/trocaHorario'
      }
    ]
},{
    name: 'Planejamento',
    Icon: faChartLine,
    items: [{
        name:'Equipe',
        Icon: faUser, 
        items:[{
            name: 'Dimensionamento',
            Icon: faUserFriends,
            link: '/dimensionamento',
          },{
            name: 'Alocação Fisica',
            Icon: faGlobe,
            link: '/alocacaoFisica'
          },{
            name: 'Alocação por Skill',
            Icon: faPeopleCarry,
            link: '/alocacaoSkill'
          }]
      },{
        name: 'Plano De Férias',
        Icon: faCalendar,
        items: [{
            name: 'Por Skills',
            Icon: faBell,
            link: '/porSkill'
        },{
            name: 'Por Antiguidade',
            Icon: faHistory,
            link: '/antiguidade'
        }]
      },{
        name: 'Treinamentos',
        Icon: faChalkboardTeacher,
        items:[{
            name: 'Turnos',
            Icon: faStopwatch,
            link: '/Turno'
          },{
            name: 'Aderencia',
            Icon: faChartBar,
            link: '/aderencia'
          }]
      }]
}, {
    name: 'Documentos',
    Icon: faFolder,
    link: '/documentos'
},{
    name: 'Configurações',
    Icon: faCogs,
    items: [
      {
        name: 'Feriados',
        Icon: faCalendarMinus,
        link: '/feriadosConfig'
      },
      {
        name: 'Usuários',
        Icon: faUserCog,
        item:[{
            name: 'Acessos',
            Icon: faSitemap,
            link: '/acessosConfig'
        },{
            name: 'Cadastro',
            Icon: faIdCard,
            link: '/cadastro'
        }]
      },
    ],
},{
  name: 'Faturamento', 
  Icon: faFileInvoiceDollar,
  link: '/faturamento'
}
]

 export default  function  MenuLateral(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
      setOpen(!open);
    };
    
    return (
        
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.status,
          [classes.drawerClose]: !props.status,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.status,
            [classes.drawerClose]: !props.status,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => props.onClick()}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List>
          {menus.map((item, index) => (
            <MenuItem {...item} key={index} />
           /*
            <ListItem button key={item.name} onClick = { () => navigate(item.link)}>
                <ListItemIcon ><FontAwesomeIcon icon={item.Icon} /></ListItemIcon>
                <ListItemText primary = {item.name}/>
            </ListItem>
            */
          ))}
  
          
          </List>
      </Drawer>
      
    );
}

