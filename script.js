document.getElementById("downloadButton").addEventListener("click", function () {
    // Create a new anchor element for downloading the CV
    var downloadLink = document.createElement("a");
    downloadLink.href = "ThembinkosiSikosanaCV-2023InternHIT.pdf"; // Link to the CV file
    downloadLink.download = "ThembinkosiSikosanaCV-2023InternHIT.pdf"; // File name to download as
    downloadLink.click();
});
