
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
