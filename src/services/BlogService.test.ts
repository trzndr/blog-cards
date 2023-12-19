import * as BlogService from './BlogService';

describe('BlogService', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    it('fetchBlogPosts successfully fetches data', async () => {
        const mockResponse = [{
            id: 1,
            title: { rendered: "Post Title 1" },
            link: "http://example.com/post1",
            featured_media: "http://example.com/media1.jpg",
            date: "2023-01-01",
            _embedded: {
                author: [{ name: "Author 1", link: "http://example.com/author1" }],
                'wp:term': [[{ taxonomy: 'people', name: 'PEOPLE AND CULTURE' }]]
            }
        },
        {
            id: 2,
            title: { rendered: "Post Title 2" },
            link: "http://example.com/post2",
            featured_media: "http://example.com/media2.jpg",
            date: "2023-01-02",
            _embedded: {
                author: [{ name: "Author 2", link: "http://example.com/author2" }],
                'wp:term': [[{ taxonomy: 'announcements', name: 'CANONICAL ANNOUNCEMENTS' }]]
            }
        }];

        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        });

        const data = await BlogService.fetchBlogPosts();
        expect(data).toEqual(mockResponse);
    });

    it('fetchBlogPosts handles network error', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
        });

        await expect(BlogService.fetchBlogPosts()).rejects.toThrow('Network response problem');
    });

});
