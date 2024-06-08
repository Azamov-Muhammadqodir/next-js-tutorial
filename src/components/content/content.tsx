import { data } from "@/config/constants"
import { Avatar, Box, Divider, Typography } from "@mui/material"
import { format } from "date-fns";
import Image from 'next/image';

const Content = () => (
  <Box width={{xs:'100%', md:'70%'}}>
    {data.map(item =>(
      <Box key={item.image} sx={{backgroundColor:'rgba(0,0,0,.4)', padding:'20px', marginTop:'20px', borderRadius:'8px', boxShadow:'0px 8px 16px rgba(255,255,255,.2)'}}>
        <Box  position={'relative'} width={'100%'} sx={{height:{xs:'30vh', md:'50vh'}}}>
          <Image  src={item.image} alt={item.author.name} fill style={{objectFit: 'cover', borderRadius:'10px'}}/>
        </Box>
        <Typography variant="h4" marginTop={'30px'}>{item.title}</Typography>
        <Typography variant="body2" color={'gray'}>{item.excerpt}</Typography>
        <Divider sx={{marginTop:'30px'}}/>
        <Box sx={{display:'flex', gap:'10px', marginTop:'20px'}}>
          <Avatar alt={item.author.name} src={item.author.image} />
            <Box>
              <Typography variant="body2">{item.author.name}</Typography>
              <Typography sx={{opacity:'.4'}}>{format(new Date(), 'dd MMM,  yyyy')}</Typography>
                </Box>
            </Box>
      </Box>
    
    ))}
  </Box>
)

export default Content