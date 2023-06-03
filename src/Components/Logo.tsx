import React from "react";

interface ILogoProps {
	logo: string;
	title: string;
}
const Logo = ({ title, logo }: ILogoProps) => {
	return (
		<div className="flex mt-5 ">
			<div className="bg-[#0F60FF] w-[28px] h-[24px] rounded-lg  ">
				<img src={logo} alt="logo" className="pl-[7px] pt-[4px]" />
			</div>
			<span className="text font-bold text-xl ml-[10px] ">{title}</span>
		</div>
	);
};

export default Logo;
