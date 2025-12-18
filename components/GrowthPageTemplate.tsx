"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GrowthHero from './GrowthHero';
import CollaborationSection from './CollaborationSection';
import MenuScoreSection from './MenuScoreSection';
import MenuFactorsSection from './MenuFactorsSection';
import BoostSystemSection from './BoostSystemSection';
import ValuesSection from './ValuesSection';
import FAQSection from './FAQSection';
import { GrowthPageContent } from '@/data/growth-pages/types';

interface GrowthPageTemplateProps {
    content: GrowthPageContent;
}

const GrowthPageTemplate: React.FC<GrowthPageTemplateProps> = ({ content }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-grow">
                <GrowthHero content={content.hero} />
                <CollaborationSection content={content.collaboration} />
                <MenuScoreSection content={content.menuScore} />
                <MenuFactorsSection content={content.menuFactors} />
                <BoostSystemSection content={content.boostSystem} />
                <ValuesSection content={content.values} />
                <FAQSection content={content.faq} />

                {/* Why Choose Us Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">{content.whyChoose.heading}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {content.whyChoose.subheading}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {content.whyChoose.cards.map((card, index) => (
                            <div
                                key={index}
                                className="p-8 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow"
                            >
                                <h2 className={`text-2xl font-bold mb-4 ${card.color === 'red' ? 'text-red-500' : 'text-orange-500'}`}>
                                    {card.title}
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    {card.description}
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                    {card.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GrowthPageTemplate;
