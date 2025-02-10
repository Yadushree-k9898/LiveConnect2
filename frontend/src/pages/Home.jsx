import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, PlusCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Event Management Platform
          </CardTitle>
          <p className="text-gray-400 text-center text-lg">Streamline Your Events, Simplify Your Planning</p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg text-center space-y-4 hover:bg-gray-800/70 transition-all duration-300">
            <Calendar className="mx-auto h-12 w-12 text-blue-400" />
            <h3 className="text-xl font-semibold text-gray-200">Upcoming Events</h3>
            <p className="text-gray-400">View and manage your scheduled events</p>
            <Button variant="outline" className="w-full mt-4 border-blue-400 text-blue-400 hover:bg-blue-400/10">
              View Events
            </Button>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg text-center space-y-4 hover:bg-gray-800/70 transition-all duration-300">
            <Users className="mx-auto h-12 w-12 text-purple-400" />
            <h3 className="text-xl font-semibold text-gray-200">Attendee Management</h3>
            <p className="text-gray-400">Track and manage event participants</p>
            <Button variant="outline" className="w-full mt-4 border-purple-400 text-purple-400 hover:bg-purple-400/10">
              Manage Attendees
            </Button>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg text-center space-y-4 hover:bg-gray-800/70 transition-all duration-300">
            <PlusCircle className="mx-auto h-12 w-12 text-green-400" />
            <h3 className="text-xl font-semibold text-gray-200">Create New Event</h3>
            <p className="text-gray-400">Start planning your next great event</p>
            <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
              Create Event
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;