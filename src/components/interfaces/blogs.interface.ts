export interface BlogsType{
    excerpt: string;
            id:string;
            slug:string;
            tittle:string;  
            createdAt:Date;
            image: {
            url:string;
            }
            author: {
            name:string;
            avatar: {
                url:string;
            }
            }
            category: {
            label:string;
            slug:string;
            }
            description: {
                text: string;
              }
            }

}