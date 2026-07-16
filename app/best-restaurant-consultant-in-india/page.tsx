import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndiaFAQAccordion from '@/components/IndiaFAQAccordion';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Restaurant Consultant in India – Zomato & Swiggy Growth Experts | GoalCraft',
    description: "GoalCraft is India's leading restaurant growth consultancy — specialising in Zomato & Swiggy algorithmic ranking, menu engineering, and unit economics. Serving 25+ cities including Delhi NCR, Mumbai, Bengaluru, Lucknow, Hyderabad, and Pune. Get a free growth audit.",
    openGraph: {
        title: 'Best Restaurant Consultant in India | GoalCraft',
        description: 'GoalCraft helps dine-in restaurants, QSRs, and cloud kitchens scale on Zomato & Swiggy — through menu engineering, algorithmic growth, and unit economics consulting across 25+ Indian cities.',
        images: [
            {
                url: '/og-india-consulting.jpg',
                width: 1200,
                height: 630,
                alt: 'Best Restaurant Consultant in India | GoalCraft',
            }
        ]
    }
};

export default function BestRestaurantConsultantIndia() {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "GoalCraft Consultancy",
        "url": "https://goalcraft.in",
        "logo": "https://goalcraft.in/logo.png",
        "description": "India's leading restaurant growth consultancy specialising in Zomato & Swiggy algorithmic ranking, menu engineering, and unit economics for dine-in restaurants, QSRs, and cloud kitchens.",
        "telephone": "+918448447408",
        "email": "info@goalcraft.in",
        "areaServed": ["Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Kolkata", "Lucknow", "Jaipur"],
        "serviceType": ["Restaurant Consulting", "Zomato Growth", "Swiggy Optimization", "Menu Engineering", "Unit Economics"],
        "sameAs": [
            "https://www.instagram.com/goalcraft_consultants"
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does a restaurant consultant in India do?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A restaurant consultant in India helps food businesses improve profitability by auditing menus, optimising Zomato and Swiggy listings, fixing food cost leakages, training staff, and building a scalable growth system. GoalCraft specialises in delivery platform algorithmic growth alongside traditional consulting."
                }
            },
            {
                "@type": "Question",
                "name": "How much does a restaurant consultant charge in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Restaurant consultants in India typically charge between ₹50,000 and ₹5,00,000 depending on scope. GoalCraft engagements begin with a free growth audit to assess your restaurant's specific needs before recommending a consulting plan."
                }
            },
            {
                "@type": "Question",
                "name": "How do you help restaurants increase Zomato and Swiggy orders?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GoalCraft uses a platform-first approach: optimising listing completeness, search term placement, photo quality, review response systems, and promotional structures to improve algorithmic ranking on Zomato and Swiggy — resulting in higher visibility within local delivery radius."
                }
            },
            {
                "@type": "Question",
                "name": "Which formats of restaurants do you consult for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GoalCraft works with dine-in restaurants, quick service restaurants (QSRs), cloud kitchens, casual dining brands, and multi-location chains across India."
                }
            },
            {
                "@type": "Question",
                "name": "In which Indian cities are your consulting services available?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GoalCraft provides restaurant consulting services across 25+ Indian cities including Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Kolkata, Jaipur, and Lucknow."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to see results from restaurant consulting?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most restaurants begin seeing measurable improvements in Zomato and Swiggy order volume within 45 to 90 days of implementing GoalCraft's growth framework. Menu engineering and platform optimisation typically show the fastest results."
                }
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Restaurant Consulting Services in India",
        "provider": {
            "@type": "Organization",
            "name": "GoalCraft Consultancy"
        },
        "serviceType": "Restaurant Business Consulting",
        "areaServed": "India",
        "description": "GoalCraft provides restaurant growth consulting including Zomato and Swiggy optimisation, menu engineering, unit economics analysis, and brand marketing across India."
    };

    const faqs = [
        {
            question: "What does a restaurant consultant in India do?",
            answer: "A restaurant consultant in India helps food businesses improve profitability by auditing menus, optimising Zomato and Swiggy listings, fixing food cost leakages, training staff, and building a scalable growth system. GoalCraft specialises in delivery platform algorithmic growth alongside traditional consulting."
        },
        {
            question: "How much does a restaurant consultant charge in India?",
            answer: "Restaurant consultants in India typically charge between ₹50,000 and ₹5,00,000 depending on scope. GoalCraft engagements begin with a free growth audit to assess your restaurant's specific needs before recommending a consulting plan."
        },
        {
            question: "How do you help restaurants increase Zomato and Swiggy orders?",
            answer: "GoalCraft uses a platform-first approach: optimising listing completeness, search term placement, photo quality, review response systems, and promotional structures to improve algorithmic ranking on Zomato and Swiggy — resulting in higher visibility within local delivery radius."
        },
        {
            question: "Which formats of restaurants do you consult for?",
            answer: "GoalCraft works with dine-in restaurants, quick service restaurants (QSRs), cloud kitchens, casual dining brands, and multi-location chains across India."
        },
        {
            question: "In which Indian cities are your consulting services available?",
            answer: "GoalCraft provides restaurant consulting services across 25+ Indian cities including Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, Kolkata, Jaipur, and Lucknow."
        },
        {
            question: "How long does it take to see results from restaurant consulting?",
            answer: "Most restaurants begin seeing measurable improvements in Zomato and Swiggy order volume within 45 to 90 days of implementing GoalCraft's growth framework. Menu engineering and platform optimisation typically show the fastest results."
        }
    ];

    const serviceCards = [
        {
            title: "Zomato & Swiggy Algorithmic Ranking",
            body: "We optimise your listing completeness, search term placement, photo quality, review velocity, and promotional structure to push your restaurant to the top of local delivery search results. Most clients see ranking improvement within 30–45 days."
        },
        {
            title: "Menu Engineering & Pricing Strategy",
            body: "We audit your full menu using a Stars / Plowhorses / Puzzles / Dogs matrix, then restructure layout, pricing, and item sequencing to increase average order value. We also design region-specific pricing grids for multi-city brands."
        },
        {
            title: "Unit Economics & Food Cost Audit",
            body: "We break down your food cost percentage per SKU, identify waste leakage points in your supply chain, and restructure your margins so your restaurant becomes profitable at current order volumes — before you spend on growth."
        },
        {
            title: "Brand Marketing & Local Search Visibility",
            body: "We build ROI-tied digital campaigns, manage influencer outreach, and set up Google Business Profile optimisation so your restaurant ranks for local search queries alongside delivery platforms."
        }
    ];

    const clientCards = [
        {
            eyebrow: "QSR Chain — Pan-India",
            name: "Lapinos",
            body: "GoalCraft manages end-to-end Zomato & Swiggy growth strategy for Lapinos across all their outlets in India — covering listing optimisation, menu restructuring, and delivery performance across multiple city clusters."
        },
        {
            eyebrow: "Multi-City QSR — Pan-India",
            name: "M.O.E.T.S",
            body: "We handle complete restaurant consulting and platform growth for M.O.E.T.S across their India-wide presence — from unit economics to aggregator ranking strategy at scale."
        },
        {
            eyebrow: "Sweets & Mithai Brand — Lucknow",
            name: "Rajluxmi Sweets",
            body: "GoalCraft drives Zomato & Swiggy visibility and menu engineering for Rajluxmi Sweets in Lucknow — helping one of the city's established sweet brands compete effectively on delivery platforms."
        }
    ];

    const cities = [
        { name: "Delhi NCR", link: "/best-restaurant-consultant-in-delhi" },
        { name: "Mumbai" },
        { name: "Bengaluru" },
        { name: "Hyderabad" },
        { name: "Pune" },
        { name: "Chennai" },
        { name: "Kolkata" },
        { name: "Lucknow", link: "/best-restaurant-consultant-in-lucknow" },
        { name: "Jaipur" },
        { name: "Gorakhpur" },
        { name: "Chandigarh" },
        { name: "Ahmedabad" }
    ];

    const formats = [
        {
            title: "Dine-In Restaurants",
            body: "Full-service restaurants looking to build delivery revenue alongside walk-in covers, improve online ratings, and expand to additional cities."
        },
        {
            title: "Quick Service Restaurants (QSRs)",
            body: "High-volume, delivery-first brands where speed, menu simplicity, and platform ranking determine profitability. We specialise in Zomato/Swiggy SOPs for QSR operations."
        },
        {
            title: "Cloud Kitchens",
            body: "Delivery-only brands with no dine-in footprint. We handle multi-brand cloud kitchen strategy, per-brand P&L structuring, and delivery-radius planning."
        }
    ];

    const heroImageUrl = "https://github.com/AkchhatAwasthi/upscalers-images/blob/main/Design%20a%20minimal,%20professional%20marketing%20banner%20for%20a%20brand%20called%20GoalCraft._Use%20a%20clean%20off-white%20background%20with%20cyan%20and%20teal%20accents._The%20design%20should%20feel%20modern,%20premium,%20and%20data-driven.__Place%20bold,%20high-.jpg?raw=true";

    return (
        <div className="min-h-screen flex flex-col bg-white text-[#333] font-sans antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Header />

            <main className="flex-grow">
                {/* SECTION 1 — HERO */}
                <section className="relative py-16 md:py-24 bg-gradient-to-br from-white to-[#f5fbfb] overflow-hidden border-b border-gray-100">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Hero Text */}
                            <div className="lg:col-span-7 flex flex-col space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                                    Best Restaurant Consultant in India
                                </h1>
                                <h2 className="text-xl md:text-2xl font-semibold text-[#29bdb8]">
                                    Scale Your Dine-In, QSR, or Cloud Kitchen — Nationally
                                </h2>

                                {/* Answer Capsule */}
                                <div className="answer-capsule bg-[#f0fafa] border-l-4 border-[#29bdb8] p-5 rounded-r-lg">
                                    <p className="text-[17px] text-[#333] leading-[1.7] font-medium">
                                        GoalCraft is a specialised restaurant growth consultancy operating across 25+ Indian cities — including Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, and Lucknow. Unlike traditional F&B consultants, GoalCraft focuses on Zomato and Swiggy algorithmic ranking, <Link href="/swiggy-zomato-growth" className="text-[#29bdb8] font-semibold hover:underline">Zomato & Swiggy growth</Link>, menu engineering, and unit economics to help dine-in restaurants, QSRs, and cloud kitchens increase online orders and improve margins. All engagements begin with a free growth audit.
                                    </p>
                                </div>

                                {/* CTA and trust */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                                    <Link href="/contact" className="px-8 py-4 bg-[#29bdb8] text-white font-bold rounded-xl text-center shadow-md hover:bg-[#22a39f] hover:shadow-lg transition-all duration-300">
                                        Get Free Growth Audit →
                                    </Link>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 font-medium tracking-wide">
                                        Serving 25+ Cities &nbsp;•&nbsp; Dine-In | QSR | Cloud Kitchen &nbsp;•&nbsp; Zomato & Swiggy Specialists
                                    </p>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="lg:col-span-5 relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-video lg:aspect-square">
                                    <img
                                        src={heroImageUrl}
                                        alt="Best Restaurant Consultant in India - GoalCraft"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — FOUNDER / TEAM CREDIBILITY */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-8">
                            India's Only Delivery-First Restaurant Consultancy
                        </h2>
                        <div className="space-y-6 text-[#555] text-lg leading-relaxed text-left max-w-3xl mx-auto">
                            <p>
                                GoalCraft was founded by a team of F&B growth operators with hands-on experience running restaurant brands on Zomato and Swiggy across Tier 1 and Tier 2 Indian markets. Our consultants have directly managed delivery operations, menu overhauls, and platform campaigns — not just advised on them.
                            </p>
                            <p>
                                We work with restaurant owners in <Link href="/best-restaurant-consultant-in-delhi" className="text-[#29bdb8] hover:underline font-semibold">Delhi NCR</Link>, Mumbai, Bengaluru, <Link href="/best-restaurant-consultant-in-lucknow" className="text-[#29bdb8] hover:underline font-semibold">Lucknow</Link>, Hyderabad, Pune, Chennai, Kolkata, and Jaipur, building growth systems that treat Zomato and Swiggy as the primary revenue channel — not an afterthought.
                            </p>

                            <div className="mt-10 p-6 bg-[#f9f9f9] rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-around items-center gap-4 text-base font-semibold text-[#1a1a1a]">
                                <span className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-[#29bdb8]" />
                                    +91 8448447408
                                </span>
                                <span className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-[#29bdb8]" />
                                    info@goalcraft.in
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[#29bdb8]" />
                                    Consulting across Pan-India
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — WHAT WE DO */}
                <section className="py-16 md:py-24 bg-[#fbfbfb] border-y border-gray-100">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                                Restaurant Consulting Services We Provide
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {serviceCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 bg-white border border-[#e5e5e5] rounded-[16px] hover:border-[#29bdb8] transition-colors duration-300 flex flex-col space-y-4"
                                >
                                    <h3 className="text-xl font-bold text-[#29bdb8]">
                                        {card.title}
                                    </h3>
                                    <p className="text-[#333] text-[15px] leading-[1.6]">
                                        {card.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — CLIENT PROOF */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                                Restaurants That Grew With GoalCraft
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {clientCards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-[#e5e5e5] rounded-xl p-5 flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="text-[12px] font-semibold text-[#29bdb8] tracking-[0.8px] uppercase block mb-1">
                                            {card.eyebrow}
                                        </span>
                                        <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">
                                            {card.name}
                                        </h4>
                                        <p className="text-[#555] text-sm leading-[1.6]">
                                            {card.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center py-6 border-t border-gray-100 flex flex-col items-center space-y-4">
                            <p className="text-lg font-medium text-[#333]">
                                Working with a restaurant brand in India? Start with a free growth audit.
                            </p>
                            <Link href="/contact" className="px-8 py-3.5 bg-[#29bdb8] text-white font-bold rounded-xl shadow-md hover:bg-[#22a39f] transition-all duration-300">
                                Book Free Audit
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SECTION 5 — CITY COVERAGE */}
                <section className="py-16 md:py-24 bg-[#fbfbfb] border-y border-gray-100">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-10">
                            Restaurant Consulting Available Across India
                        </h2>

                        {/* Inline list of cities */}
                        <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-4 mb-10">
                            {cities.map((city, idx) => (
                                <div key={idx} className="flex items-center">
                                    {city.link ? (
                                        <Link href={city.link} className="text-[#29bdb8] font-semibold hover:underline">
                                            {city.name}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-700 font-medium">{city.name}</span>
                                    )}
                                    {idx < cities.length - 1 && (
                                        <span className="text-gray-300 ml-4">|</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 text-[16px] leading-[1.7] max-w-3xl mx-auto">
                            GoalCraft's restaurant consulting framework is built for the Indian market — accounting for regional cuisine positioning, local customer price sensitivity, aggregator algorithm behaviour specific to each city cluster, and Tier 2 market dynamics where platform penetration patterns differ from metros.
                        </p>
                    </div>
                </section>

                {/* SECTION 6 — FORMATS WE SERVE */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a]">
                                We Work With Every Restaurant Format
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {formats.map((format, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 bg-[#fdfdfd] border border-gray-100 rounded-2xl flex flex-col space-y-4 hover:shadow-md transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-bold text-[#1a1a1a] border-b border-gray-100 pb-3">
                                        {format.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-[1.6]">
                                        {format.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 7 — EXPANDED FAQ */}
                <section className="py-16 md:py-24 bg-[#fbfbfb] border-t border-gray-100">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">
                                Restaurant Consulting in India — Frequently Asked Questions
                            </h2>
                        </div>

                        <IndiaFAQAccordion faqs={faqs} />
                    </div>
                </section>

                {/* SECTION 8 — FINAL CTA */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10 flex flex-col space-y-8">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                            Ready to Grow Your Restaurant?
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Start with a free, no-commitment growth audit. We'll review your Zomato and Swiggy setup, menu structure, and unit economics — then tell you exactly what's holding back your orders.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#29bdb8] text-white font-bold rounded-xl shadow-lg hover:bg-[#22a39f] transition-all duration-300 text-center">
                                Book Free Growth Audit
                            </Link>
                            <a
                                href="https://wa.me/918448447408"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 text-center"
                            >
                                WhatsApp Us Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
