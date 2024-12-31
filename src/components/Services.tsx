import React from 'react';
import { Bot, PenTool, Users, LineChart } from 'lucide-react';
import ScrollCTA from './common/ScrollCTA';

const services = [
  {
    icon: Bot,
    title: 'AI Strategy Consulting',
    description: 'Get personalized guidance on implementing AI solutions that match your unique business needs and goals.',
  },
  {
    icon: PenTool,
    title: 'Content Creation Service',
    description: 'We create engaging social media content, workout plans, and nutrition guides using AI technology.',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Our team helps you attract and convert more clients using AI-driven marketing strategies.',
  },
  {
    icon: LineChart,
    title: 'Business Growth',
    description: 'Comprehensive support to scale your fitness business with data-driven insights and AI tools.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert consulting and done-for-you services to grow your fitness business
          </p>
          <ScrollCTA 
            text="Schedule a Consultation" 
            className="bg-gradient-to-r from-blue-900 to-blue-500 text-white"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}