import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, Mail, Settings } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    eventsCreated: 5,
    eventsAttended: 12
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Events Created</p>
              <p className="text-gray-200 text-2xl">{profile.eventsCreated}</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Events Attended</p>
              <p className="text-gray-200 text-2xl">{profile.eventsAttended}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                value={profile.username}
                className="pl-10 bg-gray-900/50 border-gray-700"
                readOnly
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                value={profile.email}
                className="pl-10 bg-gray-900/50 border-gray-700"
                readOnly
              />
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center justify-center"
          >
            <Settings className="mr-2 h-5 w-5" />
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;