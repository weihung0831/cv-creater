export function initTypewriter(el: HTMLElement, text: string, speed = 100) {
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  // Small delay before starting
  setTimeout(type, 500);
}
