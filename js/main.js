// ── Navbar scroll behavior ────────────────
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolldown');
  } else {
    navbar.classList.remove('scrolldown');
  }
});

// ── Coupon accordion ──────────────────────
const couponHead = document.querySelector('.form-coupon-head');

if (couponHead) {
  couponHead.addEventListener('click', () => {
    couponHead.classList.toggle('active');
    couponHead.nextElementSibling.classList.toggle('is-open');
  });
}

// ── Task section accordion ────────────────
document.querySelectorAll('.task-section-header').forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('is-open');
    header.nextElementSibling.classList.toggle('is-open');
  });
});

// ── Verify code field ─────────────────────
const btnVerify = document.querySelector('.btn-verify');
const verifyGroup = document.querySelector('#verify')?.closest('.form-group');

if (btnVerify && verifyGroup) {
  verifyGroup.classList.add('form-group--hidden');

  btnVerify.addEventListener('click', () => {
    verifyGroup.classList.remove('form-group--hidden');
    verifyGroup.classList.add('form-group--reveal');
    document.querySelector('#verify').focus();
  });
}
