import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { swiggyZomatoGrowthContent } from '@/data/growth-pages/swiggy-zomato-growth';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: swiggyZomatoGrowthContent.metadata.title,
    description: swiggyZomatoGrowthContent.metadata.description,
};

export default function SwiggyZomatoGrowth() {
    return <GrowthPageTemplate content={swiggyZomatoGrowthContent} />;
}
