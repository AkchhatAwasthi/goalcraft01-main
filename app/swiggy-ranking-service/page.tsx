import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { swiggyRankingServiceContent } from '@/data/growth-pages/swiggy-ranking-service';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: swiggyRankingServiceContent.metadata.title,
    description: swiggyRankingServiceContent.metadata.description,
};

export default function SwiggyRankingService() {
    return <GrowthPageTemplate content={swiggyRankingServiceContent} />;
}
