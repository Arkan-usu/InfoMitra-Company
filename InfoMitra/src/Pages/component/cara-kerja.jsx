import { motion } from 'framer-motion';

import { 
    containerVariants, itemVariants, caraKerjaData,
    ScrollToTop, TitlePages
} from "@/Components";


export function CaraKerja({pages}) {
    let n = 1;
    let pb = "";
    if (pages) {
        ScrollToTop();
        TitlePages('Cara Kerja | ');
        pb = "pb-10";
    }

    return (
        <>
            <motion.section className={`min-h-screen flex text-white bg-white ${pb}`} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className='my-auto'>
                    <motion.section variants={itemVariants}>
                        <div className="text-center font-bold text-black text-2xl md:text-3xl px-0 md:px-30 py-5 md:mt-5">
                            Cara Kerja InfoMitra
                        </div>
                        <p className="text-justify text-black md:text-center md:px-10 px-5 mx-5 text-lg md:text-xl">
                            InfoMitra bekerja dengan proses yang terstruktur untuk memastikan setiap proyek promosi digital berjalan efektif dan sesuai kebutuhan Anda. Berikut tahapan kerja kami:
                        </p>
                    </motion.section>

                    <motion.div className="flex flex-wrap px-3 py-10 justify-center gap-10 md:gap-x-10 md:p-10 w-fully text-black" variants={containerVariants}>
                        {caraKerjaData.map((item) => (
                            <motion.div key={item.id} className="flex flex-col w-full md:w-[375px] p-2 md:p-5 shadow-[0_2px_5px_rgba(0,0,0,0.5)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-justify rounded-lg bg-[#d8d8d8]" variants={itemVariants} >
                                <div className='mb-3 flex mx-auto items-center justify-center text-2xl font-bold p-0 m-0 size-14 bg-blue-500 rounded-full'> 
                                    <span>{n++}</span>
                                </div>
                                <h1 className="text-center font-semibold md:text-xl text-lg mx-3"> {item.section} </h1>
                                <h1 className="text-center md:text-lg text-base mb-3 mt-3 mx-5">
                                    {item.penjelasan}
                                </h1>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}