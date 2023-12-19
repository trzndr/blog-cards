import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '../interfaces/types';
import { fetchBlogPosts } from '../services/BlogService';

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBlogPosts()
            .then(data => {
                setPosts(data as BlogPost[]);
                setError(null);
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Failed to fetch blog posts.');
            });
    }, []);

    if (error) {
        return (
            <div className="p-notification--negative error-message-container">
                <div className="p-notification__content">
                    <h5 className="p-notification__title">Error</h5>
                    <p className="p-notification__message">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className='row u-equal-height u-clearfix'>
            {posts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;