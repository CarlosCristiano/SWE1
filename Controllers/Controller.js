function controller(view, model) {
    let savedObject = [];

    function registerCat() {
        let owner = new model.Owner(view.data.firstName.value, view.data.lastName.value, view.data.address.value);

        let cat = new model.Cat(view.data.name.value, view.data.breed.value,
            view.data.age.value, view.data.color.value, owner);

        savedObject.push(cat);

        if (cat.catName.length === 0) {
            alert("Please fill in all the fields");
            return false;
        }

        view.addRow(cat)
    }

    function updateArray() {
        const TABLE = view.TABLE;
        let newCat = new model.Cat();

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
        let key;
        if (theEvent.type === "paste") {
            key = event.clipboardData.getData('text/plain');

        } else {
            key = theEvent.keyCode || theEvent.which;
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

    return {updateArray, validateAge, registerCat}
}
