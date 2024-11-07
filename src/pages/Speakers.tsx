import React from 'react';
import { Twitter, Linkedin, Globe } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      company: 'TechVision Labs',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Leading AI research and development in neural networks',
    },
    {
      name: 'James Wilson',
      role: 'Chief Innovation Officer',
      company: 'Future Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Expert in emerging technologies and digital transformation',
    },
    {
      name: 'Dr. Maya Patel',
      role: 'Machine Learning Lead',
      company: 'DataMinds',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      bio: 'Specializing in deep learning and computer vision',
    },
    {
      name: 'Robert Chang',
      role: 'Tech Entrepreneur',
      company: 'AI Ventures',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
      bio: 'Serial entrepreneur focusing on AI startups',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Featured Speakers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">{speaker.name}</h3>
                  <p className="text-blue-200">{speaker.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}