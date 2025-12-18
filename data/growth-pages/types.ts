// Type definitions for growth page content

export interface PageMetadata {
    title: string;
    description: string;
}

export interface HeroContent {
    heading: {
        line1: string;
        highlightedBrand1: string;
        highlightedBrand2: string;
        line2: string;
    };
    subheading: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    floatingCard: {
        emoji: string;
        label: string;
        value: string;
    };
}

export interface CollaborationContent {
    badge: string;
    heading: string;
    description: string;
    images: {
        main: string;
        top: string;
        bottom: string;
    };
}

export interface MenuScoreContent {
    heading: string;
    before: {
        label: string;
        imageUrl: string;
        imageAlt: string;
        score: string;
        description: string;
    };
    after: {
        label: string;
        imageUrl: string;
        imageAlt: string;
        score: string;
        description: string;
    };
    buttonText: string;
}

export interface MenuFactor {
    iconName: 'trash' | 'image' | 'utensils' | 'file';
    title: string;
    description: string;
}

export interface MenuFactorsContent {
    heading: {
        line1: string;
        highlightedBrand1: string;
        highlightedBrand2: string;
    };
    factors: MenuFactor[];
}

export interface BoostFeature {
    title: string;
    description: string;
}

export interface BoostSystemContent {
    heading: string;
    subheading: string;
    features: BoostFeature[];
    buttonText: string;
}

export interface Value {
    title: string;
    description: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface ValuesContent {
    heading: string;
    values: Value[];
    stats: Stat[];
    buttonText: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface FAQContent {
    heading: string;
    subheading: string;
    faqs: FAQ[];
}

export interface WhyChooseCard {
    title: string;
    color: 'red' | 'orange';
    description: string;
    features: string[];
}

export interface WhyChooseContent {
    heading: string;
    subheading: string;
    cards: WhyChooseCard[];
}

export interface GrowthPageContent {
    metadata: PageMetadata;
    hero: HeroContent;
    collaboration: CollaborationContent;
    menuScore: MenuScoreContent;
    menuFactors: MenuFactorsContent;
    boostSystem: BoostSystemContent;
    values: ValuesContent;
    faq: FAQContent;
    whyChoose: WhyChooseContent;
}
