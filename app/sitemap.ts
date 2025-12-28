import { MetadataRoute } from 'next'
import { blogPosts } from '@/app/data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://goalcraft.in'

    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // Restaurant Consultant Pages
        {
            url: `${baseUrl}/best-restaurant-consultant-in-dehradun`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/best-restaurant-consultant-in-delhi`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/best-restaurant-consultant-in-lucknow`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Swiggy Services
        {
            url: `${baseUrl}/increase-swiggy-orders-dehradun`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/swiggy-ranking-service`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/swiggy-ranking-service-in-dehradun`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Zomato Services
        {
            url: `${baseUrl}/increase-zomato-orders-dehradun`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/zomato-ranking-service-in-dehradun`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Combined Growth Services
        {
            url: `${baseUrl}/swiggy-zomato-growth`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...blogEntries,
    ]
}
