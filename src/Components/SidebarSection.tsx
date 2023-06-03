import React from "react";
interface ISidebarSectionProps {
	collapsed: boolean;
	name: string;
}
const SidebarSection = ({ collapsed, name }: ISidebarSectionProps) => {
	return !collapsed ? (
		<div className={"w-[260px] h-[40px] bg-white"}>
			<span className="text-[11px] text-[#8B909A] ml-[30px]">{name}</span>
		</div>
	) : null;
};

export default SidebarSection;
