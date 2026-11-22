
const params = new URLSearchParams(window.location.search);
const namaTamu = params.get("to");

if (namaTamu) {
  document.getElementById("namaTamu").textContent =
    namaTamu.replace(/\+/g, " ");
}

function bukaUndangan() {
  const cover = document.getElementById("cover");
  const isi = document.getElementById("isiUndangan");
  const musik = document.getElementById("musikUndangan");

  cover.style.display = "none";
  isi.style.display = "block";

  if (musik) {
    musik.play().catch(error => {
      console.log("Musik tidak dapat diputar:", error);
    });
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function salinRekening() {
  const nomor = document.getElementById("nomorRekening");

  if (!nomor) return;

  navigator.clipboard.writeText(nomor.textContent.trim())
    .then(() => alert("Nomor rekening berhasil disalin!"))
    .catch(() => alert("Gagal menyalin nomor rekening."));
}

function kirimUcapanWA() {
  const nama = document.getElementById("namaPengirim").value.trim();
  const ucapan = document.getElementById("isiUcapan").value.trim();

  if (!nama || !ucapan) {
    alert("Mohon isi nama dan ucapan terlebih dahulu.");
    return;
  }

  const nomorWA = "6287874820403"; // GANTI DENGAN NOMOR WA MEMPELAI

  const pesan = `Assalamu'alaikum.
Saya ${nama}, mohon maaf belum bisa hadir.

Doa dan ucapan saya:
${ucapan}`;

  window.open(
    "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan),
    "_blank"
  );
}

// HITUNG MUNDUR PERNIKAHAN
const tanggalPernikahan = new Date("2026-11-26T08:00:00+07:00").getTime();

function hitungMundur() {
  const sekarang = new Date().getTime();
  const selisih = tanggalPernikahan - sekarang;

  if (selisih <= 0) {
    ["hari", "jam", "menit", "detik"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });

    return;
  }

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
  const menit = Math.floor((selisih / (1000 * 60)) % 60);
  const detik = Math.floor((selisih / 1000) % 60);

  document.getElementById("hari").textContent = hari;
  document.getElementById("jam").textContent = String(jam).padStart(2, "0");
  document.getElementById("menit").textContent = String(menit).padStart(2, "0");
  document.getElementById("detik").textContent = String(detik).padStart(2, "0");
}

hitungMundur();
setInterval(hitungMundur, 1000);
