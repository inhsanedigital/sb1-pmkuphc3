import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoPlayer({ videoUrl, thumbnailUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative max-w-4xl mx-auto aspect-video bg-black rounded-xl shadow-2xl mb-12 overflow-hidden">
      {!isPlaying ? (
        <>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
            onClick={() => setIsPlaying(true)}
          >
            <div className="bg-white/90 p-6 rounded-full hover:bg-white transition-all">
              <Play className="h-12 w-12 text-blue-600" />
            </div>
          </div>
        </>
      ) : (
        <video 
          className="w-full h-full"
          autoPlay 
          controls
          src={videoUrl}
        />
      )}
    </div>
  );
}