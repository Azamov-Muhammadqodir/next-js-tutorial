import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from "@mui/material"
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import {format} from 'date-fns';

const Hero = () => {
  return (
    <Box width={"100%"} height={"70vh"} sx={{backgroundColor:"red"}}>
        <Carousel 
            responsive={{
                mobile: {
                    breakpoint: { max: 4000, min: 0 },
                    items: 1
                },
            }}
        >
        {data.map(item =>
            (
                <Box key={item.image}>
                    <Box  sx={{position:'relative', width:'100%', height:'70vh'}}>
                        <Image src={item.image} alt={item.title} fill  style={{objectFit:"cover"}}/>
                        <Box sx={{position:'absolute', top:0, left:0, bottom:0, right:0, width:'100%', height:'100%', backgroundColor:'rgba(0, 0, 0, .6)'}}/>
                            
                        <Box width={{xs: "100%", sm:"70%"}}
                        sx={{top: '50%', transform:'translateY(-50%)', paddingLeft:{xs:'10px', sm:'50px'}}} position={"relative"} zIndex={999} color={'white'}>
                            <Typography variant='h2'>
                                {item.title}
                            </Typography>
                            <Typography variant='h5'>
                                {item.excerpt}
                            </Typography>
                            <Box sx={{display:'flex', gap:'10px', marginTop:'20px'}}>
                                <Avatar alt={item.author.name} src={item.author.image} />
                                <Box>
                                    <Typography>{item.author.name}</Typography>
                                    <Typography>{format(new Date(), 'dd MM,  yyyy')} &#x2022; 10 min read</Typography>
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

const data =[
    {
        image: 'https://suret.pics/uploads/posts/2023-09/1695194779_1.jpg',
        title: 'JavaScript Basics',
        excerpt: 'Learn the fundamentals of JavaScript, the most popular programming language.',
        author: {
            name: 'John Doe',
            image: 'https://suret.pics/uploads/posts/2023-09/1695046553_1.jpg',
        }
    },
    {
        image: 'https://suret.pics/uploads/posts/2023-09/1695194727_2-3.jpg',
        title: 'Advanced CSS Techniques',
        excerpt: 'Explore advanced CSS techniques to create stunning web pages.',
        author: {
            name: 'Jane Smith',
            image: 'https://suret.pics/uploads/posts/2023-09/1695046553_1.jpg',
        }
    },
    {
        image: 'https://suret.pics/uploads/posts/2023-09/1695194727_2-3.jpg',
        title: 'Understanding React',
        excerpt: 'A deep dive into React, a powerful JavaScript library for building user interfaces.',
        author: {
            name: 'Emily Johnson',
            image: 'https://suret.pics/uploads/posts/2023-09/1695046553_1.jpg',
        }
    },
    {
        image: 'https://suret.pics/uploads/posts/2023-09/1695194769_2-4.jpg',
        title: 'Node.js in Practice',
        excerpt: 'Learn how to build scalable network applications using Node.js.',
        author: {
            name: 'Michael Brown',
            image: 'https://suret.pics/uploads/posts/2023-09/1695046553_1.jpgy',
        }
    },
]

