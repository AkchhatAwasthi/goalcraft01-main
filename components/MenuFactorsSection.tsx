"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ImagePlus, UtensilsCrossed, FileText } from 'lucide-react';
import { MenuFactorsContent } from '@/data/growth-pages/types';

interface MenuFactorsSectionProps {
    content: MenuFactorsContent;
}

const iconMap = {
    trash: Trash2,
    image: ImagePlus,
    utensils: UtensilsCrossed,
    file: FileText,
};

const colorMap = {
    trash: 'text-red-500',
    image: 'text-blue-500',
    utensils: 'text-orange-500',
    file: 'text-green-500',
};

const MenuFactorsSection: React.FC<MenuFactorsSectionProps> = ({ content }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {content.heading.line1} <br />
                        <span className="text-red-500">{content.heading.highlightedBrand1}</span> & <span className="text-orange-500">{content.heading.highlightedBrand2}</span>
                    </h2>
                    <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {content.factors.map((factor, index) => {
                        const IconComponent = iconMap[factor.iconName];
                        const iconColor = colorMap[factor.iconName];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="mb-6 p-4 bg-gray-50 rounded-full">
                                    <IconComponent className={`w-12 h-12 ${iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{factor.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {factor.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MenuFactorsSection;
