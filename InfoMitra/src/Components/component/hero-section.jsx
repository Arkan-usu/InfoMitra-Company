import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { 
    containerVariants, itemVariants, heroDescription, coreValuesData
} from "@/Components";

export const Jelajahi = () => {
    return(
        <>
            <Link to="/Pages/galeri-iklan">
                <div className="bg-[var(--color-success)] px-10 py-3 font-bold text-lg md:text-xl rounded-lg my-10 w-64 text-center mx-auto hover:bg-[var(--color-success-hover)]">
                    Jelajahi InfoMitra
                </div>
            </Link>
        </>
    );  
}

export const TentangKami = () => {
    return(
        <>
            <Link to="/Pages/tentang-kami">
                <div className="border-2 px-10 py-3 font-bold text-lg md:text-xl rounded-lg my-10 w-64 text-center mx-auto hover:bg-[var(--color-base-200)]">
                    Tentang Kami
                </div>
            </Link>
        </>
    );
}

export function HeroSection({beranda}){
    return(
        <>
            <motion.section className='h-screen flex text-gray-300 bg-[var(--color-base-100)]' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <div className='my-auto'>
                    <motion.h1 className="text-center font-bold text-2xl md:text-5xl px-5 md:px-30 pb-5" variants={itemVariants} >
                        Promosi Digital yang Mudah & Terjangkau untuk UMKM
                    </motion.h1> 

                    <motion.h2  className="text-justify md:text-center md:px-15 px-5 text-lg md:text-2xl" variants={itemVariants} >
                        {heroDescription.map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                {index < heroDescription.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </motion.h2>
                    
                    <motion.div variants={itemVariants} className="flex flex-row mx-auto gap-10 justify-center items-center">
                        <Jelajahi />
                        {beranda && <TentangKami />}
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}

export function NilaiNilai(){
    return(
        <>
            <motion.section className=' flex text-white bg-[#ececec] py-10' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className='my-auto'>
                    <motion.section variants={itemVariants}>
                        <div className="text-center font-bold text-black text-2xl md:text-3xl px-0 md:px-30 py-5">
                            Nilai-Nilai Inti InfoMitra
                        </div>
                        <p className="text-justify text-black md:text-center md:px-10 px-5 text-lg md:text-xl">
                            Di InfoMitra, kami tidak hanya membangun platform; kami membangun jembatan menuju kesuksesan bagi setiap pelanggan kami. Setiap langkah, fitur, dan keputusan yang kami ambil dipandu oleh empat pilar utama yang menjadi inti dari identitas kami:
                        </p>
                    </motion.section>

                    <motion.div className="flex flex-wrap justify-center px-3 py-10 gap-10 md:gap-x-10 md:p-10 w-fully text-black" variants={containerVariants}>
                        {coreValuesData.map((item) => (
                            <motion.div key={item.id} className="w-full md:w-[250px] flex flex-col items-center p-2 md:p-5 shadow-[0_2px_5px_rgba(0,0,0,0.5)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-justify rounded-lg bg-white" variants={itemVariants} >
                                <img src={item.icon} alt={item.title} width={'100px'}/>
                                <h1 className={item.titleClassName}> {item.title} </h1>
                                <h1 className="text-center font-bold md:text-lg text-base mb-3">
                                    {item.description}
                                </h1>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}