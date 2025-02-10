// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { LogOut, LayoutDashboard, User } from 'lucide-react';
// import { useAuth } from "../hooks/useAuth";  // ✅ Correct path





// const Navbar = () => {
//   const { user, logout } = useAuth();

//   return (
//     <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//               LiveConnect
//             </span>
//           </Link>

//           <div className="flex items-center space-x-4">
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <Link 
//                   to="/dashboard" 
//                   className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
//                 >
//                   <LayoutDashboard className="h-4 w-4" />
//                   <span>Dashboard</span>
//                 </Link>
//                 <Button
//                   onClick={logout}
//                   variant="destructive"
//                   className="flex items-center space-x-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20"
//                 >
//                   <LogOut className="h-4 w-4" />
//                   <span>Logout</span>
//                 </Button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-3">
//                 <Link to="/login">
//                   <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/register">
//                   <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
//                     <User className="h-4 w-4 mr-2" />
//                     Register
//                   </Button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Button } from '@/components/ui/button'; 
import { LogOut, LayoutDashboard, User, Swords } from 'lucide-react'; 
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              LiveConnect
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                
                <Button
                  onClick={logout}
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white border-none"
                >
                  <Swords className="h-4 w-4 mr-2" />
                  Witcher's Farewell
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                    <User className="h-4 w-4 mr-2" />
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;