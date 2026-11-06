// ALTURA Clothes Store - Interactive Enhancements
document.addEventListener('DOMContentLoaded', function () {
  // 1. Live Cart Badge from localStorage
  let count = parseInt(localStorage.getItem('cartCount') || '0', 10);
  
  function updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = count;
    });
  }
  updateBadge();

  // 2. Interactive "Add to Cart" button feedback
  const buttons = document.querySelectorAll('.btn-add-to-cart, .add-cart');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      count++;
      localStorage.setItem('cartCount', count);
      updateBadge();

      // Gentle button feedback
      const originalText = this.textContent;
      this.textContent = 'Added ✓';
      this.style.background = 'linear-gradient(45deg, #87adfe, #ff77cd)';
      this.style.color = '#fff';

      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
        this.style.color = '';
      }, 1000);
    });
  });
});
