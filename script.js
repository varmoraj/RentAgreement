function updatePreview() {
  const getVal = id => document.getElementById(id).value || '________';

  const map = {
    p_lessorName: getVal('lessorName'),
    p_lessorName2: getVal('lessorName'),
    p_lessorName3: getVal('lessorName'),
    p_lessorAddress: getVal('lessorAddress'),

    p_lessee1: getVal('lessee1'),
    p_lessee1Address: getVal('lessee1Address'),
    p_lessee2: getVal('lessee2'),
    p_lessee2Address: getVal('lessee2Address'),
    p_lessee3: getVal('lessee3'),
    p_lessee3Address: getVal('lessee3Address'),

    p_lessee1b: getVal('lessee1'),
    p_lessee2b: getVal('lessee2'),
    p_lessee3b: getVal('lessee3'),

    p_officeAddress: getVal('officeAddress'),
    p_officeAddress2: getVal('officeAddress'),

    p_startDate: getVal('startDate'),
    p_startDate2: getVal('startDate'),
    p_endDate: getVal('endDate'),
    p_rentAmount: getVal('rentAmount')
  };

  for (const id in map) {
    const el = document.getElementById(id);
    if (el) el.textContent = map[id];
  }
}

function downloadPDF() {
  const preview = document.getElementById('preview');
  const redFields = preview.querySelectorAll('.red');

  // Turn all red text to black for PDF
  redFields.forEach(el => el.style.color = 'black');

  html2pdf()
    .from(preview)
    .set({
      margin: 0,
      filename: 'Rent_Agreement.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    })
    .save()
    .then(() => {
      // Revert red styling
      redFields.forEach(el => el.style.color = 'red');
    });
}
