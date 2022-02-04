(() => {

    const resumeContainer = document.getElementById("cv-container");
    const printButton = document.getElementById("print-btn");

    function getStylesheetLink() {
        const filePath = "style.css";
        let host = window.location.hostname + (window.location.port.length ? `:${window.location.port}` : '');
        let protocol = location.protocol;
        return `${protocol}//${host}/${filePath}`;
    }

    function printResume() {
        let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

        mywindow.document.write(`<html><head><title>Anthony Quéré</title>`);
        // Link fonts
        mywindow.document.write('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap" rel="stylesheet">');
        // Link stylesheet
        mywindow.document.write(`<link rel="stylesheet" type="text/css" href="${getStylesheetLink()}" />`)

        mywindow.document.write('</head><body >');
        mywindow.document.write(resumeContainer.innerHTML);
        mywindow.document.write('</body></html>')

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();

        // Use a timeout before closing the window to prevent the window from closing before the 
        // PDF export (needed to work on Brave browser)
        setTimeout(() => mywindow.close(), 1000);
    }

    printButton.onclick = printResume;
})();