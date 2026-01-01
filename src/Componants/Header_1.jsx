// Header.jsx
import { useState } from "react";

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    
    // Dropdown data objects
    const dropdownData = {
        business: {
            title: "For businesses",
            sections: [
                {
                    title: "Sectors We Serve",
                    items: ['Retail', 'Healthcare', 'Hospitality', 'Warehouse and Logistics', 'Office', 'Events']
                },
                {
                    title: "Solutions for Businesses",
                    items: ['Workforce Planning', 'Temp Staffing', 'Direct Hiring', 'Payrolling']
                }
            ]
        },
        workers: {
            title: "For workers",
            sections: [
                {
                    title: "Find Jobs",
                    items: ['Browse Jobs', 'Quick Apply', 'Job Alerts', 'Featured Roles']
                },
                {
                    title: "Worker Benefits",
                    items: ['Flexible Hours', 'Weekly Pay', 'Training', 'Support']
                }
            ]
        },
        resources: {
            title: "Resources",
            sections: [
                {
                    title: "Learning Center",
                    items: ['Blog', 'Guides', 'Webinars', 'Case Studies']
                },
                {
                    title: "Tools",
                    items: ['Salary Calculator', 'Job Market Report', 'Compliance Guide', 'FAQ']
                }
            ]
        },
        about: {
            title: "About",
            sections: [
                {
                    title: "Our Company",
                    items: ['Our Story', 'Mission & Values', 'Leadership', 'Careers']
                },
                {
                    title: "Connect",
                    items: ['Contact Us', 'Press', 'Partners', 'Community']
                }
            ]
        }
    };
    
    // Language options
    const languages = ['CH', 'EN'];
    
    // Navigation items
    const navItems = ['business', 'workers', 'resources', 'about'];
    
    // Close all dropdowns
    const closeAllDropdowns = () => {
        setActiveDropdown(null);
    };
    
    // Handle mouse enter for dropdown
    const handleMouseEnter = (item) => {
        setActiveDropdown(item);
    };
    
    // Handle mouse leave for dropdown
    const handleMouseLeave = (item) => {
        setTimeout(() => {
            const dropdown = document.querySelector(`.${item}-dropdown:hover`);
            if (!dropdown) {
                setActiveDropdown(null);
            }
        }, 100);
    };

    return (
        <header className="w-full shadow-sm bg-white relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-pink-600 font-bold text-2xl cursor-pointer">coople</div>

                {/* Nav */}
                <nav className="flex items-center space-x-6">
                    {/* Navigation Items */}
                    {navItems.map((item) => (
                        <div
                            key={item}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={() => handleMouseLeave(item)}
                        >
                            <button className="hover:text-pink-600 font-medium transition-colors duration-200 capitalize">
                                {dropdownData[item].title}
                            </button>

                            {activeDropdown === item && (
                                <div 
                                    className={`${item}-dropdown absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-100 rounded-md z-50 p-6 ${
                                        item === 'business' ? 'w-80 grid grid-cols-2 gap-6' : 'w-64'
                                    }`}
                                    onMouseEnter={() => setActiveDropdown(item)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {dropdownData[item].sections.map((section, index) => (
                                        <div key={index} className={index > 0 ? 'mt-6' : ''}>
                                            <h3 className="text-gray-500 font-bold mb-3 uppercase text-xs tracking-wider">
                                                {section.title}
                                            </h3>
                                            <ul className="space-y-2">
                                                {section.items.map((sectionItem, itemIndex) => (
                                                    <li key={itemIndex} className="group cursor-pointer">
                                                        <span className="text-gray-700 group-hover:text-pink-600 transition-colors duration-200 flex items-center">
                                                            <span className="w-1 h-1 bg-gray-300 rounded-full mr-2 group-hover:bg-pink-600 group-hover:scale-125 transition-all duration-200"></span>
                                                            {sectionItem}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Language Selector */}
                    <div className="flex items-center space-x-3 cursor-pointer border-l border-gray-200 pl-4">
                        {languages.map((lang) => (
                            <span 
                                key={lang}
                                className="text-gray-600 hover:text-pink-600 transition-colors duration-200 font-medium"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </nav>

                {/* Sign In / Sign Up */}
                <div className="flex items-center space-x-3">
                    <button className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium">
                        Sign in
                    </button>
                    <button className="px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-all duration-200 font-medium shadow-sm hover:shadow">
                        Sign up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;