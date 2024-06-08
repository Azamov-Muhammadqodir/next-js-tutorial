import { Content, Hero, Sidebar } from "@/components"
import Layout from "@/layuot/layout"
import { Box } from "@mui/material"

const IndexPage = () =>{
  return (
  <Layout>
  <Hero/>
  <Box sx={{display:'flex', gap:'20px', flexDirection:{xs:'column', md:'row'}, padding:"20px"}}>
      <Sidebar/>
      <Content/>
  </Box>
  </Layout>
  )
}
export default IndexPage