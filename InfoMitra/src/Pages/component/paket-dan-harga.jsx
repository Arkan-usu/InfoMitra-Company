import { ScrollToTop, TitlePages, PricingCard} from "@/Components";

export function PaketDanHarga() {
    TitlePages('Paket Dan Harga | ');
    ScrollToTop();

    return(
        <>
            <div className="bg-white py-10">
                <section className=" min-h-[80vh] pb-10 mx-20">
                    <h1 className="text-center font-bold text-2xl md:text-3xl px-5 md:px-30 py-5 lg:mb-5">
                        Pilih Paket Promosi Anda
                    </h1>
                    <div className="flex flex-wrap mx-5 md:mx-10 justify-center space-x-5 lg:space-y-0 lg:space-x-10">
                        <PricingCard />
                    </div>
                </section>
            </div>
        </>
    );
}