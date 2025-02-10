import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Edit, Trash2 } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();

  // Mock event data (replace with actual data fetching)
  const event = {
    id: id,
    name: "Tech Conference 2024",
    description: "Annual technology conference showcasing latest innovations and networking opportunities.",
    date: "2024-09-15",
    location: "San Francisco Convention Center",
    capacity: 500,
    registeredAttendees: 342
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {event.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
              <Calendar className="h-8 w-8 text-blue-400" />
              <div>
                <p className="text-gray-400 text-sm">Date</p>
                <p className="text-gray-200">{event.date}</p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-gray-200">{event.location}</p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
              <Users className="h-8 w-8 text-purple-400" />
              <div>
                <p className="text-gray-400 text-sm">Attendees</p>
                <p className="text-gray-200">{event.registeredAttendees} / {event.capacity}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Description</h3>
            <p className="text-gray-400">{event.description}</p>
          </div>

          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400/10 flex items-center space-x-2"
            >
              <Edit className="h-4 w-4" />
              <span>Edit Event</span>
            </Button>
            <Button 
              variant="destructive" 
              className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 flex items-center space-x-2"
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete Event</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetails;