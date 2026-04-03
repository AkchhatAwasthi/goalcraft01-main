import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { bestRestaurantConsultantGurgaonContent } from '@/data/growth-pages/best-restaurant-consultant-in-gurgaon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: bestRestaurantConsultantGurgaonContent.metadata.title,
    description: bestRestaurantConsultantGurgaonContent.metadata.description,
    alternates: {
        canonical: 'https://www.goalcraft.in/best-restaurant-consultant-in-gurgaon',
    },
    openGraph: {
        title: bestRestaurantConsultantGurgaonContent.metadata.title,
        description: bestRestaurantConsultantGurgaonContent.metadata.description,
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.goalcraft.in/best-restaurant-consultant-in-gurgaon',
    },
};

export default function BestRestaurantConsultantGurgaon() {
    return <GrowthPageTemplate content={bestRestaurantConsultantGurgaonContent} />;
}
