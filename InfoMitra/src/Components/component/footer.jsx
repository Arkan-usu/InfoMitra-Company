import { Link } from 'react-router-dom';

import { footerLink1, footerLink2, contactInfo } from "@/Components";
import { logoUsu, logoFasilkom, logoBisnis } from "@/assets/logo";

export function Footer() {
    const handleLogoClick = () => {
        location.reload();
    };

  return (
    <>
        <footer className="flex flex-col h-auto">
            <section className="py-3 lg:px-5 flex flex-row flex-wrap-reverse justify-between">
                {/* Partner */}                
                <div className="flex flex-row justify-between sm:justify-center space-x-1 items-center w-full lg:w-4/6 lg:pl-5 lg:justify-start sm:space-x-10">
                    <a href="https://www.usu.ac.id/id" target="_blank" rel="noopener noreferrer" title="Universitas Sumatera Utara" >
                        <img src={logoUsu} alt="Logo USU" width={'250px'}/>
                    </a>
                    <a href="https://fasilkom-ti.usu.ac.id/id" target="_blank" rel="noopener noreferrer" title="Fakultas Ilmu Komputer dan Teknologi Informasi" >
                        <img src={logoFasilkom} alt="Fasilkom-TI" width={'250px'}/>
                    </a>
                </div>
                {/* Partner */}

                {/* Logo bisnis */}
                <div className="flex justify-center items-center w-full lg:w-2/6">
                    <img src={logoBisnis} alt="Logo Bisnis" title="InfoMitra" onClick={handleLogoClick} width={'250px'}/>
                </div>
                {/* Logo bisnis */}
            </section>

            <section className="pt-3 pb-10 w-full flex flex-row">
                {/* Navigasi */}
                <div className="py-2 md:py-5 w-1/2 md:w-3/5 flex flex-col md:flex-row text-xs md:text-lg flex-wrap">
                    <div className="flex flex-col pl-2 md:pl-10 md:w-1/2">
                        {footerLink1.map((link) => (
                            <Link key={link.text} to={link.to} title={link.title} className="py-1 cursor-pointer hover:underline hover:text-[var(--color-neutral)]">
                                <b>{link.text}</b>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col pl-2 md:pl-10 md:w-1/2">
                        {footerLink2.map((link) => (
                            <Link key={link.text} to={link.to} title={link.title} className="py-1 cursor-pointer hover:underline hover:text-[var(--color-neutral)]">
                                <b>{link.text}</b>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Navigasi */}

                {/* Informasi tambahan */}
                <div className="py-2 md:py-5 w-1/2 lg:w-2/5 flex flex-col text-xs md:text-lg">
                    {contactInfo.map((item) => (
                    <div key={item.text} className="py-1 flex flex-row ml-3 md:ml-1 hover:underline hover:text-[var(--color-neutral)]">
                        
                        {item.icon && (
                            <img src={item.icon} alt={item.alt} title={item.title} className="w-[25px] mr-[1vw]" />
                        )}
                        
                        <a href={item.href} target="_blank" rel="noopener noreferrer" title={item.title} >
                            <b>{item.text}</b>
                        </a>
                    </div>
                    ))}

                    <div className="py-1 flex flex-row ml-3 md:ml-1">
                        <b>InfoMitra NIB:1909250087476</b>
                    </div>
                </div>
                {/* Informasi tambahan */}
            </section>
        </footer>
    </>
  );
}