function model() {

    function Owner(first, last, add) {
        return {firstName: first, lastName: last, address: add};
    }

    function Cat(ID,name, breed, age, color, owner) {

        return {catID: ID, catName: name, catBreed: breed, catAge: age, catColor: color, catOwner: owner}
    }
    return {Owner, Cat}
}

