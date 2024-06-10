import Layout from "@/layuot/layout";
import { BlogsType } from "../../components/interfaces/blogs.interface";


import { GetServerSideProps } from "next";
import { BlogsService } from "@/services/blog.service";
import { Content } from "@/components"
import { Box } from "@mui/material";
import SEO from "@/layuot/seo/seo";

const BlogPage = ({blogs}: BlogPageProps) => {
  return (
    <SEO metaTitle="All Blogs">
        <Layout>
            <Box sx={{display:'flex', gap:'20px', flexDirection:{xs:'column', md:'row'}, padding:"20px", justifyContent:'center'}}>
                <Content blogs={blogs} />
            </Box>
        </Layout>
    </SEO>
    
  )
}

export default BlogPage;

interface BlogPageProps{
    blogs:BlogsType[];
}


export const getServerSideProps: GetServerSideProps<BlogPageProps> = async() => {

    const blogs = await BlogsService.GetAllBlogs();
  
    return {
      props:{
        blogs,
      },
    };
  };