window.onload = function () {
  // ------------------------------------------------------------------
  // Create Button Element
  // ------------------------------------------------------------------
  const btn = document.createElement('button');

  // ------------------------------------------------------------------
  // Style Button
  // ------------------------------------------------------------------
  btn.style.display = 'none';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '30px';
  btn.style.zIndex = '99999';
  btn.style.border = '2px solid white';
  btn.style.outline = 'none';
  btn.style.backgroundImage = 'none';
  btn.style.backgroundPosition = '0% 0%';
  btn.style.backgroundSize = 'auto auto';
  btn.style.backgroundRepeat = 'repeat';
  btn.style.backgroundOrigin = 'repeat';
  btn.style.backgroundClip = 'padding-box';
  btn.style.backgroundAttachment = 'border-box';
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';
  btn.style.cursor = 'pointer';
  btn.style.padding = '0.15rem 1.15rem 0.45rem 1.15rem';
  btn.style.borderRadius = '8px';
  btn.style.fontSize = '1.5rem';
  btn.style.fontWeight = '700';
  btn.style.opacity = '0.50';
  btn.style.transitionProperty = 'opacity';
  btn.style.transitionDuration = '0.15s';

  // ------------------------------------------------------------------
  // Hover Styles for Button
  // ------------------------------------------------------------------
  btn.addEventListener('mouseenter', e => {
    btn.style.opacity = '1';
    btn.style.transitionProperty = 'opacity';
    btn.style.transitionDuration = '0.15s';
  });

  btn.addEventListener('mouseleave', e => {
    btn.style.opacity = '0.50';
    btn.style.transitionProperty = 'opacity';
    btn.style.transitionDuration = '0.15s';
  });

  // ------------------------------------------------------------------
  // Create Text for Button
  // ------------------------------------------------------------------
  const text = document.createTextNode('↑');

  // ------------------------------------------------------------------
  // Add Text to Button
  // ------------------------------------------------------------------
  btn.appendChild(text);

  // ------------------------------------------------------------------
  // Add Click Event Listener to Button
  // ------------------------------------------------------------------
  btn.addEventListener('click', e => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  // ------------------------------------------------------------------
  // Add Button to DOM
  // ------------------------------------------------------------------
  document.getElementsByTagName('body')[0].appendChild(btn);

  // ------------------------------------------------------------------
  // Listen for Scroll Events from User
  // ------------------------------------------------------------------
  window.onscroll = function () {
    scrollFunction();
  };

  // ------------------------------------------------------------------
  // Display Button if User Has Scrolled
  // ------------------------------------------------------------------
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }
};
