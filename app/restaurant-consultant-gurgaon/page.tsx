import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { restaurantConsultantGurgaonContent } from '@/data/growth-pages/restaurant-consultant-gurgaon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: restaurantConsultantGurgaonContent.metadata.title,
    description: restaurantConsultantGurgaonContent.metadata.description,
};

export default function RestaurantConsultantGurgaon() {
    return <GrowthPageTemplate content={restaurantConsultantGurgaonContent} />;
}
