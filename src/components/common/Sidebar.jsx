import {
	Home,
	Briefcase,
	UserCheck,
	PieChart,
	FileText,
	Bell,
	Settings,
	Menu,
  } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
	  name: "Dashboard",
	  icon: Home,
	  color: "#3B82F6", 
	  href: "/",
	},
	{
	  name: "Projects",
	  icon: Briefcase,
	  color: "#8B5CF6", 
	  href: "/projects",
	},
	{
	  name: "Clients",
	  icon: UserCheck,
	  color: "#EC4899", 
	  href: "/clients",
	},
	{
	  name: "Reports",
	  icon: PieChart,
	  color: "#10B981", 
	  href: "/reports",
	},
	{
	  name: "Documents",
	  icon: FileText,
	  color: "#F59E0B", 
	  href: "/documents",
	},
	{
	  name: "Notifications",
	  icon: Bell,
	  color: "#6366F1", 
	  href: "/notifications",
	},
	{
	  name: "Settings",
	  icon: Settings,
	  color: "#6EE7B7", 
	  href: "/settings",
	},
  ];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-60" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-black bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};
export default Sidebar;
