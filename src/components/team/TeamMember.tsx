import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLink[];
}

export default function TeamMember({ name, role, image, bio, social }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-96 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-6">{bio}</p>
        <div className="flex gap-4">
          {social.map((platform, i) => (
            <a
              key={i}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <platform.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}