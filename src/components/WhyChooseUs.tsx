import React from 'react';
import { Award, Zap, Headphones } from 'lucide-react';
import ScrollCTA from './common/ScrollCTA';

const features = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Our team combines years of fitness industry experience with AI expertise to deliver real results.',
  },
  {
    icon: Zap,
    title: 'Personalized Solutions',
    description: 'We create custom strategies tailored to your specific business needs and goals.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Direct access to our expert team whenever you need guidance or assistance.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Work with experts who understand both fitness and technology
          </p>
          <ScrollCTA 
            text="Let's Get Started" 
            className="bg-gradient-to-r from-blue-900 to-blue-500 text-white"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}