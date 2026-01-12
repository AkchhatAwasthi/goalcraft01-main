import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { zomatoSwiggyBusinessGrowthContent } from '@/data/growth-pages/zomato-swiggy-business-growth';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: zomatoSwiggyBusinessGrowthContent.metadata.title,
    description: zomatoSwiggyBusinessGrowthContent.metadata.description,
};

export default function ZomatoSwiggyBusinessGrowth() {
    return <GrowthPageTemplate content={zomatoSwiggyBusinessGrowthContent} />;
}
