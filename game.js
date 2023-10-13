let namaSekolah = {

    sekolah : "sdn Sumber Jaya05",
    seluruhSiswa  : 120,
    jumlahKelas : 17,
    pendiri : {
        kepsek : "ramadhan effendi",
        wakil : "ahmad"
    }

};


// Destructur array 
// let namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
// for (i = 0; i < namaHari.length; i++)
// let [kesatu, kedua, ketiga, ...hariLainnya] = namaHari ; 
// console.log(kesatu, kedua, ketiga, hariLainnya);


// Destructur object

// let sekolahan = namaSekolah.sekolah;
// let siswa = namaSekolah.seluruhSiswa;
// let kelas = namaSekolah.jumlahKelas;
// console.log(sekolahan, siswa, kelas);

// let { sekolah, seluruhSiswa, ...lainnya} = namaSekolah;
// console.log(sekolah, seluruhSiswa, lainnya);


// Destructur di function parameter 
// cara pertama
// function printNamaSekolah(sekolah, seluruhSiswa, jumlahKelas, ...lainnya) {
// console.log(sekolah, seluruhSiswa, jumlahKelas, lainnya);
// }
// printNamaSekolah(namaSekolah.sekolah, namaSekolah.seluruhSiswa, namaSekolah.jumlahKelas, namaSekolah.lainnya);

// cara kedua dengan menggunakan default value
function printNamaSekolah({sekolah, seluruhSiswa:SS, jumlahKelas:JK, ...lainnya}) {
    console.log(sekolah, SS, JK, lainnya);
    }
    printNamaSekolah(namaSekolah);
