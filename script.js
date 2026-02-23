let totalHarga = 0;

function hitung(){

let harga = document.getElementById("room").value;
let checkin = new Date(document.getElementById("checkin").value);
let checkout = new Date(document.getElementById("checkout").value);

let selisih = (checkout - checkin) / (1000*60*60*24);

if(selisih <= 0){
  alert("Tanggal tidak valid");
  return;
}

totalHarga = harga * selisih;

document.getElementById("total").innerText =
totalHarga.toLocaleString("id-ID");
}

function booking(){

let nama = document.getElementById("nama").value;
let wa = document.getElementById("wa").value;

if(nama == "" || wa == ""){
  alert("Lengkapi data dulu");
  return;
}

let pesan =
`Halo Admin, saya ingin booking kamar:

Nama: ${nama}
WA: ${wa}
Total Harga: Rp ${totalHarga.toLocaleString("id-ID")}

Mohon konfirmasi ya.`;

let url =
"https://wa.me/628XXXXXXXXXX?text=" + encodeURIComponent(pesan);

window.open(url, "_blank");
}