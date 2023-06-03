import React from "react";

import { BiHomeSmile } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import { BsStar, BsBox } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";

export type INavItemType = {
	id: number;
	label: string;
	path: string;
	icon: React.ReactNode;
};

export const defaultNavItems = [
	{
		id: 100,
		section: "Main Menu",
		screens: [
			{
				id: 1,
				label: "Dashboard",
				path: "/",
				icon: BiHomeSmile,
			},
			{
				id: 2,
				label: "Oder Management",
				path: "/orderManagement",
				icon: TbShoppingCart,
			},
			{
				id: 3,
				label: "Brand",
				path: "/brand",
				icon: BsStar,
			},
		],
	},
	{
		id: 101,
		section: "Products",
		screens: [
			{
				id: 10,
				label: "Add Products",
				path: "/products/addProducts",
				icon: IoAddCircleOutline,
			},
			{
				id: 11,
				label: "Product List",
				path: "/products/productList",
				icon: BsBox,
			},
		],
	},
];
