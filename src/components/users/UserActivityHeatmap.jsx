import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const userActivityData = [
	{ name: "Mon", "0-4": 25, "4-8": 35, "8-12": 55, "12-16": 75, "16-20": 95, "20-24": 40 },
	{ name: "Tue", "0-4": 28, "4-8": 48, "8-12": 68, "12-16": 88, "16-20": 108, "20-24": 45 },
	{ name: "Wed", "0-4": 38, "4-8": 58, "8-12": 78, "12-16": 98, "16-20": 118, "20-24": 55 },
	{ name: "Thu", "0-4": 48, "4-8": 68, "8-12": 88, "12-16": 108, "16-20": 128, "20-24": 65 },
	{ name: "Fri", "0-4": 58, "4-8": 78, "8-12": 98, "12-16": 118, "16-20": 138, "20-24": 75 },
	{ name: "Sat", "0-4": 68, "4-8": 88, "8-12": 108, "12-16": 128, "16-20": 148, "20-24": 85 },
	{ name: "Sun", "0-4": 78, "4-8": 98, "8-12": 118, "12-16": 138, "16-20": 158, "20-24": 95 },
  ];
  

const UserActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-black bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Activity Heatmap</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={userActivityData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='0-4' stackId='a' fill='#6366F1' />
						<Bar dataKey='4-8' stackId='a' fill='#8B5CF6' />
						<Bar dataKey='8-12' stackId='a' fill='#EC4899' />
						<Bar dataKey='12-16' stackId='a' fill='#10B981' />
						<Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
						<Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserActivityHeatmap;
