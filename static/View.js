function view() {

    const RegiButton = document.getElementById("registrationButton");
    const SaveButton = document.getElementById("saveButton");
    const TABLE = document.getElementById("table-1");

    function getFormData() {
        const age = document.getElementById("age");
        const name = document.getElementById("name");
        const color = document.getElementById("color");
        const breed = document.getElementById("breed");
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const address = document.getElementById("address");
        return {age, name, color, breed, firstName, lastName, address}
    }

    let data = getFormData();

    function addRow(cat) {
        let clone = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            let info = cat[Object.keys(cat)[i]];

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
        clone.cells[0].contentEditable = "false";
        clone.cells[0].isContentEditable = false;
        TABLE.appendChild(clone);
    }

    function control(controller) {
        RegiButton.onclick = controller.registerCat.bind(controller);
        SaveButton.onclick = controller.updateArray.bind(controller);
        data.age.onkeypress = controller.validateAge.bind(controller, data.age.value)
    }

    function fillTable(list) {
        for (let i = 0; i < list.constructor.length; i++) {
            addRow(list[i])
        }
    }

    return {fillTable, addRow, TABLE, control, data}
}

function update(parent) {
    return view => ReactDOM.render(view, parent)
}

