import { NavLink, useLocation } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#244D3F]">KeenKeeper</h1>
                
                <nav className="flex gap-4">
                    <NavLink 
                        to="/" 
                        end
                        className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
                            isActive ? "bg-[#244D3F] text-white" : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                        <RiHome3Line size={20} />
                        Home
                    </NavLink>
                    
                    <NavLink 
                        to="/timeline"
                        className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
                            isActive ? "bg-[#244D3F] text-white" : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                        <FiClock size={20} />
                        Timeline
                    </NavLink>
                    
                    <NavLink 
                        to="/stats"
                        className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition ${
                            isActive ? "bg-[#244D3F] text-white" : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                        <MdShowChart size={20} />
                        Stats
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;