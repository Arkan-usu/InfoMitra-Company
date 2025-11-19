import { useState } from 'react';
import { LogoUsaha, LaptopNavigasi, MobileMenu, UserProfile } from '@/Components';

const navLinks = [
    { to: '/Pages/beranda', text: 'Beranda' },
    { to: '/Pages/galeri-iklan', text: 'Galeri Iklan' },
    { to: '/Pages/paket-dan-harga', text: 'Paket Iklan' },
    { to: '/Pages/cara-kerja', text: 'Cara Kerja' },
];

// --- Komponen Utama ---
export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isProfileDropdownOpen) {
            setIsProfileDropdownOpen(false);
        }
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    const closeAllDropdowns = () => {
        setIsMobileMenuOpen(false);
        setIsProfileDropdownOpen(false);
    };

    return (
        <header className="fixed justify-between flex flex-row items-center w-full py-[10px] shadow-lg border-b border-[var(--color-base-300)] z-50">
            <LogoUsaha />

            <div className="flex flex-row items-center space-x-4 lg:space-x-9">
                <LaptopNavigasi navLinks={navLinks} />
                <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} closeAll={closeAllDropdowns} navLinks={navLinks}/>
                <UserProfile isProfileDropdownOpen={isProfileDropdownOpen} toggleProfileDropdown={toggleProfileDropdown} closeAllDropdowns={closeAllDropdowns} />
            </div>
            
        </header>
    );
}