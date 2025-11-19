import { brosurKecilList } from "../data/data-brosur-kecil";
import { SearchingBrosur } from "@/Components";

export function BrosurKecil(){
    return (
        <>
            <div className="mx-17 flex flex-row border-b-2 items-end justify-between">
                <h1 className="font-bold text-3xl"> Daftar Brosur</h1>
                <SearchingBrosur />
            </div> 
            <div className="grid my-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 mx-17">
                {brosurKecilList.map((brosur) => (
                    <div key={brosur.id} className="bg-amber-200 border-3">
                        <img src={brosur.gambar} alt={`Brosur ${brosur.id}`}/>
                    </div>
                ))}
            </div>
        </>
    );
}