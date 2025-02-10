// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { AlertCircle, Mail, Lock, Loader2 } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { motion } from "@/components/ui/motion";  // ✅ Now this works




// const LoginForm = ({ onSubmit }) => {
//   const [formData, setFormData] = React.useState({ email: "", password: "" });
//   const [error, setError] = React.useState("");
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [focusedField, setFocusedField] = React.useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await onSubmit(formData);
//     } catch (err) {
//       setError(err.message || "Login failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gray-800">
//         <CardHeader className="space-y-1 pb-8">
//           <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//             Welcome Back
//           </CardTitle>
//           <p className="text-gray-400 text-center text-sm">Enter your credentials to continue</p>
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
//               <Label htmlFor="email" className={`text-sm transition-colors duration-200 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-400'}`}>
//                 Email
//               </Label>
//               <div className="relative">
//                 <Mail className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-400'}`} />
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField(null)}
//                   required
//                   className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20"
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password" className={`text-sm transition-colors duration-200 ${focusedField === 'password' ? 'text-blue-400' : 'text-gray-400'}`}>
//                 Password
//               </Label>
//               <div className="relative">
//                 <Lock className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${focusedField === 'password' ? 'text-blue-400' : 'text-gray-400'}`} />
//                 <Input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder="••••••••"
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('password')}
//                   onBlur={() => setFocusedField(null)}
//                   required
//                   className="pl-10 bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20"
//                 />
//               </div>
//             </div>
//             <Button 
//               type="submit" 
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
//             >
//               {isLoading ? (
//                 <Loader2 className="h-5 w-5 animate-spin" />
//               ) : (
//                 'Sign in'
//               )}
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter className="flex flex-col space-y-4 pb-8">
//           <div className="text-sm text-center text-gray-400">
//             Don't have an account?{' '}
//             <a href="/register" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200">
//               Register
//             </a>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default LoginForm;







import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle, Mail, Lock, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import { loginUser } from '@/services/authService';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginUser(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-gray-800">
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <p className="text-gray-400 text-center text-sm">Enter your credentials to continue</p>
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
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="••••••••" onChange={handleChange} required />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign in'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-gray-400">
          Don't have an account? <a href="/register" className="text-blue-400">Register</a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LoginForm;
