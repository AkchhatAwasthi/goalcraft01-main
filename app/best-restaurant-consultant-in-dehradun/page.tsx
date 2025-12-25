import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { bestRestaurantConsultantDehradunContent } from '@/data/growth-pages/best-restaurant-consultant-in-dehradun';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: bestRestaurantConsultantDehradunContent.metadata.title,
    description: bestRestaurantConsultantDehradunContent.metadata.description,
};

export default function BestRestaurantConsultantDehradun() {
    return <GrowthPageTemplate content={bestRestaurantConsultantDehradunContent} />;
}
