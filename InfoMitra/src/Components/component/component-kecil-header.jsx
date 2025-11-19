import { Link } from 'react-router-dom';
import { logoSrc, anonimusIcon } from "@/assets/logo";
import { ProfilTamu } from "@/Components";

export function MobileMenu({ isOpen, toggleMenu, closeAll, navLinks }) {
    return (
        <section className="lg:hidden">
            <p onClick={toggleMenu} className="text-3xl font-bold px-2 overflow-hidden cursor-pointer">
                ☰
            </p>
            {isOpen && (
                <div className="bg-amber-400 fixed w-[200px] h-96 top-[52px] right-0 m-0 z-50">
                    <ul className="flex flex-col justify-center items-start px-2 w-full mb-auto mt-5">
                        {navLinks.map((link) => (
                            <li key={link.text} className="font-bold text-black hover:text-gray-200 w-full my-1 py-1 px-2 hover:underline" >
                                <Link to={link.to} onClick={closeAll}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export function LogoUsaha() {
    const handleLogoClick = () => {
        window.location.reload();
    };

    return (
        <section>
            <img src={logoSrc} alt="Logo Bisnis" onClick={handleLogoClick}
                className="h-[50px] cursor-pointer ml-0 lg:ml-5" />
        </section>
    );
}

export function LaptopNavigasi({ navLinks }) {
    return (
        <section className="text-2xl hidden lg:flex">
            <ul className="flex flex-row justify-center space-x-10">
                {navLinks.map((link) => (
                    <li key={link.text} className="font-semibold hover:text-[var(--color-neutral)] hover:underline">
                        <Link to={link.to}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
  
export function UserProfile({ isProfileDropdownOpen, toggleProfileDropdown, closeAllDropdowns }) {
    return (
        <section>
            <div onClick={toggleProfileDropdown} className="bg-white text-white rounded-full mr-5 md:mr-10 size-9 object-contain overflow-hidden flex justify-center items-center hover:cursor-pointer border-2" >
                <img src={anonimusIcon} alt="Gambar Pengguna" className="h-11" />
            </div>
            <ProfilTamu isProfileDropdownOpen={isProfileDropdownOpen} closeAllDropdowns={closeAllDropdowns } />
        </section>
    );
}