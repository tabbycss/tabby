(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Global
    root.tabbyModule = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const h = async (e) => {
    e.preventDefault();
    const t = e.target.closest('.tab');
    if (!t) return;

    const c = t.closest('.tabby');
    const a = c.querySelectorAll('.tab');

    a.forEach(i => i.removeAttribute('selected'));
    t.setAttribute('selected', '');
  };

  const handleKeyDown = (e) => {
    const t = e.target.closest('.tab');
    if (!t) return;

    const c = t.closest('.tabby');
    const a = Array.from(c.querySelectorAll('.tab'));
    const index = a.indexOf(t);

    if (e.key === 'ArrowRight') {
      const nextIndex = (index + 1) % a.length;
      a[nextIndex].focus();
      h({ target: a[nextIndex] });
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (index - 1 + a.length) % a.length;
      a[prevIndex].focus();
      h({ target: a[prevIndex] });
    }
  };

  const i = () => {
    document.querySelectorAll('.tabby').forEach(c => {
      c.removeEventListener('click', h);
      c.addEventListener('click', h);
      c.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('keydown', handleKeyDown);
      });
    });
  };

  document.addEventListener('DOMContentLoaded', i);

  return {
    init: i
  };
}));