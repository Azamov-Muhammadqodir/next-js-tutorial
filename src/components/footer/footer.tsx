import { Button, ButtonGroup, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {format} from 'date-fns'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';

const Footer = ()=>{
    return( 
        <Box padding={'20px'} sx={{display:'flex', justifyContent:'space-between', alignItems:"center", backgroundColor:'primary.main', color:'white'}}>
            <Typography>
                @{format(new Date(), "yyyy")} 
                <span style={{marginLeft:'20px'}}>
                    by decimetr
                </span>
            </Typography>
            <Box
                    sx={{display:'flex', gap:'15px'}}
                    >
                    
                    <TelegramIcon sx={{cursor:'pointer'}}/>
                    <InstagramIcon sx={{cursor:'pointer'}}/>
                    <YouTube sx={{cursor:'pointer'}}/>
            </Box>
        </Box>
    );

};
export default Footer;