import React, { useState } from "react";
import logo from "../../assets/E.png";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import SidebarSection from "../../Components/SidebarSection";
import Logo from "../../Components/Logo";
import MenuItems from "../../Components/MenuItems";
import { INavItemType, defaultNavItems } from "./defaultNavitems";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [selected, setSelected] = useState<number | null>(null);

	const Icon = collapsed ? HiChevronDoubleRight : HiChevronDoubleLeft;

	const handleSelect = (navItem: INavItemType) => {
		setSelected(navItem?.id);
		console.log(
			selected === navItem.id,
			selected,
			typeof selected,
			navItem.id,
			typeof navItem.id,
			"navItem"
		);
	};

	return (
		<>
			<div
				className={`${
					collapsed ? "w-16" : "w-[260px]"
				} h-screen bg-white transition-all duration-300 ease-in-out `}
			>
				<div className="flex justify-between  items-center ml-[18px] mb-[20px]">
					{!collapsed && <Logo title={"JoBins"} logo={logo} />}
					<button
						onClick={() => setCollapsed(!collapsed)}
						className="pt-[20px] pr-[14px]"
					>
						<Icon className="h-[24px] w-[24px]" />
					</button>
				</div>
				{defaultNavItems.map((navitem) => (
					<>
						<SidebarSection collapsed={collapsed} name={navitem.section} />
						{navitem.screens.map((screen) => (
							<>
								<MenuItems
									collapsed={collapsed}
									Icon={screen.icon}
									handleSelect={() => handleSelect(screen)}
									name={screen.label}
									selected={Number(selected) === Number(navitem?.id)}
								/>
							</>
						))}
					</>
				))}
			</div>
		</>
	);
};

export default Sidebar;
