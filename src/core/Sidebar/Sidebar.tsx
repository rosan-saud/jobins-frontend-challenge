import React, { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(true);
	const Icon = collapsed ? HiChevronDoubleRight : HiChevronDoubleLeft;
	return (
		<>
			<div
				className={`${
					collapsed ? "w-16" : "w-[260px]"
				} h-screen bg-white transition-all duration-300 ease-in-out `}
			>
				<div className="flex justify-between">
					<span className="text font-bold">Jobins</span>
					<button onClick={() => setCollapsed(!collapsed)}>
						<Icon />
					</button>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
