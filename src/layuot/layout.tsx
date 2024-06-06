import { Navbar, Footer } from "@/components";
import { LayoutProps } from "./layout.props";
import { Box } from "@mui/material";

const Layout = ({children}: LayoutProps):JSX.Element=>{
    return <>
        <Navbar/>
        <Box minHeight={'100vh'}>{children}</Box>
        <Footer/>
    </>
}
export default Layout;

