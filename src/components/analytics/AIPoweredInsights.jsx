import { motion } from "framer-motion";
import { BarChart2, ThumbsUp, PackageCheck, Globe2 } from "lucide-react";

const INSIGHTS = [
  {
    icon: BarChart2,
    color: "text-indigo-500",
    insight: "Website traffic increased by 22% this month, largely driven by improved SEO performance.",
  },
  {
    icon: ThumbsUp,
    color: "text-rose-500",
    insight: "Customer satisfaction ratings hit a new high, with 92% of users giving positive feedback.",
  },
  {
    icon: PackageCheck,
    color: "text-emerald-500",
    insight: "Inventory turnover rate improved by 12%, reflecting better demand forecasting.",
  },
  {
    icon: Globe2,
    color: "text-orange-500",
    insight: "International orders have grown by 18%, with strong performance in emerging markets.",
  },
];


const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;
