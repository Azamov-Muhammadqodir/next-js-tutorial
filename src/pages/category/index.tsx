import { categoriesType } from "@/components/interfaces/category.interface";
import Layout from "@/layuot/layout"
import { BlogsService } from "@/services/blog.service";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const CategoryPage = ({categories}: CategoryPageProps) => {
    const router = useRouter();
  return (
    <Layout>
        <Box 
        height={{xs:'30vh', md:'50vh'}}  
        width={{xs:'100%', md:'80% '}}
        marginX={'auto'}
        marginTop={'10vh'}
        borderRadius={'8px'}

        sx={{backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', rowGap:'10px'}}>
                <Typography 
                    variant="h2"
                    fontFamily={'cursive'}>
                    All categories
                </Typography>
                <Box >
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        {categories.map(item=>
                            <Button 
                            onClick={()=>router.push(`/category/${item.slug}`)} 
                            key={item.slug}>#{item.label}</Button>
                        )}
                    </ButtonGroup>
            </Box>
        </Box>
    </Layout>
  )
}

export default CategoryPage;


export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async() => {

    const categories = await BlogsService.GetCategories();
  
    return {
      props:{
        categories,
      },
    };
  };
  
  interface CategoryPageProps{
    categories: categoriesType[];
  }