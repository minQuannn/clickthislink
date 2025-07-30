function sayHello() {
  // Nếu muốn hiển thị lại dòng chữ troll, bỏ comment bên dưới
  const intro = document.getElementById('intro');
  if (intro) {
    intro.innerText = "Chúc mừng, bạn đã bị tui lừa Liu liu Liu";
    intro.style.color = "#ffeb3b";
    intro.style.fontWeight = "bold";
    intro.style.marginTop = "20px";
  }

  // Phát nhạc khi nhấn OK
  bgMusic.play().catch((e) => {
    console.log("Không thể phát nhạc:", e);
  });

  // Bắt đầu hiệu ứng pháo hoa giấy và bóng bay
  startConfetti();
  startBalloons();
}

// Nhạc nền
const bgMusic = new Audio('sound/bg-music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.2;

// HIỆU ỨNG PHÁO HOA GIẤY
function startConfetti() {
  const duration = 5000;
  const end = Date.now() + duration;

  const colors = ['#ff0', '#0f0', '#f0f', '#0ff', '#f00', '#00f'];

  (function frame() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-20px';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.8';
    particle.style.zIndex = '9999';
    particle.style.pointerEvents = 'none';
    particle.style.transition = 'transform 3s linear';

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform = `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`;
    });

    setTimeout(() => {
      document.body.removeChild(particle);
    }, 3000);

    if (Date.now() < end) {
      setTimeout(frame, 100);
    }
  })();
}

// HIỆU ỨNG BÓNG BAY BAY LÊN
function startBalloons() {
  const balloonCount = 20;
  const colors = ['#ff6f91', '#ffcc70', '#6fcf97', '#56ccf2', '#bb6bd9'];

  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 90 + '%';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 7000); // sau 7 giây thì biến mất
  }
}
