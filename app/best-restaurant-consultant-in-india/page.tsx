import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { bestRestaurantConsultantIndiaContent } from '@/data/growth-pages/best-restaurant-consultant-in-india';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: bestRestaurantConsultantIndiaContent.metadata.title,
    description: bestRestaurantConsultantIndiaContent.metadata.description,
};

export default function BestRestaurantConsultantIndia() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "GoalCraft",
        "image": bestRestaurantConsultantIndiaContent.hero.imageUrl,
        "description": bestRestaurantConsultantIndiaContent.metadata.description,
        "url": "https://goalcraft.in/best-restaurant-consultant-in-india",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "areaServed": [
            { "@type": "City", "name": "Delhi NCR" },
            { "@type": "City", "name": "Mumbai" },
            { "@type": "City", "name": "Bengaluru" },
            { "@type": "City", "name": "Pune" },
            { "@type": "City", "name": "Hyderabad" },
            { "@type": "City", "name": "Chennai" },
            { "@type": "City", "name": "Kolkata" },
            { "@type": "City", "name": "Jaipur" },
            { "@type": "City", "name": "Lucknow" },
            { "@type": "City", "name": "Ahmedabad" },
            { "@type": "City", "name": "Dehradun" },
            { "@type": "City", "name": "Chandigarh" }
        ],
        "knowsAbout": [
            "Restaurant Consulting",
            "F&B Marketing",
            "Swiggy Growth Strategy",
            "Zomato Ranking Optimization",
            "Menu Engineering",
            "Food Cost Optimization",
            "Cloud Kitchen Expansion"
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": bestRestaurantConsultantIndiaContent.faq.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <GrowthPageTemplate content={bestRestaurantConsultantIndiaContent} />
        </>
    );
}
