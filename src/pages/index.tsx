import Layout from "@/layuot/layout"
import { Button } from "@mui/material"
import Head from "next/head"

const IndexPage = () =>{
  return (
  <Layout>
  <Head>
    <title>
       Birinchi sahifa
    </title>
  </Head>
    <Button variant='contained'>Click</Button>
  </Layout>
  )
}
export default IndexPage