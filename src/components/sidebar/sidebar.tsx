import { data, navItems } from "@/config/constants"
import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import { Fragment } from "react"
import Image from 'next/image';
import { format } from "date-fns";

const Sidebar = () => {
  return (
    <>
    <Box width={{xs:'100%', md:'30%'}}>
        <Box  position={'sticky'} top="100px" sx={{transition:'all .9s ease'}}>
            <Box sx={{padding:'20px', border:"1px solid gray", borderRadius:'8px'}}>
                <Typography variant="h5">Latest blog</Typography>
                <Box sx={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                    {data.map(item =>(
                        <Box key={item.title} marginTop={'20px'}>
                            <Box sx={{display:'flex', alignItems: 'center', gap:'10px'}}>
                                <Image src={item.image} alt={item.title} width={100} height={100} style={{objectFit:"cover", borderRadius:'8px'}}/>
                                <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                    <Typography variant="body1">{item.title}</Typography>
                                    <Box sx={{display:'flex', gap:'10px'}}>
                                        <Avatar alt={item.author.name} src={item.author.image} />
                                        <Box>
                                            <Typography variant="body2">{item.author.name}</Typography>
                                            <Typography sx={{opacity:'.4'}}>{format(new Date(), 'dd MMM,  yyyy')}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider sx={{marginTop:'20px'}}/>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ marginTop:'20px',  padding:'20px', border:"1px solid gray", borderRadius:'8px'}}>
                <Typography variant="h5">Category</Typography>
                <Box sx={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                    {navItems.map(nav=>
                        (
                            <Fragment key={nav.route} >
                                <Button fullWidth   sx={{justifyContent:"flex-start", height:'50px'}}>{nav.label}</Button>
                                <Divider/>
                            </Fragment>
                        )
                    )}
                </Box>
            </Box>
        </Box>
    </Box>
    
    </>
  )
}

export default Sidebar