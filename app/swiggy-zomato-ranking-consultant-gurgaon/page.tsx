import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { swiggyZomatoRankingConsultantGurgaonContent } from '@/data/growth-pages/swiggy-zomato-ranking-consultant-gurgaon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: swiggyZomatoRankingConsultantGurgaonContent.metadata.title,
    description: swiggyZomatoRankingConsultantGurgaonContent.metadata.description,
};

export default function SwiggyZomatoRankingConsultantGurgaon() {
    return <GrowthPageTemplate content={swiggyZomatoRankingConsultantGurgaonContent} />;
}
