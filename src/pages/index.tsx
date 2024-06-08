import { Content, Hero, Sidebar } from "@/components"
import { BlogsType } from "@/components/interfaces/blogs.interface"
import { categoriesType } from "@/components/interfaces/category.interface"
import Layout from "@/layuot/layout"
import { BlogsService } from "@/services/blog.service"
import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"



const IndexPage = ({blogs, latestBlogs, categories}: HomePageProps) =>{



  return (
  <Layout>
  <Hero blogs={blogs.slice(0,3)}/>
  <Box sx={{display:'flex', gap:'20px', flexDirection:{xs:'column', md:'row'}, padding:"20px"}}>
      <Sidebar latestBlogs={latestBlogs} categories={categories}/>
      <Content blogs={blogs}/>
  </Box>
  </Layout>
  ); 
};
export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async() => {

  const blogs = await BlogsService.GetAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.GetCategories();

  return {
    props:{
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface HomePageProps{
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: categoriesType[];
}