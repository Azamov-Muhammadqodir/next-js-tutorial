import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { navItems } from '@/config/constants';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { useRouter } from 'next/router';

interface Props{
    window?: ()=>Window;
}


const drawerWidth = '100%';

const Navbar = ({window}:Props) =>{
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();

    const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window().document.body : undefined;


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{display:'flex', justifyContent: 'space-between', alignItems:'center', paddingX:'20px'}}>
      <Box  sx={{ my: 2, display:'flex', alignItems:'center', gap:'5px'}}>
        <MenuBookTwoToneIcon/>  
        <Typography variant='h6'>
          MENU
        </Typography>
      </Box>
      <CloseIcon/>
      </Box>
      
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
    return <Box height={"10vh"} sx={{ display: 'flex' }}>
        <AppBar sx={{height:"10vh", backgroundColor:"#141414"}} component="nav" >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
            <MenuIcon />
            </IconButton>
            <Box sx={{ my: 2,  alignItems:'center', gap:'5px',flexGrow: 1 , display: { xs: 'none', sm: 'flex' }}}>
              <Typography
                variant="h6"
                component="div"
              >
              </Typography>
                <AccountCircleTwoToneIcon sx={{width:'50px', height:'50px'}}/>  
                <span style={{marginLeft:'25px'}}>
                  decimetr
                </span>
            </Box>
                
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={()=>router.push(item.route )} key={item.route} sx={{ color: '#fff' }}>
                {item.label  }
              </Button>
            ))}
          </Box>

            </Toolbar>
        </AppBar>
        <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
        </Box>;
}
export default Navbar;