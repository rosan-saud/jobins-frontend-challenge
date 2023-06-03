import { IconType } from "react-icons";

interface IMenuItemProps {
	selected: boolean;
	name: string;
	Icon: IconType;
	handleSelect: (navItem: any) => void;
	collapsed: boolean;
}

const MenuItems = ({
	selected,
	name,
	Icon,
	handleSelect,
	collapsed,
}: IMenuItemProps) => {
	console.log(selected, "selected");
	return (
		<div
			className={`${
				selected ? "bg-[#F3F4F8] rounded-md" : "bg-white"
			} hover:bg-[#F3F4F8] hover:cursor-pointer flex items-center ml-[14px] h-[40px] mr-[14px] mb-2`}
			onClick={handleSelect}
		>
			<Icon
				className={`${
					!selected ? "text-[#8B909A]" : "text-[#23272E]"
				}  hover:text-[#23272E] w-[22px] h-[22px] ml-4 mt-2 mb-3 mr-2 `}
			/>
			{!collapsed && (
				<span
					className={`${
						!selected ? "text-[#8B909A]" : "text-[#23272E]"
					}   hover:text-[#23272E] font-semibold text-[15px] mt-[9px] mb-2`}
				>
					{name}
				</span>
			)}
		</div>
	);
};

export default MenuItems;
