import { data } from "@/config/constants"
import { Avatar, Box, Divider, Typography } from "@mui/material"
import { format } from "date-fns";
import Image from 'next/image';
import { ContentProps } from "./content.props";
import { calculatesEstimatedTimeToRead } from "@/helpers/time.format";

const Content = ({blogs }: ContentProps) => (
  <Box width={{xs:'100%', md:'70%'}}>
    {blogs.map(item =>(
      <Box key={item.id} sx={{backgroundColor:'rgba(0,0,0,.4)', padding:'20px', marginTop:'20px', borderRadius:'8px', boxShadow:'0px 8px 16px rgba(255,255,255,.2)'}}>
        <Box  position={'relative'} width={'100%'} sx={{height:{xs:'30vh', md:'50vh'}}}>
          <Image  src={item.image.url} alt={item.author.name} fill style={{objectFit: 'cover', borderRadius:'10px'}}/>
        </Box>
        <Typography variant="h4" marginTop={'30px'}>{item.excerpt}</Typography>
        <Typography variant="body2" color={'gray'}>{item.excerpt}</Typography>
        <Divider sx={{marginTop:'30px'}}/>
        <Box sx={{display:'flex', gap:'10px', marginTop:'20px'}}>
          <Avatar alt={item.author.name} src={item.author.avatar.url} />
            <Box>
              <Typography variant="body2">{item.author.name}</Typography>
              <Typography sx={{opacity:'.4'}}>{format(item.createdAt, 'dd MMM,  yyyy')} &#x2022; {calculatesEstimatedTimeToRead(item.description.text)} min read</Typography>
                </Box>
            </Box>
      </Box>
    
    ))}
  </Box>
)

export default Content