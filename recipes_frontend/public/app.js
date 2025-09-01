(function () {
  function qs(sel, root = document) { return root.querySelector(sel); }
  function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  // Password toggle if an element with data-toggle="password" exists
  function setupPasswordToggle() {
    qsa('[data-toggle="password"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const inputId = btn.getAttribute('data-target');
        const input = qs('#' + inputId);
        if (!input) return;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        btn.setAttribute('aria-pressed', String(type === 'text'));
      });
    });
  }

  function setupCTAs() {
    const cta = qs('.cta');
    if (cta) {
      cta.addEventListener('click', (e) => {
        e.preventDefault();
        // Placeholder action
        alert('Sign In clicked (placeholder)');
      });
    }
    qsa('.social-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const provider = btn.getAttribute('data-provider') || 'provider';
        alert('Continue with ' + provider + ' (placeholder)');
      });
    });

    // Generic chip toggle behavior
    // Tabs-like groups (role=tablist or data-chip-group): only one active at a time
    qsa('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const group = chip.getAttribute('data-chip-group');
        if (!group) return;

        // Determine exclusivity: treat 'sort' and 'rate' as single-select; others multi-select
        const singleSelect = group === 'sort' || group === 'rate';

        if (singleSelect) {
          qsa('.chip[data-chip-group="' + group + '"]').forEach((c) => {
            c.classList.remove('chip-filled');
            c.classList.add('chip-outline');
            c.setAttribute('aria-selected', 'false');
            c.setAttribute('aria-pressed', 'false');
            // ensure text color update
            const txts = qsa('.chip-text, .text-on-filled', c);
            txts.forEach(t => t.classList.remove('text-on-filled'));
          });
          chip.classList.remove('chip-outline');
          chip.classList.add('chip-filled');
          chip.setAttribute('aria-selected', 'true');
          chip.setAttribute('aria-pressed', 'true');
          const inner = chip.querySelector('.chip-text');
          if (inner) inner.classList.add('text-on-filled');
        } else {
          // multi-select toggle
          const isFilled = chip.classList.contains('chip-filled');
          chip.classList.toggle('chip-filled', !isFilled);
          chip.classList.toggle('chip-outline', isFilled);
          chip.setAttribute('aria-pressed', String(!isFilled));
          const inner = chip.querySelector('.chip-text');
          if (inner) inner.classList.toggle('text-on-filled', !isFilled);
        }
      });
    });

    const apply = qs('#apply-filters');
    if (apply) {
      apply.addEventListener('click', () => {
        // Collect selected filters and show placeholder action
        const selected = {};
        qsa('.chip').forEach((c) => {
          const group = c.getAttribute('data-chip-group');
          const val = c.getAttribute('data-value') || c.textContent.trim();
          if (!group) return;
          const active = c.classList.contains('chip-filled');
          if (!active) return;
          if (!selected[group]) selected[group] = [];
          selected[group].push(val);
        });
        alert('Applied filters: ' + JSON.stringify(selected));
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupPasswordToggle();
    setupCTAs();
  });
})();
