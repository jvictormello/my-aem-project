export default function decorate(block) {
  const variant = ['tip', 'warning', 'error'].find((v) => block.classList.contains(v)) || 'tip';
  const icon = document.createElement('span');
  icon.className = 'callout-icon';
  icon.textContent = { tip: '💡', warning: '⚠️', error: '⛔' }[variant];
  const body = document.createElement('div');
  body.className = 'callout-body';
  body.append(...block.querySelector(':scope > div > div').childNodes);
  block.replaceChildren(icon, body);
}