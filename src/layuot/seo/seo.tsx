import Head from "next/head"
import { SeoProps } from "./seo.props"
import { siteconfig } from "@/config/site.config"


const SEO = ({children, metaDescription=siteconfig.metaDescription, metaKeywords=siteconfig.metaKeywords, metaTitle = siteconfig.metaTitle, author=siteconfig.author}: SeoProps) => {
  return (
    <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
            <title>{metaTitle}</title>
            <meta httpEquiv="X-UA-Compatible" content='ie-edge'/>
            <meta name="keyword" content={metaKeywords}/>
            <meta name="author" content={author}/>
            <meta name="description" content={metaDescription}/>
            <link rel="shortcut icon" href="/vercel.svg" type="image/x-icon" />
        </Head>
        {children}
    </>
  )
}

export default SEO;