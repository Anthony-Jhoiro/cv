(() => {

    const cv = document.getElementById("cv-container");

    function printDiv({ divId, title }) {
        let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

        mywindow.document.write(`<html><head><title>${title}</title>`);
        mywindow.document.write('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap" rel="stylesheet">');
        mywindow.document.write('<link rel="stylesheet" type="text/css" href="http://localhost:5500/style.css" />')
        mywindow.document.write('</head><body >');
        mywindow.document.write(cv.innerHTML);
        mywindow.document.write('</body></html>')

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();

        return true;
    }

    cv.addEventListener("click", () => {
        printDiv({ divId: "cv-container", ttle: "Anthony Quéré" })
    });





})();