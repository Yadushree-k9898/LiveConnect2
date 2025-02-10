import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';

const RegisteredEvents = () => {
  const events = [
    {
      id: 1,
      title: 'AI Summit',
      date: '2024-10-15',
      location: 'San Francisco',
      status: 'Registered'
    },
    {
      id: 2,
      title: 'Blockchain Conference',
      date: '2024-08-22',
      location: 'New York',
      status: 'Attended'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <Card className="w-full bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Registered Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-gray-800/50 p-4 rounded-lg mb-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Calendar className="h-8 w-8 text-purple-400" />
                <div>
                  <h3 className="text-xl text-gray-200">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
              </div>
              <Button 
                variant="destructive" 
                className="text-red-400 bg-red-500/10 hover:bg-red-500/20 border-red-500/20"
              >
                <X className="mr-2 h-4 w-4" />
                Cancel Registration
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisteredEvents;