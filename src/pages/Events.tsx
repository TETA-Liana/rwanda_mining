import React from 'react';

// Sample event data (simulate fetched data)
const events = [
  {
    id: 1,
    image: '/placeholder-event.jpg',
    title: 'Rwanda Mining Week Opening Ceremony',
    date: '2024-09-10',
    time: '09:00 AM',
    timezone: 'CAT',
    venue: 'Kigali Convention Centre',
  },
  {
    id: 2,
    image: '/placeholder-event.jpg',
    title: 'Panel: The Future of African Mining',
    date: '2024-09-11',
    time: '11:30 AM',
    timezone: 'CAT',
    venue: 'Main Hall',
  },
  {
    id: 3,
    image: '/placeholder-event.jpg',
    title: 'Networking Gala Dinner',
    date: '2024-09-12',
    time: '07:00 PM',
    timezone: 'CAT',
    venue: 'Serena Hotel',
  },
  {
    id: 4,
    image: '/placeholder-event.jpg',
    title: 'Workshop: Sustainable Mining Practices',
    date: '2024-09-13',
    time: '02:00 PM',
    timezone: 'CAT',
    venue: 'Room B2',
  },
];

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col">
      <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
        <img
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full"
          onError={e => (e.currentTarget.src = '/placeholder-event.jpg')}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            {event.timezone}
          </span>
          <span className="text-gray-500 text-xs">{event.date} • {event.time}</span>
        </div>
        <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">{event.title}</h3>
        <div className="flex items-center gap-2 mt-auto">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span className="text-gray-700 text-sm font-medium">{event.venue}</span>
        </div>
      </div>
    </div>
  );
}

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10 text-center drop-shadow-sm">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
