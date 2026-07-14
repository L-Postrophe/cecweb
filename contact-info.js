// Centralized contact information for Contractors' Equipment Corporation.
// Edit this file once to update phone numbers, email, address, and Formspree across the whole site.

const CEC_CONTACT = {
  companyName: "Contractors' Equipment Corporation",

  // Add, remove, or reorder phone numbers here.
  phones: [
    { 
      display: "0917 122 2847",
      tel: "+639171222847"
    },
    {
      display: "0929 990 5411",
      tel: "+639299905411"
    },
    {
      display: "02 8361 5148",
      tel: "+63283615148"
    }
  ],

  email: "sales@cec-equipment.com",

  addressLines: [
    "1255 Epifanio de los Santos Ave,",
    "Brgy. Apolonio Samson, Quezon City, 1106 Metro Manila"
  ],

  // Replace YOUR_FORM_ID with the ID Formspree gives you, for example:
  // https://formspree.io/f/xayzabcd
  formspreeEndpoint: "https://formspree.io/f/mlgypnen",

  formSubject: "New equipment inquiry from CEC website"
};

function buildPhoneList(container, phones) {
  container.innerHTML = "";

  phones.forEach((phone) => {
    const row = document.createElement("p");
    row.className = "phone-row";

    const label = document.createElement("span");
    label.className = "phone-label";
    label.textContent = phone.label;

    const link = document.createElement("a");
    link.href = `tel:${phone.tel}`;
    link.textContent = phone.display;

    row.append(label, link);
    container.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const { phones, email, addressLines, formspreeEndpoint, formSubject } = CEC_CONTACT;
  const primaryPhone = phones[0];

  document.querySelectorAll("[data-phone-list]").forEach((container) => {
    buildPhoneList(container, phones);
  });

  document.querySelectorAll("[data-primary-phone-link]").forEach((link) => {
    if (!primaryPhone) return;
    link.href = `tel:${primaryPhone.tel}`;
    link.textContent = `Call ${primaryPhone.tel}`;
  });

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${email}`;
    link.textContent = email;
  });

  document.querySelectorAll("[data-address]").forEach((address) => {
    address.innerHTML = addressLines.map((line) => line.trim()).filter(Boolean).join("<br>");
  });

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.action = formspreeEndpoint;

    const subject = form.querySelector("[data-form-subject]");
    if (subject) {
      subject.value = formSubject;
    }

    form.addEventListener("submit", (event) => {
      if (formspreeEndpoint.includes("YOUR_FORM_ID")) {
        event.preventDefault();
        alert("Please add your Formspree form ID in contact-info.js before publishing the contact form.");
      }
    });
  });
});
