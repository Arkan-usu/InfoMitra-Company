import { CheckIcon, CheckIcon2 } from "@/assets/logo";

export const paketHarga = [
  {
    id: "vip",
    judul: "Paket VIP",
    background : "bg-[var(--color-base-100)] text-gray-300",
    path : CheckIcon2,
    populer : true,
    benefit : [
      "Iklan banner di homepage InfoMitra",
      "Iklan banner di media sosial InfoMitra",
      "Website lengkap + fitur tambahan",
      "Halaman promosi dengan desain fleksibel",
      "Update konten tanpa batas",
      "Prioritas layanan pelanggan",
    ],
    durasi : [
      "1 bulan",
      "6 Bulan",
      "1 Tahun"
    ],
    harga : [
      "Rp 50.000",
      "Rp 300.000",
      "Rp 600.000"
    ],
    diskon : [
      0,
      0.1,
      0.2
    ]
  },
  {
    id: "biasa",
    judul: "Paket Biasa",
    background : "bg-[#ececec] text-blue-950",
    path : CheckIcon,
    populer : false,
    benefit: [
      "Brosur digital standar",
      "Halaman promosi dengan template",
      "Update brosur 1x per bulan",
      "Statistik pengunjung dasar",
    ],
    durasi : [
      "1 bulan",
      "6 Bulan",
      "1 Tahun"
    ],
    harga : [
      "Rp 30.000",
      "Rp 180.000",
      "Rp 360.000"
    ],
    diskon : [
      0,
      0,
      0
    ]
  },
];