import { Sidebar } from "@/components";
import { BlogsType } from "@/components/interfaces/blogs.interface";
import { categoriesType } from "@/components/interfaces/category.interface";
import { calculatesEstimatedTimeToRead } from "@/helpers/time.format";
import Layout from "@/layuot/layout";
import { BlogsService } from "@/services/blog.service";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from 'next/image';

const DetailedBlogPage = ({blog, latestBlogs, categories}: DetailedBlogPageProps) => {
  return (
    <Layout>
      <Box sx={{display:'flex', gap:'20px', flexDirection:{xs:'column', md:'row'}, padding:"20px"}}>
        
        <Box width={{xs:'100%', md:'70%'}}>
          <Box sx={
            {
              backgroundColor:'black',
              padding:'20px',
              borderRadius:'8px',
              boxShadow:'0px 8px 16px rgba(255,255,255,.2)', 
            }
          }
              position={'relative'} 
              width={'100%'} 
              height={{xs:'30vh', md:'50vh'}}>

          <Image src={blog.image.url} alt={blog.author.name} fill style={{objectFit: 'cover', borderRadius:'10px'}}/>
          </Box>
          <Box display={'flex'} flexDirection={'column'} rowGap={'10px'}>
          <Box sx={{display:'flex', gap:'10px', marginTop:'40px'}}>
            <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
              <Box>
                <Typography variant="body2">{blog.author.name}</Typography>
                <Typography sx={{opacity:'.4'}}>{format(blog.createdAt, 'dd MMM,  yyyy')} &#x2022; {calculatesEstimatedTimeToRead(blog.description.text)} min read</Typography>
              </Box>
            </Box>
            <Typography variant="h3">{blog.tittle}</Typography>
            <Typography variant="body1" color={'gray'}>{blog.excerpt}</Typography>
            <Divider sx={{marginTop:'5px'}}/>
            <div style={{opacity:'.8'}} dangerouslySetInnerHTML={{__html: blog.description.html}}/>
            
          </Box>
        </Box>
        <Sidebar latestBlogs={latestBlogs} categories={categories}/>
      </Box>
    </Layout>
  )
}

export default DetailedBlogPage;


export const getServerSideProps : GetServerSideProps<DetailedBlogPageProps> = async ({query}) =>{
  const blog = await BlogsService.GetDetailedBlogs(query.slug as string);
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.GetCategories();
  return {
    props:{
      blog,
      latestBlogs,
      categories,
    }
  }
} ;
interface DetailedBlogPageProps{
  blog: BlogsType;
  latestBlogs: BlogsType[];
  categories:categoriesType[];
}



