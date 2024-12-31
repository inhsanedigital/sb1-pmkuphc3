import React from 'react';
import { Calendar } from 'lucide-react';
import ScrollCTA from './common/ScrollCTA';

export default function LeadMagnet() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mt-12 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Calendar className="h-6 w-6 text-blue-200" />
        <span className="text-blue-200 font-semibold">LIMITED TIME OFFER</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
        Get 60 Days of Free AI-Generated Social Media Posts
      </h3>
      <p className="text-blue-100 text-center mb-6">
        Ready to supercharge your content strategy? Book your free call and claim 60 days of free posts now!
      </p>
      
      <div className="flex justify-center">
        <ScrollCTA 
          text="Claim Your Free 60-Day Posts Now" 
          className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-blue-50"
        />
      </div>
    </div>
  );
}