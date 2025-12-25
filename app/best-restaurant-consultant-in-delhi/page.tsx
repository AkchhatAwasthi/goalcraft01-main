import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { bestRestaurantConsultantDelhiContent } from '@/data/growth-pages/best-restaurant-consultant-in-delhi';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: bestRestaurantConsultantDelhiContent.metadata.title,
    description: bestRestaurantConsultantDelhiContent.metadata.description,
};

export default function BestRestaurantConsultantDelhi() {
    return <GrowthPageTemplate content={bestRestaurantConsultantDelhiContent} />;
}
