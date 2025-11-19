import { SearchIcon } from "@/assets/logo";

export function SearchingBrosur(){
    return(
        <>
            <div className="join shadow-sm flex gap-5 mb-1">
                {/* 1. Dropdown Kategori (Sisi Kiri) */}
                <select className="select select-bordered join-item w-50 px-1 text-lg border-2 border-gray-400 focus:outline-none bg-gray-50 text-gray-700">
                    <option disabled selected>Kategori</option>
                    <option>Tidak Ada</option>
                    <option>Instagram</option>
                    <option>Banner</option>
                    <option>Brosur</option>
                    <option>Video</option>
                </select>

                {/* 2. Input Pencarian (Tengah) */}
                <div className="flex">
                    <input type="text" placeholder="Cari brosur..." 
                    className="input input-bordered join-item p-1 text-lg border-2 border-gray-400 focus:outline-none bg-white text-gray-700" 
                    />

                    <button className="btn join-item bg-[#0f2c59] hover:bg-[#0a1f40] text-white border-none p-1.5 text-lg ml-2 flex gap-2">
                        <img src={SearchIcon} alt="Search Icon" width={"24px"} />
                        <span className="inline">Cari</span>
                    </button>
                </div>
                {/* 3. Tombol Cari (Sisi Kanan) */}
            </div>
        </>
    );
}