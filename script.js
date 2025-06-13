function updateField(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  input.addEventListener("input", () => {
    preview.textContent = input.value;
  });
  // Initial set
  preview.textContent = input.value;
}

window.onload = function () {
  updateField("lessorName", "previewLessor");
  updateField("lessee1", "previewLessee1");
  updateField("lessee2", "previewLessee2");
  updateField("lessee3", "previewLessee3");
  updateField("rentAmount", "previewRentAmount");
  updateField("rentAmount", "previewRentAmount");
  updateField("startDate", "previewStartDate");
  updateField("startDate", "previewStartDate2");
  updateField("endDate", "previewEndDate");
};
