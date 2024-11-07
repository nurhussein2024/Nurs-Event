import React from 'react';
import { Calendar, MapPin, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Global Tech & AI Summit 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Where Innovation Meets Intelligence
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3 Days of Learning</h3>
              <p className="text-gray-600">
                Intensive workshops and keynote sessions
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+ Speakers</h3>
              <p className="text-gray-600">Industry leaders and innovators</p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Venues</h3>
              <p className="text-gray-600">Events across major tech hubs</p>
            </div>
            <div className="text-center p-6">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Demos</h3>
              <p className="text-gray-600">Cutting-edge tech demonstrations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Summit London',
                date: 'June 15-17, 2024',
                image:
                  'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80',
              },
              {
                title: 'Tech Conference Tokyo',
                date: 'July 22-24, 2024',
                image:
                  'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80',
              },
              {
                title: 'Innovation Summit NYC',
                date: 'August 10-12, 2024',
                image:
                  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}