function updatePreview() {
  document.getElementById('p_owner').textContent = document.getElementById('ownerName').value;
  document.getElementById('p_tenant').textContent = document.getElementById('tenantName').value;
  document.getElementById('p_address').textContent = document.getElementById('propertyAddress').value;
  document.getElementById('p_rent').textContent = document.getElementById('rent').value;
}

function downloadPDF() {
  const element = document.getElementById('preview');

  // Switch color to black before download
  const spans = element.querySelectorAll('.live');
  spans.forEach(span => span.style.color = 'black');
  element.style.color = 'black';

  import('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js').then(() => {
    html2pdf().from(element).set({
      margin: 0,
      filename: 'Rent_Agreement.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    }).save().then(() => {
      // Revert back to red after download
      spans.forEach(span => span.style.color = 'red');
      element.style.color = 'red';
    });
  });
}
