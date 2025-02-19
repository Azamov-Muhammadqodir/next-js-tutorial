import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from "@mui/material"
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import {format} from 'date-fns';
import { HeroPropsType } from './hero.props';
import { calculatesEstimatedTimeToRead } from '@/helpers/time.format';
import { useRouter } from 'next/router';

const Hero = ({blogs}:HeroPropsType) => {
const router = useRouter();
  return (
    <Box mt={'11vh'} width={"100%"} height={"70vh"}>
        <Carousel 
            responsive={{
                mobile: {
                    breakpoint: { max: 4000, min: 0 },
                    items: 1
                },
            }}
        >
        {blogs.map(item =>
            (
                <Box sx={{cursor:'pointer'}}   key={item.id} onClick={()=>{
                    router.push(`/blog/${item.slug}`);
                    }}>
                    <Box  sx={{position:'relative', width:'100%', height:'70vh'}}>
                        <Image src={item.image.url} alt={item.tittle} fill  style={{objectFit:"cover"}}/>
                        <Box sx={{position:'absolute', top:0, left:0, bottom:0, right:0, width:'100%', height:'100%', backgroundColor:'rgba(0, 0, 0, .6)'}}/>
                            
                        <Box width={{xs: "100%", md:"70%"}}
                        sx={{top: '50%', transform:'translateY(-50%)', paddingLeft:{xs:'10px', md:'50px'}}} position={"relative"} zIndex={999} color={'white'}>
                            <Typography sx={{fontSize:{xs:'30px', md:'50px'}}}>
                                {item.tittle}
                            </Typography>
                            <Typography color={"gray"} sx={{
                                fontSize:{xs:'15px', md:'30px'}
                                }}>
                                {item.excerpt}
                            </Typography>
                            <Box sx={{display:'flex', gap:'10px', marginTop:'20px'}}>
                                <Avatar alt={item.author.name} src={item.author.avatar.url} />
                                <Box>
                                    <Typography>{item.author.name}</Typography>
                                    <Typography>{format(new Date(item.createdAt), 'dd MMM,  yyyy')} &#x2022; {calculatesEstimatedTimeToRead(item.description.text)} min read</Typography>
                                </Box>
                                
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>
            )
        )}    
        </Carousel>
    </Box>
  )
}





export default Hero;
