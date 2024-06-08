import { BlogsType } from "../interfaces/blogs.interface";
import { categoriesType } from "../interfaces/category.interface";

export interface SideBarProps{
    latestBlogs:BlogsType[];
    categories:categoriesType[];
}