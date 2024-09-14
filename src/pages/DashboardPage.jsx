import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import Homepage from "./Homepage";
import Toggle from "../components/Toggle";

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};
	return (

		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.5 }}
				className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
			>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'>
					URL Shortener
				</h2>

				<div className='w-full'>
					<Homepage />

				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className='mt-4'
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleLogout}
						className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
				 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
					>
						Logout
					</motion.button>

				</motion.div>

				<div className='mt-6 text-center text-gray-400 text-sm hidden'>

					<Toggle />
				</div>
			</motion.div>



		</>
	);
};
export default DashboardPage;
