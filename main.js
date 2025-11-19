// ==========================
// PRODUCTS PAGE SEARCH FILTER
// ==========================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const products = document.querySelectorAll('.product');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        product.style.display = name.includes(filter) ? '' : 'none';
      });
    });
  }

  // ==========================
  // LIGHTBOX FOR PRODUCT IMAGES
  // ==========================
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const productImgs = document.querySelectorAll('.product-img');
  const closeBtn = document.querySelector('.close');

  if (productImgs.length) {
    productImgs.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // ==========================
  // CONTACT FORM VALIDATION
  // ==========================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();
      const responseDiv = document.getElementById('formResponse');

      if (!name || !email || !phone || !subject || !message) {
        responseDiv.innerHTML = "<p class='error'>Please complete all fields.</p>";
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        responseDiv.innerHTML = "<p class='error'>Phone number must be 10 digits.</p>";
        return;
      }

      responseDiv.innerHTML = "<p class='success'>Thank you! Your message has been sent successfully.</p>";
      contactForm.reset();
    });
  }

  // ==========================
  // ENQUIRY FORM VALIDATION
  // ==========================
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const type = document.getElementById('enquiryType').value;
      const details = document.getElementById('details').value.trim();
      const responseDiv = document.getElementById('enquiryResponse');

      if (!name || !email || !type || !details) {
        responseDiv.innerHTML = "<p class='error'>Please complete all fields before submitting.</p>";
        return;
      }

      let responseMsg = "";
      switch (type) {
        case "Product":
          responseMsg = `Thank you, ${name}! We’ll get back to you soon with product availability and pricing details.`;
          break;
        case "Service":
          responseMsg = `Thank you, ${name}! Our service team will contact you shortly with more information.`;
          break;
        case "Volunteer":
          responseMsg = `Thank you for your interest in volunteering, ${name}! Our team will reach out to you soon.`;
          break;
        case "Sponsor":
          responseMsg = `Thank you for considering sponsorship, ${name}! We’ll contact you to discuss opportunities.`;
          break;
        default:
          responseMsg = `Thank you for your enquiry, ${name}. We’ll respond shortly.`;
      }

      responseDiv.innerHTML = `<p class='success'>${responseMsg}</p>`;
      enquiryForm.reset();
    });
  }
});

// ========== ACCORDION ==========
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("active");
        const panel = acc.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// ========== TABS ==========
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

// ========== MODALS ==========
const openModal = document.getElementById("openModal");
const infoModal = document.getElementById("infoModal");
const closeModal = document.getElementById("closeModal");

if (openModal) openModal.onclick = () => infoModal.style.display = "block";
if (closeModal) closeModal.onclick = () => infoModal.style.display = "none";

// Home modal
const openHomeModal = document.getElementById("openHomeModal");
const homeModal = document.getElementById("homeModal");
const closeHomeModal = document.getElementById("closeHomeModal");

if (openHomeModal) openHomeModal.onclick = () => homeModal.style.display = "block";
if (closeHomeModal) closeHomeModal.onclick = () => homeModal.style.display = "none";

// Close on background click
window.onclick = function(e){
    if (e.target === infoModal) infoModal.style.display = "none";
    if (e.target === homeModal) homeModal.style.display = "none";
};

// ========== LIGHTBOX ==========
const lightboxImgs = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeLightbox = document.querySelector(".close-lightbox");

lightboxImgs.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxContent.src = img.src;
    });
});
if (closeLightbox) closeLightbox.onclick = () => lightbox.style.display = "none";

// ========== LEAFLET MAP ==========
if (document.getElementById("map")) {
    const map = L.map('map').setView([-26.2041, 28.0473], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-26.2041, 28.0473]).addTo(map)
      .bindPopup("SmallBiz E-Commerce HQ")
      .openPopup();
}
