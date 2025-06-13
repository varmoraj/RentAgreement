function updatePreview() {
  let owner = document.getElementById('ownerName').value;
  let tenant = document.getElementById('tenantName').value;
  let address = document.getElementById('propertyAddress').value;
  let rent = document.getElementById('rent').value;
  let start = document.getElementById('startDate').value;
  let end = document.getElementById('endDate').value;

  document.getElementById('p_owner').textContent = owner || "________";
  document.getElementById('p_tenant').textContent = tenant || "________";
  document.getElementById('p_address').textContent = address || "________";
  document.getElementById('p_rent').textContent = rent || "________";
  document.getElementById('p_startDate').textContent = start || "________";
  document.getElementById('p_startDate2').textContent = start || "________";
  document.getElementById('p_endDate').textContent = end || "________";
}

function downloadPDF() {
  const preview = document.getElementById('preview');

  // Change red to black temporarily
  const inputs = preview.querySelectorAll('.input');
  inputs.forEach(el => el.style.color = 'black');

  html2pdf().from(preview).set({
    margin: 0,
    filename: 'Rent_Agreement.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  }).save().then(() => {
    // Revert to red in preview
    inputs.forEach(el => el.style.color = 'red');
  });
}
