export async function fetchBlogPosts() {
    try {
        const response = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json');
        if (!response.ok) {
            throw new Error('Network response problem');
        }
        const data = await response.json();
        
        //uncomment the following lines to simulate an error
        /*return new Promise((resolve, reject) => {
            reject('Simulated fetch error'); // Simulate an error
        });*/

        return data.slice(0, 10);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
