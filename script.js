// Initialize with empty values
document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
});

function updatePreview() {
    // Get all form values
    const city = document.getElementById('city').value || '[city]';
    const make_date = document.getElementById('make_date').value || '[make_date]';
    const formattedDate = make_date !== '[make_date]' ? formatDate(new Date(make_date)) : '[make_date]';
    
    const Lessor_name = document.getElementById('Lessor_name').value || '[Lessor_name]';
    const Lessor_age = document.getElementById('Lessor_age').value || '[Lessor_age]';
    const Lessor_address = document.getElementById('Lessor_address').value || '[Lessor_address]';
    
    const firm_name = document.getElementById('firm_name').value || '[firm_name]';
    const Lessee_1_Name = document.getElementById('Lessee_1_Name').value || '[Lessee_1_Name]';
    const Lessee_1_age = document.getElementById('Lessee_1_age').value || '[Lessee_1_age]';
    const Lessee_1_address = document.getElementById('Lessee_1_address').value || '[Lessee_1_address]';
    const Lessee_2_Name = document.getElementById('Lessee_2_Name').value || '[Lessee_2_Name]';
    const Lessee_2_age = document.getElementById('Lessee_2_age').value || '[Lessee_2_age]';
    const Lessee_2_address = document.getElementById('Lessee_2_address').value || '[Lessee_2_address]';
    const Lessee_3_Name = document.getElementById('Lessee_3_Name').value || '[Lessee_3_Name]';
    const Lessee_3_age = document.getElementById('Lessee_3_age').value || '[Lessee_3_age]';
    const Lessee_3_address = document.getElementById('Lessee_3_address').value || '[Lessee_3_address]';
    
    const property_type = document.getElementById('property_type').value || '[property_type]';
    const property_address = document.getElementById('property_address').value || '[property_address]';
    const duration = document.getElementById('duration').value || '[duration]';
    
    const start_date = document.getElementById('start_date').value || '[start_date]';
    const formattedStartDate = start_date !== '[start_date]' ? formatDate(new Date(start_date)) : '[start_date]';
    
    const end_date = document.getElementById('end_date').value || '[end_date]';
    const formattedEndDate = end_date !== '[end_date]' ? formatDate(new Date(end_date)) : '[end_date]';
    
    const business_type = document.getElementById('business_type').value || '[business_type]';
    const rent = document.getElementById('rent').value || '[rent]';
    
    const Witness1 = document.getElementById('Witness1').value || '[Witness1]';
    const Witness2 = document.getElementById('Witness2').value || '[Witness2]';

    // Generate the agreement HTML
    const agreementHTML = `
        <h2 style="text-align: center;">RENTAL AGREEMENT</h2>
        
        <p>This agreement made at <span class="underline">${city}</span> on this 
        <span class="underline">${formattedDate}</span> between,</p>
        
        <p>Office Lessor: <span class="underline">${Lessor_name}</span></p>
        
        <p><strong>First Party through its owner:-</strong></p>
        <ol>
            <li><span class="underline">${Lessor_name}</span></li>
        </ol>
        <p>Aged <span class="underline">${Lessor_age}</span> Years, <span class="underline">${Lessor_address}</span></p>
        
        <p>Office Lessee: <span class="underline">${firm_name}</span></p>
        
        <p><strong>Second Party through its Partners:-</strong></p>
        <ol>
            <li><span class="underline">${Lessee_1_Name}</span></li>
            <p>Aged <span class="underline">${Lessee_1_age}</span> Years, Residing At <span class="underline">${Lessee_1_address}</span></p>
            
            <li><span class="underline">${Lessee_2_Name}</span></li>
            <p>Aged <span class="underline">${Lessee_2_age}</span> Years, Residing At <span class="underline">${Lessee_2_address}</span></p>
            
            <li><span class="underline">${Lessee_3_Name}</span></li>
            <p>Aged <span class="underline">${Lessee_3_age}</span> Years, Residing At <span class="underline">${Lessee_3_address}</span></p>
        </ol>
        
        <p>The <span class="underline">${property_type}</span> will be carried on <span class="underline">${property_address}</span> /or at
        such other place or Places, hereinafter referred to as the \`LESSEE' of the other part;</p>
        
        <p>WHEREAS the Lessors the lawful owner of , and otherwise well
        Sufficiently entitled <span class="underline">${property_address}</span> falling in the category,
        commercial office with an extent of <strong>100.60 SQF</strong> here in after
        referred to as the said premises AND WHEREAS at the request of the
        Lessee, the Lessor has agreed to let the said premises to the tenant for
        a term of <span class="underline">${duration}</span> Months commencing from date of <span class="underline">${formattedStartDate}</span> to
        <span class="underline">${formattedEndDate}</span> in the manner hereinafter appearing.</p>
        
        <h3>NOW THIS AGREEMENT WITNESSETH AND IT IS HEREBY AGREED BY AND BETWEEN</h3>
        
        <h3>THE PARTIES AS UNDER</h3>
        
        <ol>
            <li>That the Lessor hereby grant to the Lessee, the right to enter into
                and use and remain in the said premises along with the existing
                fixtures and fittings listed in Annexure 1 to this Agreement and
                that the Lessee shall be entitled to peacefully possess, and enjoy
                possession of the said premises, and the other rights herein.</li>
            
            <li>That the lease hereby granted shall, unless cancelled earlier under
                and provision of this Agreement, remain in force for a period of
                <strong><span class="underline">${duration} Months.</span></strong></li>
            
            <li>That the Lessee will have the option to terminate this lease by
                giving one months' notice in writing to the Lessor.</li>
            
            <li>That the Lessee shall have no right to create any sub-lease or
                assign or transfer in any manner the lease or give to any one the
                possession of the said premises, or any part thereof.</li>
            
            <li>That the Lessee shall use the said premises only for business
                Purposes. The Lessee shall use premises for <span class="underline">${business_type}</span><strong>.</strong></li>
            
            <li>That the Lessor shall, before handing over the said premises, ensure
                the working of sanitary, electrical and water supply Connections and
                other fittings pertaining to the said premises. It is agreed that it
                shall be the responsibility of the Lessor for their returning the
                working condition of the time of re-possession of the said Premises
                (reasonable wear and tear and loss or damage by fire, flood, rains,
                accident, irresistible force or act of God excepted).</li>
            
            <li>That the lessee is not authorized to make any alteration in the
                construction of the said premises. The Lessee may however install
                and remove his own fittings and fixtures, provided this is done
                without causing any excessive damage or loss to the said premises.</li>
            
            <li>That the day to day repair jobs such as fuse blow out, replacement
                of light bulbs/tubes, leakage of water taps, maintenance of the
                water pump and other minor repairs, etc., shall be effected by the
                Lessee at its own cost, and any major repairs, either structural or
                to the electrical or water connection. Plumbing leaks, water seepage
                shall be attended to by the Lessor. In the event of the Lessor
                failing to carry out the repairs on receiving notice from the
                lessee, the lessee shall undertake the necessary repairs and the
                lessor will be liable to immediately reimburse costs incurred by the
                Lessee</li>
            
            <li>That the lessor or its duly authorized agent shall have the right to
                enter into or upon the said premises or any part thereof at a
                mutually arranged convenient time for the purpose of inspection.</li>
            
            <li>That the Lessee shall use the said premises along with its fixtures
                and fitting in careful and responsible manner and shall handover the
                premises to the lessor in working condition (reasonable wear and
                tear and loss or damage by fire, flood, ranis, accidents,
                irresistible force or act of God excepted).</li>
            
            <li>That in consideration of use of the said premises the lessee agrees
                that he shall pay to the Lessor during the period of this agreement,
                a monthly rent at the rate of Monthly Rental is
                <strong>Rs.<span class="underline">${rent}</span>.</strong> The amount will be paid in advance on
                or before the date of 1<sup>st</sup> day of every English calendar month
                unless as per mutual understanding between lessee and lessor.</li>
            
            <li>It is hereby agreed that if default is made by the lessee in payment
                of the rent for a period of three months, or inobservance and
                performance of any of the covenants and stipulations hereby
                contained and on the part to be observed and performed by the
                lessee, then on such default, the lessor shall be entitled in
                addition to or in the alternative to any other remedy that may be
                available to him at this discretion, to terminate the lease and
                eject the lessee from the said premises; and to take possession
                thereof as full and absolute owner thereof, provided that a notice
                in writing shall be given by the lessor to the lessee of his
                intention to terminate the lease and to take possession of the said
                premises. If the arrears of rent are paid or the lessee comply with
                or carry out the covenants and conditions or stipulations, Within
                fifteen days from the service of such notice, then the lessor shall
                not be entitled to take possession of the said premises.</li>
            
            <li>That in addition to the compensation mentioned above, the Lessee
                shall pay the actual electricity, shared maintenance, Water bills
                for the period of the agreement directly to the Authorities
                concerned.</li>
            
            <li>That the Lessor shall be responsible for the payment of all taxes
                and levies pertaining to the said premises including but not limited
                to House Tax, Property Tax, other cesses, if any, and any other
                statutory taxes, levied by the Government or Governmental
                Departments. During the term of this Agreement, the Lessor shall
                comply with all rules, regulations and requirements of any statutory
                authority, local, state and central government and governmental
                departments in relation to the said premises.</li>
            
            <li>The Lessor <strong><span class="underline">${Lessor_name}</span></strong> Owner of the property
                have permitted and allowed Lessee <strong><span class="underline">${firm_name}</span></strong>
                and <strong>Partners</strong> for operating and conducting their
                business from the above business address and to obtain registration
                under</li>
        </ol>
        
        <p><strong>Gst Number, PGVCL connection, Trade Mark, Udyam Registration, Income
        Tax, Bank, and Other Government Registration for the above business
        address.</strong></p>
        
        <h3>IN WITNESS WHEREOF, the parties hereto have set their hands. On the
        day and year first hereinabove mentioned.</h3>
        
        <table>
            <tr>
                <td style="width: 70%; vertical-align: top;">
                    <p><strong>Office Lessor ${Lessor_name}</strong></p>
                    <p><strong>First Party as an Owner:-</strong></p>
                    <p>..............................................</p>
                    <p>1. <strong>${Lessor_name}</strong></p>
                </td>
                <td class="photo-cell">
                    <div class="photo-box">
                        <div class="photo-placeholder">Passport Photo</div>
                    </div>
                    <div class="signature-placeholder">Signature</div>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="height: 20px;"></td>
            </tr>
            <tr>
                <td colspan="2" style="vertical-align: top;">
                    <p><strong>Office Lessee</strong></p>
                    <p><strong>M/s. ${firm_name}</strong></p>
                    <p><strong>Second Party through its Partners:-</strong></p>
                    <p>..............................................</p>
                    <p>1. <strong>${Lessee_1_Name}</strong></p>
                    <div class="photo-box">
                        <div class="photo-placeholder">Passport Photo</div>
                    </div>
                    <div class="signature-placeholder">Signature</div>
                    <p>..............................................</p>
                    <p>2. <strong>${Lessee_2_Name}</strong></p>
                    <div class="photo-box">
                        <div class="photo-placeholder">Passport Photo</div>
                    </div>
                    <div class="signature-placeholder">Signature</div>
                    <p>..............................................</p>
                    <p>3. <strong>${Lessee_3_Name}</strong></p>
                    <div class="photo-box">
                        <div class="photo-placeholder">Passport Photo</div>
                    </div>
                    <div class="signature-placeholder">Signature</div>
                </td>
            </tr>
        </table>
        
        <p><strong>Witness:-</strong></p>
        <p><strong>Name & Address Signature</strong></p>
        
        <ol>
            <li><strong>${Witness1}</strong>..............................................</li>
            <li><strong>${Witness2}</strong>..............................................</li>
        </ol>
        
        <h3>RENT AGREEMENT</h3>
        
        <p><strong>Property Address:</strong></p>
        <blockquote>
            Vagepar Survey No.919p, Plot No.3, Plot No.4, Plot No.5, Office
            No.2040, 2nd Floor,City Mall Nr. Sanala Baypass, Bhaktinagar Circle,
            Morbi-363641
        </blockquote>
        
        <p><strong>Lessor:</strong> - Mr. Milan Ratibhai Raiyani</p>
        <p><strong>Lessee:</strong> - 1. MR. KEYUR PONKIYA</p>
        <p>2. Mr. ASHVINBHAI BABUBHAI SANKHAT</p>
        <p>3. Mr. JIGAR MANHARBHAI VARMORA</p>
        <p>( M/s J K PRIME ENTERPRISE )</p>
        
        <blockquote>
            <p>:: Drafted by::</p>
            <p>E&H FINCORP ASSOCIATES</p>
            <p>OFFICE NO-428, CITY MALL,</p>
            <p>BHAGTINAGAR CIRCLE,</p>
            <p>MORBI-RAJKOT HIGHWAY,</p>
            <p>MORBI-363641.</p>
            <p>Mo: 9737372333/8080796080</p>
        </blockquote>
    `;

    // Update the preview
    document.getElementById('agreementPreview').innerHTML = agreementHTML;
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
