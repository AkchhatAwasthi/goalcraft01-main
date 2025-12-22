import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { zomatoOrdersGrowthDehradunContent } from '@/data/growth-pages/increase-zomato-orders-dehradun';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: zomatoOrdersGrowthDehradunContent.metadata.title,
    description: zomatoOrdersGrowthDehradunContent.metadata.description,
};

export default function ZomatoOrdersGrowthDehradun() {
    return <GrowthPageTemplate content={zomatoOrdersGrowthDehradunContent} />;
}
