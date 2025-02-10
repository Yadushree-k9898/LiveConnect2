import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    capacity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add event creation logic here
    console.log(eventData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Create New Event
          </CardTitle>
          <p className="text-gray-400 text-center text-sm">Fill in your event details</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  name="name"
                  placeholder="Event Name"
                  value={eventData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Textarea
                name="description"
                placeholder="Event Description"
                value={eventData.description}
                onChange={handleChange}
                required
                className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400"
              />
            </div>

            <div className="space-y-2">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  name="location"
                  placeholder="Event Location"
                  value={eventData.location}
                  onChange={handleChange}
                  required
                  className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  type="datetime-local"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  required
                  className="bg-gray-900/50 border-gray-700 text-gray-100 focus:border-blue-400"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="number"
                  name="capacity"
                  placeholder="Max Capacity"
                  value={eventData.capacity}
                  onChange={handleChange}
                  min="1"
                  className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
            >
              Create Event
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateEvent;