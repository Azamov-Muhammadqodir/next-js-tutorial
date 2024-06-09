import { Content, Sidebar } from '@/components';
import { BlogsType } from '@/components/interfaces/blogs.interface';
import { categoriesType } from '@/components/interfaces/category.interface';
import Layout from '@/layuot/layout'
import { BlogsService } from '@/services/blog.service';
import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import React from 'react'

const CategoryDetailedPage = ({blogs,   latestBlogs,    categories,}:DetailedCategoriesBlogPageProps) => {
  return (
    <Layout>
        <Box sx={{display:'flex', gap:'20px', flexDirection:{xs:'column', md:'row'}, padding:"20px"}}>
            <Sidebar latestBlogs={latestBlogs} categories={categories}/>
            <Content blogs={blogs}/>
        </Box>
    </Layout>
  )
}

export default CategoryDetailedPage;
export const getServerSideProps : GetServerSideProps<DetailedCategoriesBlogPageProps> = async ({query}) =>{
    const blogs = await BlogsService.GetCategoriesBlog(query.slug as string);
    const latestBlogs = await BlogsService.getLatestBlog();
    const categories = await BlogsService.GetCategories();
    return {
      props:{
        blogs,
        latestBlogs,
        categories,
      }
    }
  } ;
  interface DetailedCategoriesBlogPageProps{
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories:categoriesType[];
  }