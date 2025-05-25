// Data pengguna
let user = {
  name: "Andi",
  points: 0
};

// Tampilkan data saat halaman dimuat
window.onload = () => {
  document.getElementById("user-name").textContent = user.name;
  document.getElementById("user-points").textContent = user.points;
};

// Fungsi untuk klaim harian
function claimDaily() {
  user.points += 10;
  updatePoints();
  alert("Kamu mendapat 10 poin harian!");
}

// Fungsi untuk menyelesaikan tugas
function completeTask() {
  user.points += 20;
  updatePoints();
  alert("Tugas selesai! Kamu mendapat 20 poin.");
}

// Fungsi untuk memperbarui tampilan poin
function updatePoints() {
  document.getElementById("user-points").textContent = user.points;
}
