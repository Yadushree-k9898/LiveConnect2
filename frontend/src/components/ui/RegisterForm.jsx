import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle, User, Mail, Lock, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({ name: "", email: "", password: "" });
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [focusedField, setFocusedField] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Create Account
          </CardTitle>
          <p className="text-gray-400 text-center text-sm">Join us today and get started</p>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50 text-red-400">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className={`text-sm transition-colors duration-200 ${focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'}`}>
                Full Name
              </Label>
              <div className="relative">
                <User className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'}`} />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className={`text-sm transition-colors duration-200 ${focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'}`}>
                Email
              </Label>
              <div className="relative">
                <Mail className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'}`} />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className={`text-sm transition-colors duration-200 ${focusedField === 'password' ? 'text-purple-400' : 'text-gray-400'}`}>
                Password
              </Label>
              <div className="relative">
                <Lock className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'password' ? 'text-purple-400' : 'text-gray-400'}`} />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                'Create Account'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pb-8">
          <div className="text-sm text-center text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200">
              Sign in
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;













// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { AlertCircle, User, Mail, Lock, Loader2, Image as ImageIcon } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { registerUser } from '@/services/authService';
// import { useNavigate } from 'react-router-dom';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', avatar: null });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === 'avatar') {
//       setFormData({ ...formData, avatar: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await registerUser(formData);
//       alert('User registered successfully!');
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gray-800">
//         <CardHeader className="space-y-1 pb-8">
//           <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//             Create Account
//           </CardTitle>
//           <p className="text-gray-400 text-center text-sm">Join us today and get started</p>
//         </CardHeader>
//         <CardContent>
//           {error && (
//             <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50 text-red-400">
//               <AlertCircle className="h-4 w-4" />
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="name" className={`text-sm transition-colors duration-200 ${focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'}`}>Full Name</Label>
//               <div className="relative">
//                 <User className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'name' ? 'text-purple-400' : 'text-gray-400'}`} />
//                 <Input id="name" name="name" type="text" placeholder="John Doe" onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} required className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20" />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email" className={`text-sm transition-colors duration-200 ${focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'}`}>Email</Label>
//               <div className="relative">
//                 <Mail className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-purple-400' : 'text-gray-400'}`} />
//                 <Input id="email" name="email" type="email" placeholder="name@example.com" onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} required className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20" />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password" className={`text-sm transition-colors duration-200 ${focusedField === 'password' ? 'text-purple-400' : 'text-gray-400'}`}>Password</Label>
//               <div className="relative">
//                 <Lock className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'password' ? 'text-purple-400' : 'text-gray-400'}`} />
//                 <Input id="password" name="password" type="password" placeholder="••••••••" onChange={handleChange} onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField(null)} required className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20" />
//               </div>
//             </div>
//             <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25">
//               {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Create Account'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default RegisterForm;
