import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { zomatoRankingServiceDehradunContent } from '@/data/growth-pages/zomato-ranking-service-in-dehradun';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: zomatoRankingServiceDehradunContent.metadata.title,
    description: zomatoRankingServiceDehradunContent.metadata.description,
};

export default function ZomatoRankingServiceDehradun() {
    return <GrowthPageTemplate content={zomatoRankingServiceDehradunContent} />;
}
