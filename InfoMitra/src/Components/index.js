import { coreValuesData, faqData, heroDescription} from "./data/data-beranda.jsx";
import { containerVariants, itemVariants } from './data/data-animasi.jsx';
import { caraKerjaData } from "./data/data-cara-kerja.jsx";
import { privacyData } from './data/data-footer.jsx';
import { termsData } from "./data/data-footer.jsx";
import { footerLink1, footerLink2, contactInfo } from './data/data-link-footer.jsx';
import { paketHarga } from "./data/data-benefit.jsx";

// Export data 
export {
    coreValuesData, faqData, heroDescription,
    containerVariants, itemVariants, caraKerjaData,
    privacyData, termsData,
    footerLink1, footerLink2, contactInfo, paketHarga
}

// Export component
import { ScrollToTop } from "./component/scroll-top.jsx";
import { TitlePages } from "./component/title-pages.jsx";

import { BrosurVip } from "./component/vip-brosur.jsx";
import { BrosurKecil } from "./component/brosur-kecil.jsx";
import { KomentarBox } from "./component/komentar-box.jsx";
import { LogoUsaha, LaptopNavigasi, MobileMenu, UserProfile } from './component/component-kecil-header.jsx';

import { Header } from "./component/header.jsx"
import { MainLayout } from "./component/main-layout.jsx"
import { Footer } from "./component/footer.jsx"

import { CaraKerja } from '../Pages/component/cara-kerja.jsx';

import { PricingCard } from './component/PricingCard';
import { PlanDetails } from './component/PlanDetails';
import { TampilanAwal } from "./component/tampilan-awal.jsx";
import { HeroSection, NilaiNilai } from "./component/hero-section.jsx";
import { ProfilTamu } from "./component/profil-belum-ada-akun.jsx";
import { SearchingBrosur } from "./component/search-kategori.jsx";


export {
    ScrollToTop, TitlePages, CaraKerja,
    BrosurVip, BrosurKecil, KomentarBox,
    LogoUsaha, LaptopNavigasi, MobileMenu, UserProfile,
    Header, MainLayout, Footer,
    PricingCard, PlanDetails, TampilanAwal, 
    HeroSection, NilaiNilai, ProfilTamu, SearchingBrosur
}