import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Edit, Trash2 } from 'lucide-react';

const MyEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: '2024-09-15',
      attendees: 342,
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Startup Meetup',
      date: '2024-07-20',
      attendees: 120,
      status: 'Past'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <Card className="w-full bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-gray-800/50 p-4 rounded-lg mb-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Calendar className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl text-gray-200">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.attendees} Attendees</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="text-blue-400 border-blue-400 hover:bg-blue-400/10"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="text-red-400 bg-red-500/10 hover:bg-red-500/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyEvents;