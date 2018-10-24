let savedObject = [];

function registerCat() {
    let result = new Cat(
        document.getElementById('name').value,
        document.getElementById('breed').value,
        document.getElementById('age').value,
        document.getElementById('color').value,
        new Owner(document.getElementById('firstName').value,
            document.getElementById('lastName').value,
            document.getElementById('address').value));
    savedObject.push(result);

    if (result.catName.length === 0) {
        alert("Please fill in all the fields");
        return false;
    }

    //createTable(savedObject);
    addRow(result)
}

function addRow(e) {
    const TABLE = document.getElementById("table-1");
    let clone = document.createElement("tr");

    for (let i = 0; i < 6; i++) {
        let info = e[Object.keys(e)[i]];

        if (info instanceof Object) {

            for (let j = 0; j < 3; j++) {
                let newInfo = info[Object.keys(info)[j]];
                let ownerDocument = (document.createTextNode(newInfo));
                clone.insertCell(i).appendChild(ownerDocument);
                i++;
            }
        } else {
            let catDocument = (document.createTextNode(info));
            clone.insertCell(i).appendChild(catDocument);
        }
    }
    const length = TABLE.rows.length;
    clone.id = "newID" + length - 1;
    clone.contentEditable = "true";
    clone.isContentEditable = true;
    TABLE.appendChild(clone);
}

//FIND OBJECT IN ARRAY
//CHANGE OBJECT IN ARRAY
//DELETE OBJECT FROM TABLE
//

function updateArray() {
    const TABLE = document.getElementById("table-1");
    let newCat = new Cat();
    savedObject = [];
    for (let i = 0; i < TABLE.rows.length; i++) {
        if (i >= 2) {
            for (let j = 0; j < 6; j++) {
                newCat[Object.keys(newCat)[j]] = TABLE.rows[i].cells[j].innerHTML;
            }
            savedObject.push(newCat);
        }
    }
}

function validateAge(e) {
    let theEvent = e || window.event;
    if (theEvent.type === "paste") {
        key = event.clipboardData.getData('text/plain');

    } else {
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) {
            alert("Only numbers allowed!")
        }
    }
}

/*
function createTable(tableData) {

    let table = document.getElementById("table-1");
    for (let i = 0; i < table.rows.length; i++) {
        if (i === 0) continue;
        table.deleteRow(i);
    }

    let tableBody = document.getElementById('tableBody');
    table.contentEditable = "true";
    table.isContentEditable = true;
    tableData.map(function (rowData) {
        let row = document.createElement('tr');
        row.setAttribute("class", "catRow");

        rowData.forEach(function (cellData) {
            if (cellData instanceof Object) {
                for (let j = 0; j < 3; j++) {
                    let cell1 = document.createElement('td');
                    cell1.appendChild(document.createTextNode(cellData[Object.keys(cellData)[j]]));
                    cell1.isContentEditable = true;
                    cell1.contentEditable = "true";
                    row.appendChild(cell1);
                }
                // noinspection JSAnnotator
            } else {
                let cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                cell.isContentEditable = true;
                cell.contentEditable = "true";
                row.appendChild(cell);
            }
        });
        row.isContentEditable = true;
        row.contentEditable = "true";
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
*/


