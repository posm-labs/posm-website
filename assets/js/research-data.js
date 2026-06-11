// ============================================================
//  POSM — Research Areas Configuration
//  ════════════════════════════════════
//  ✏️  EDIT THIS FILE to update research area data.
//  Changes here automatically update the sidebar navigation
//  on all individual research pages.
//
//  To add a new research area:
//    1. Add a new entry to RESEARCH_AREAS below
//    2. Create a new HTML page in /research/<slug>.html
//    3. Place the images in /assets/images/research/
// ============================================================

const RESEARCH_AREAS = [
  {
    title: 'Neutral Atom Platforms',
    slug:  'laser-stabilization',
    cardImage: 'assets/images/research/neutral-atoms.jpg',
    pageImage: '../assets/images/research/neutral-atoms.jpg',
    description:
      'Cold-atom systems and Rydberg-based sensing for quantum experiments, precision measurement, and emerging quantum technologies.'
  },
  {
    title: 'Integrated Quantum RF Hardware',
    slug:  'cold-atoms',
    cardImage: 'assets/images/research/RF.jpg',
    pageImage: '../assets/images/research/RF.jpg',
    description:
      'RF and microwave hardware for quantum experiments, including frequency-control electronics, high-speed drivers, mixed-signal PCBs, and integrated circuit concepts.'
  },
  {
    title: 'Integrated Photonic Hardware',
    slug:  'integrated-photonics',
    cardImage: 'assets/images/research/electro-optics.jpg',
    pageImage: '../assets/images/research/electro-optics.jpg',
    description:
      'Custom optical, electro-optic, and optomechanical hardware for quantum systems, including modulation assemblies, beam-routing modules, and compact photonic subsystems.'
  },
  {
    title: 'POSMq',
    slug:  'automation-fpga',
    cardImage: 'assets/images/research/lab-control.jpg',
    pageImage: '../assets/images/research/lab-control.jpg',
    description:
      'Model-based lab control platform for experimental control, drift detection, hardware modeling, and automated setup decisions.'
  }
];


// ─── Sidebar Builder ──────────────────────────────────────────
// Automatically populates the sidebar on /research/*.html pages.
// Requires: <nav id="research-sidebar-nav" data-current-slug="...">
(function () {
  'use strict';

  const sidebar = document.getElementById('research-sidebar-nav');
  if (!sidebar) return;

  const currentSlug = sidebar.dataset.currentSlug;

  // Heading
  const heading = document.createElement('div');
  heading.className = 'research-sidebar-heading';
  heading.textContent = 'Research Areas';
  sidebar.appendChild(heading);

  // Links to each research area
  RESEARCH_AREAS.forEach(function (area) {
    var link = document.createElement('a');
    link.href = area.slug + '.html';
    link.className = 'research-sidebar-link';
    link.textContent = area.title;
    if (area.slug === currentSlug) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
    sidebar.appendChild(link);
  });
})();
