//JSON structure of the blog post
export interface BlogPost {
    id: number;
    title: { rendered: string };
    link: string;
    featured_media: string;
    date: string;
    _embedded: {
        author: {
            name: string,
            link: string
        }[];
        'wp:term': {
            taxonomy: string;
            name: string;
        }[][];
    };
}