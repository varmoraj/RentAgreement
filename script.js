document.addEventListener('DOMContentLoaded', function() {
    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    
    // Generate form fields from template
    const form = document.getElementById('agreementForm');
    const fields = extractFieldsFromTemplate(agreementTemplate);
    
    fields.forEach(field => {
        const group = document.createElement('div');
        group.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = field.replace(/_/g, ' ');
        label.htmlFor = field;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = field;
        input.name = field;
        input.dataset.field = field;
        
        group.appendChild(label);
        group.appendChild(input);
        form.appendChild(group);
        
        // Add event listener for live preview
        input.addEventListener('input', updatePreview);
    });
    
    // Set default values for known fields
    setDefaultValues();
    
    // Initialize preview
    updatePreview();
    
    // Download buttons
    document.getElementById('downloadHtml').addEventListener('click', downloadHtml);
    document.getElementById('downloadPdf').addEventListener('click', downloadPdf);
    
    function extractFieldsFromTemplate(template) {
        const regex = /\[([^\]]+)\]/g;
        const fields = new Set();
        let match;
        
        while ((match = regex.exec(template)) !== null) {
            // Skip empty fields and formatting fields
            if (match[1].trim() && !match[1].startsWith('.')) {
                fields.add(match[1]);
            }
        }
        
        return Array.from(fields);
    }
    
    function setDefaultValues() {
        // Set known values from the sample document
        const knownValues = {
            'city': 'Morbi',
            'make_date': new Date().toLocaleDateString('en-IN'),
            'Lessor_name': 'Milan Ratibhai Raiyani',
            'Lessor_age': '',
            'Lessor_address': '',
            'firm_name': 'J K PRIME ENTERPRISE',
            'Lessee_1_Name': 'KEYUR PONKIYA',
            'Lessee_1_age': '',
            'Lessee_1_address': '',
            'Lessee_2_Name': 'ASHVINBHAI BABUBHAI SANKHAT',
            'Lessee_2_age': '',
            'Lessee_2_address': '',
            'Lessee_3_Name': 'JIGAR MANHARBHAI VARMORA',
            'Lessee_3_age': '',
            'Lessee_3_address': '',
            'property_type': 'commercial office',
            'property_address': 'Vagepar Survey No.919p, Plot No.3, Plot No.4, Plot No.5, Office No.2040, 2nd Floor, City Mall Nr. Sanala Baypass, Bhaktinagar Circle, Morbi-363641',
            'duration': '12',
            'start_date': new Date().toLocaleDateString('en-IN'),
            'end_date': new Date(new Date().setMonth(new Date().getMonth() + 12)).toLocaleDateString('en-IN'),
            'business_type': '',
            'rent': '5000',
            'Witness1': '',
            'Witness2': ''
        };
        
        for (const [field, value] of Object.entries(knownValues)) {
            const input = document.getElementById(field);
            if (input && value) {
                input.value = value;
            }
        }
    }
    
    function updatePreview() {
        let template = agreementTemplate;
        const form = document.getElementById('agreementForm');
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            const field = input.dataset.field;
            const value = input.value || `[${field}]`;
            
            // Replace all instances of the field
            template = template.replace(new RegExp(`\\[${field}\\]`, 'g'), 
                `<span class="highlight">${value}</span>`);
        });
        
        const previewFrame = document.getElementById('previewFrame');
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDoc.open();
        previewDoc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 20px; 
                        line-height: 1.6;
                    }
                    .highlight { color: red; font-weight: bold; }
                    .underline { text-decoration: underline; }
                    h1, h2, h3 { color: #333; }
                </style>
            </head>
            <body>
                ${template}
            </body>
            </html>
        `);
        previewDoc.close();
    }
    
    function downloadHtml() {
        const previewFrame = document.getElementById('previewFrame');
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        
        // Remove highlighting
        const highlighted = previewDoc.querySelectorAll('.highlight');
        highlighted.forEach(el => {
            el.classList.remove('highlight');
            el.style.color = '';
            el.style.fontWeight = '';
        });
        
        // Create HTML content
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Rental Agreement</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 20px; 
                        line-height: 1.6;
                    }
                    .underline { text-decoration: underline; }
                </style>
            </head>
            <body>
                ${previewDoc.body.innerHTML}
            </body>
            </html>
        `;
        
        // Trigger download
        const blob = new Blob([htmlContent], {type: 'text/html'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'rental_agreement.html';
        a.click();
    }
    
    async function downloadPdf() {
        const previewFrame = document.getElementById('previewFrame');
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        
        // Remove highlighting
        const highlighted = previewDoc.querySelectorAll('.highlight');
        highlighted.forEach(el => {
            el.classList.remove('highlight');
            el.style.color = '';
            el.style.fontWeight = '';
        });
        
        // Use html2canvas to capture the content
        const canvas = await html2canvas(previewDoc.body, {
            scale: 2,
            logging: false,
            useCORS: true
        });
        
        // Convert to PDF
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        pdf.save('rental_agreement.pdf');
    }
});
