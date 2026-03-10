import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { restaurantMarketingConsultantGurgaonContent } from '@/data/growth-pages/restaurant-marketing-consultant-gurgaon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: restaurantMarketingConsultantGurgaonContent.metadata.title,
    description: restaurantMarketingConsultantGurgaonContent.metadata.description,
};

export default function RestaurantMarketingConsultantGurgaon() {
    return <GrowthPageTemplate content={restaurantMarketingConsultantGurgaonContent} />;
}
