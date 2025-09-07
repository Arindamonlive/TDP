import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Menu,
    X,
    Home,
    MapPin,
    Utensils,
    ShoppingBag,
    Phone,
} from "lucide-react";

export default function SidebarNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null); // for mobile submenus

    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    // CLOSE MOBILE DRAWER on any link click
    const handleLinkClick = () => {
        setIsOpen(false);
        setOpenSubmenu(null);
    };

    return (
        <>
            {/* Mobile Header with Hamburger */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-red-900 text-white flex items-center justify-between p-4 shadow-lg">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-col w-64 h-screen bg-red-900 text-white p-6 fixed top-0 left-0">
                <ul className="space-y-4">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"
                        >
                            <Home size={18} /> Home
                        </Link>
                    </li>

                    {/* Pandals */}
                    <li>
                        {/* Desktop submenu toggle */}
                        <button
                            onClick={() => toggleSubmenu("pandals")}
                            className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer w-full text-left"
                        >
                            <MapPin size={20} /> প্যান্ডেল (Pandals)
                        </button>

                        {/* Only show submenu when open */}
                        {openSubmenu === "pandals" && (
                            <ul className="ml-6 mt-2 space-y-2 text-sm">
                                <li><Link to="/pandals/westTripura" className="hover:text-yellow-300">পশ্চিম ত্রিপুরা (West Tripura)</Link></li>
                                <li><Link to="/pandals/gomati" className="hover:text-yellow-300">গোমতী (Gomati)</Link></li>
                                <li><Link to="/pandals/sepahijala" className="hover:text-yellow-300">সিপাহিজালা (Sepahijala)</Link></li>
                                <li><Link to="/pandals/southTripura" className="hover:text-yellow-300">দক্ষিণ ত্রিপুরা (South Tripura)</Link></li>
                                <li><Link to="/pandals/unakoti" className="hover:text-yellow-300">ঊনকোটি (Unakoti)</Link></li>
                                <li><Link to="/pandals/dhalai" className="hover:text-yellow-300">ধলাই (Dhalai)</Link></li>
                                <li><Link to="/pandals/khowai" className="hover:text-yellow-300">খোয়াই (Khowai)</Link></li>
                                <li><Link to="/pandals/northTripura" className="hover:text-yellow-300">উত্তর ত্রিপুরা (North Tripura)</Link></li>
                            </ul>
                        )}
                    </li>


                    {/* Eats */}
                    <li>
                        {/* Desktop submenu toggle */}
                        <button
                            onClick={() => toggleSubmenu("eats")}
                            className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer w-full text-left"
                        >
                            <Utensils size={20} /> কোথায় খাবেন (Where to Eat)
                        </button>

                        {/* Show submenu only if open */}
                        {openSubmenu === "eats" && (
                            <ul className="ml-6 mt-2 space-y-2 text-sm">
                                <li><Link to="/food/westTripura" className="hover:text-yellow-300">পশ্চিম ত্রিপুরা (West Tripura)</Link></li>
                                <li><Link to="/food/gomati" className="hover:text-yellow-300">গোমতী (Gomati)</Link></li>
                                <li><Link to="/food/sepahijala" className="hover:text-yellow-300">সিপাহিজালা (Sepahijala)</Link></li>
                                <li><Link to="/food/southTripura" className="hover:text-yellow-300">দক্ষিণ ত্রিপুরা (South Tripura)</Link></li>
                                <li><Link to="/food/unakoti" className="hover:text-yellow-300">ঊনকোটি (Unakoti)</Link></li>
                                <li><Link to="/food/dhalai" className="hover:text-yellow-300">ধলাই (Dhalai)</Link></li>
                                <li><Link to="/food/khowai" className="hover:text-yellow-300">খোয়াই (Khowai)</Link></li>
                                <li><Link to="/food/northTripura" className="hover:text-yellow-300">উত্তর ত্রিপুরা (North Tripura)</Link></li>
                            </ul>
                        )}
                    </li>


                    {/* Shop */}
                    <li>
                        {/* Desktop submenu toggle */}
                        <button
                            onClick={() => toggleSubmenu("shop")}
                            className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer w-full text-left"
                        >
                            <ShoppingBag size={20} /> আপনি কোথায় কেনাকাটা করতে পারেন (Where to Shop)
                        </button>

                        {/* Show submenu only if open */}
                        {openSubmenu === "shop" && (
                            <ul className="ml-6 mt-2 space-y-2 text-sm">
                                <li><Link to="/shops/westTripura" className="hover:text-yellow-300">পশ্চিম ত্রিপুরা (West Tripura)</Link></li>
                                <li><Link to="/shops/gomati" className="hover:text-yellow-300">গোমতী (Gomati)</Link></li>
                                <li><Link to="/shops/sepahijala" className="hover:text-yellow-300">সিপাহিজালা (Sepahijala)</Link></li>
                                <li><Link to="/shops/southTripura" className="hover:text-yellow-300">দক্ষিণ ত্রিপুরা (South Tripura)</Link></li>
                                <li><Link to="/shops/unakoti" className="hover:text-yellow-300">ঊনকোটি (Unakoti)</Link></li>
                                <li><Link to="/shops/dhalai" className="hover:text-yellow-300">ধলাই (Dhalai)</Link></li>
                                <li><Link to="/shops/khowai" className="hover:text-yellow-300">খোয়াই (Khowai)</Link></li>
                                <li><Link to="/shops/northTripura" className="hover:text-yellow-300">উত্তর ত্রিপুরা (North Tripura)</Link></li>
                            </ul>
                        )}
                    </li>


                    {/* Contact */}
                    <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer">
                        <Link to="/contact" className="flex items-center gap-2">
                            <Phone size={18} /> Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Overlay (click outside to close) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Slide-in Menu */}
            {isOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-64 h-full bg-red-900 text-white p-6 z-50 md:hidden shadow-lg"
                >
                    <button
                        className="absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={28} />
                    </button>
                    <h1 className="text-2xl font-bold mb-8">Durga Puja</h1>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/"
                                onClick={handleLinkClick}
                                className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer"
                            >
                                <Home size={18} /> Home
                            </Link>
                        </li>

                        {/* Pandals (mobile collapsible) */}
                        <li>
                            <button
                                onClick={() => toggleSubmenu("pandals")}
                                className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer w-full text-left"
                            >
                                <MapPin size={18} /> প্যান্ডেল (Pandals)
                            </button>
                            {openSubmenu === "pandals" && (
                                <ul className="ml-6 mt-2 space-y-2 text-sm">
                                    <li><Link to="/pandals/westTripura" onClick={handleLinkClick}>পশ্চিম ত্রিপুরা (West Tripura)</Link></li>
                                    <li><Link to="/pandals/gomati" onClick={handleLinkClick}>গোমতী (Gomati)</Link></li>
                                    <li><Link to="/pandals/sepahijala" onClick={handleLinkClick}>সিপাহিজালা (Sepahijala)</Link></li>
                                    <li><Link to="/pandals/southTripura" onClick={handleLinkClick}>দক্ষিণ ত্রিপুরা (South Tripura)</Link></li>
                                    <li><Link to="/pandals/unakoti" onClick={handleLinkClick}>ঊনকোটি (Unakoti)</Link></li>
                                    <li><Link to="/pandals/dhalai" onClick={handleLinkClick}>ধলাই (Dhalai)</Link></li>
                                    <li><Link to="/pandals/khowai" onClick={handleLinkClick}>খোয়াই (Khowai)</Link></li>
                                    <li><Link to="/pandals/northTripura" onClick={handleLinkClick}>উত্তর ত্রিপুরা (North Tripura)</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Eats (mobile collapsible) */}
                        <li>
                            <button
                                onClick={() => toggleSubmenu("eats")}
                                className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer w-full text-left"
                            >
                                <Utensils size={18} /> কোথায় খাবেন (Where to Eat)
                            </button>
                            {openSubmenu === "eats" && (
                                <ul className="ml-6 mt-2 space-y-2 text-sm">
                                    <li><Link to="/food/westTripura" onClick={handleLinkClick}>পশ্চিম ত্রিপুরা (West Tripura)</Link></li>
                                    <li><Link to="/food/gomati" onClick={handleLinkClick}>গোমতী (Gomati)</Link></li>
                                    <li><Link to="/food/sepahijala" onClick={handleLinkClick}>সিপাহিজালা (Sepahijala)</Link></li>
                                    <li><Link to="/food/southTripura" onClick={handleLinkClick}>দক্ষিণ ত্রিপুরা (South Tripura)</Link></li>
                                    <li><Link to="/food/unakoti" onClick={handleLinkClick}>ঊনকোটি (Unakoti)</Link></li>
                                    <li><Link to="/food/dhalai" onClick={handleLinkClick}>ধলাই (Dhalai)</Link></li>
                                    <li><Link to="/food/khowai" onClick={handleLinkClick}>খোয়াই (Khowai)</Link></li>
                                    <li><Link to="/food/northTripura" onClick={handleLinkClick}>উত্তর ত্রিপুরা (North Tripura)</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Shop (mobile collapsible) */}
                        <li>
                            <button
                                onClick={() => toggleSubmenu("shop")}
                                className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer w-full text-left"
                            >
                                <ShoppingBag size={18} /> আপনি কোথায় কেনাকাটা করতে পারেন (Where to Shop)
                            </button>
                            {openSubmenu === "shop" && (
                                <ul className="ml-6 mt-2 space-y-2 text-sm">
                                    <li><Link to="/shops/westTripura" onClick={handleLinkClick}>পশ্চিম ত্রিপুরা (West Tripura)</Link></li>
                                    <li><Link to="/shops/gomati" onClick={handleLinkClick}>গোমতী (Gomati)</Link></li>
                                    <li><Link to="/shops/sepahijala" onClick={handleLinkClick}>সিপাহিজালা (Sepahijala)</Link></li>
                                    <li><Link to="/shops/southTripura" onClick={handleLinkClick}>দক্ষিণ ত্রিপুরা (South Tripura)</Link></li>
                                    <li><Link to="/shops/unakoti" onClick={handleLinkClick}>ঊনকোটি (Unakoti)</Link></li>
                                    <li><Link to="/shops/dhalai" onClick={handleLinkClick}>ধলাই (Dhalai)</Link></li>
                                    <li><Link to="/shops/khowai" onClick={handleLinkClick}>খোয়াই (Khowai)</Link></li>
                                    <li><Link to="/shops/northTripura" onClick={handleLinkClick}>উত্তর ত্রিপুরা (North Tripura)</Link></li>
                                </ul>
                            )}
                        </li>

                        {/* Contact */}
                        <li className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer">
                            <Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-2">
                                <Phone size={18} /> Contact Us
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </>
    );
}
