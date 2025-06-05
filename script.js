function sayHello() {
  const intro = document.getElementById('intro');
  if (intro) {
    intro.innerText = "Chúc mừng, bạn đã bị tui lừa Liu liu Liu";
    intro.style.color = "#ffeb3b";
    intro.style.fontWeight = "bold";
    intro.style.marginTop = "20px";
  }
  alert("Xin chào từ JavaScript!");
}

// Nhạc nền tự động lặp lại
const bgMusic = new Audio('sound/bg-music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.2;

// Tự động phát nhạc khi trang load
window.addEventListener('DOMContentLoaded', () => {
  bgMusic.play().catch(() => {
    console.log("Đợi người dùng tương tác để phát nhạc...");
  });
});

// Phát lại nhạc nếu người dùng nhấp vào trang
window.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
});
