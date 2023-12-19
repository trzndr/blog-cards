import React from 'react';
import '../style.scss';
import { BlogPost } from '../interfaces/types';
import { formatDate } from '../utils/formatDate';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const { title, link, featured_media, date, _embedded } = post;
    const authorName = _embedded?.author?.[0]?.name ?? 'unknown author';
    const authorLink = _embedded?.author?.[0]?.link ?? '#';
    const safeLink = link || '#';
    const safeTitle = title.rendered || '<unknown title>';

    const findTopicName = (embedded: BlogPost['_embedded']) => {
        const topicTerm = embedded['wp:term'];
        if (Array.isArray(topicTerm)) {
            const topic = topicTerm.flat().find(term => term.taxonomy === 'topic');
            if (topic) {
                return topic.name;
            }
        }
        return '<unknown topic>';
    };

    return (
        <div className="col-4 col-medium-2 blog-p-card">

            <header className="blog-p-card__header">
                {findTopicName(_embedded)}
            </header>

            <div className="blog-p-card__content">
                <div className="u-crop--16-9">
                    <a href={link} aria-hidden="true">
                        <div className="lazyloaded" data-noscript="">
                            <img alt={safeTitle} loading="lazy" src={featured_media} />
                        </div>
                    </a>
                </div>

                <h3 className='p-heading--4 full-height'>
                    <a href={safeLink}>{safeTitle}</a>
                </h3>

                <p className='blog-p-card__author'>
                    <em>By <a href={authorLink}>{authorName}</a> on {formatDate(date)}</em>
                </p>
            </div>

            <p className="blog-p-card__footer">Article</p>

        </div>
    );
};

export default BlogCard;
