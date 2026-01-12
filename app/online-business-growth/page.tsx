import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { onlineBusinessGrowthContent } from '@/data/growth-pages/online-business-growth';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: onlineBusinessGrowthContent.metadata.title,
    description: onlineBusinessGrowthContent.metadata.description,
};

export default function OnlineBusinessGrowth() {
    return <GrowthPageTemplate content={onlineBusinessGrowthContent} />;
}
