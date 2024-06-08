import { BlogsType } from '@/components/interfaces/blogs.interface';
import { categoriesType } from '@/components/interfaces/category.interface';
import {request, gql} from 'graphql-request' 
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string; 

export const BlogsService = {
    async GetAllBlogs(){
        const query = gql`
        query GetBlogs {
        blogs {
            excerpt
            id
            slug
            tittle
            createdAt
            image {
            url
            }
            description {
                text
            }
            author {
            name
            avatar {
                url
            }
            }
            category {
            label
            slug
            }
        }
        }`;
        const result = await request<{blogs:BlogsType[]}>(graphqlAPI, query);
        return result.blogs;
    },
    async getLatestBlog(){
        const query=gql`
        query GetLastBlog {
        blogs(last: 2) {
            id
            slug
            tittle
            createdAt
            image {
            url
            }
            description {
                text
            }
            author {
            name
            avatar {
                url
            }
            }
        }
        }`;
        const result = await request<{blogs:BlogsType[]}>(graphqlAPI, query);
        return result.blogs;
    },
    async GetCategories(){
        const query = gql`
        query getCategories {
            categories {
                label
                slug
            }
        }`;
        const result = await request<{categories:categoriesType[]}>(graphqlAPI, query);
        return result.categories;
    }
}