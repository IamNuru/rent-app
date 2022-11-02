import React from "react";
import { Box, Grid, List, ListItem, ListSubheader, ListItemText, ListItemButton, ListItemIcon,  } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import StarIcon from '@mui/icons-material/Star';
import InboxIcon from '@mui/icons-material/Inbox';
import { Link } from "react-router-dom";
import posts from '../../_mock/blog';

const Footer = () => {
    const navItems = [
        {
          link:'/',
          text:'Home'
        },
        {
          link:'/properties',
          text:'Properties'
        },
        {
          link:'/blog',
          text:'Blog'
        },
        {
          link:'/about-us',
          text:'About'
        },
        {
          link:'/contact-us',
          text:'Contact'
        },
        {
          link:'/dashboard',
          text:'Dashboard'
        },
      ];
  return (
    <Box sx={{px:{sm:'4rem', xs:'1rem'}, mt:6, py:'1.5rem', backgroundColor:'rgb(5, 30, 52)'}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <List
            aria-labelledby="Menus"
            component="nav"
            subheader={
              <ListSubheader component="div" id="menus" 
              sx={{fontSize: 20, fontWeight:500, backgroundColor:'rgb(5, 30, 52)', color:'white' }}>
                Menu
              </ListSubheader>
            }
          >
            {
                navItems?.map((item, index) =>(
                   <ListItem disablePadding key={index} sx={{ml:'2rem'}}>
                        <Link to={`${item.link}`} style={{width:'100%'}}>
                            <ListItemText primary={item.text} sx={{color:'rgb(205, 210, 225)',fontWeight:600,fontSize: 16 }} />
                        </Link>
                    </ListItem> 
                ))
            }
            
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
        <List
            aria-labelledby="Menus"
            component="nav"
            subheader={
              <ListSubheader component="div" id="menus"sx={{fontSize: 20, fontWeight:500, backgroundColor:'rgb(5, 30, 52)', color:'white' }}>
                Blog
              </ListSubheader>
            }
          >
            {
                posts?.slice(0, 5).map((post, index) =>(
                   <ListItem divider disableGutters disablePadding key={index} sx={{ml:{xs:'2rem'}, my:'0.35rem'}}>
                        <Link to={`${post.title}`} style={{width:'100%', display:'flex'}}>
                            <StarIcon fontSize="small" sx={{color:'yellow', mt:'0.3rem', mr:'0.25rem'}} />
                            <ListItemText primary={post.title} sx={{color:'rgb(205, 210, 225)',fontWeight:600,fontSize: 16 }} />
                        </Link>
                    </ListItem> 
                ))
            }
            
          </List>
        </Grid>
        <Grid item xs={12} sm={12}>
        <List
            aria-labelledby="contact-us"
            component="nav"
            subheader={
              <ListSubheader component="div" id="contact-us" 
              sx={{fontSize: 20, fontWeight:500, backgroundColor:'rgb(5, 30, 52)', color:'white' }}>
                Contact Us
              </ListSubheader>
            }
          >
            <ListItem disablePadding sx={{color:'white', ml:'1rem'}}>
            <ListItemButton>
              <ListItemIcon>
                <ContactPhoneIcon htmlColor="white"/>
              </ListItemIcon>
              <ListItemText primary="+233543027058" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{color:'white', ml:'1rem'}}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon htmlColor="white" />
              </ListItemIcon>
              <ListItemText primary="inbox@rentgh.com" />
            </ListItemButton>
          </ListItem>
            </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
