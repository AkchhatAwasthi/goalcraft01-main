import GrowthPageTemplate from '@/components/GrowthPageTemplate';
import { swiggyOrdersGrowthDehradunContent } from '@/data/growth-pages/increase-swiggy-orders-dehradun';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: swiggyOrdersGrowthDehradunContent.metadata.title,
    description: swiggyOrdersGrowthDehradunContent.metadata.description,
};

export default function SwiggyOrdersGrowthDehradun() {
    return <GrowthPageTemplate content={swiggyOrdersGrowthDehradunContent} />;
}
