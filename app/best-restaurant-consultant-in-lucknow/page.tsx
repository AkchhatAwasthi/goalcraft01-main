import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { bestRestaurantConsultantLucknowContent } from '@/data/growth-pages/best-restaurant-consultant-in-lucknow';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: bestRestaurantConsultantLucknowContent.metadata.title,
    description: bestRestaurantConsultantLucknowContent.metadata.description,
};

export default function BestRestaurantConsultantLucknow() {
    return <GrowthPageTemplate content={bestRestaurantConsultantLucknowContent} />;
}
