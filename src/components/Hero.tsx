import React from 'react';
import VideoPlayer from './video/VideoPlayer';
import LeadMagnet from './LeadMagnet';
import ScrollCTA from './common/ScrollCTA';

const VIDEO_URL = 'https://storage.googleapis.com/msgsndr/oLmAPZZjErXvPo1ggLPM/media/675f5da4ea029a4517a41c2d.mp4';
const THUMBNAIL_URL = 'https://storage.googleapis.com/msgsndr/oLmAPZZjErXvPo1ggLPM/media/675f68f3fb63bc1fdf5f265e.png';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions for Fitness Professionals
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We help fitness professionals grow their business through personalized AI solutions and expert consulting.
          </p>
          
          <VideoPlayer videoUrl={VIDEO_URL} thumbnailUrl={THUMBNAIL_URL} />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollCTA text="Book Your Free Call" variant="primary" />
            <ScrollCTA text="Our Services" variant="secondary" />
          </div>

          <LeadMagnet />
        </div>
      </div>
    </div>
  );
}