function names(persons) {
    let ns = []
    for(let i = 0; i < persons.length; i++) {
        ns.push(person[i].name)
    }
    return ns
}
function adults(persons) {
    let as = []
    for(let i = 0; i < persons.length; i++) {
        if (persons.age >= 18) {
            ns.push(persons[i])
        }
    }
}
function oldest_person(persons) {
    let oldest = null
    for(let i = 0; i < persons.length; i++) {
        if (!oldest || persons[i].age > oldest.age) {
            oldest = person[i]
        }
    }
}

const oldest_person = persons=>persons.reduce((oldest,p)=>(!oldest|| p.age>oldest.age)?p:oldest,null);

function total_salaries_of_seniors(employees) {
    let total = 0
    for(let i = 0; i < persons.length; i++) {
        if (persons.age >= 60) {
            total += persons[i].salary
        }
    }
    return total
}

const total_salaries_of_seniors = employees=> employees.reduce((total,e)=>e.age >=60 ? total +e.salary :total,0);

const total_salaries_of_seniors = employees=> employees.filter(e=>e.age >=60).map(e=>e.salary).reduce((a,b)=>a+b,0);


