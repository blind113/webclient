import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import {  useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme =>
    createStyles({
      menuItem: {},
      menuItemIcon: {
        color: '#97c05c',
      },
    }),
  )

function MenuItem(props){
    const { name, Icon,link,  items = [] } = props
    const classes = useStyles()
    const isExpandable = items && items.length > 0
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate();
  
    function handleClick() {
      link ? navigate(link) :  setOpen(!open)
    }
    
  const MenuItemRoot = (
    <ListItem button className={classes.menuItem} onClick={handleClick} >
      <ListItemIcon    ><FontAwesomeIcon icon={Icon} /></ListItemIcon>
      <ListItemText primary = {name}/>
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null//{MenuItemChildren}
  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );

}

export default MenuItem