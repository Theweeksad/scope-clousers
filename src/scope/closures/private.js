const person = () => {
    var saveNAme = "Name";
    return {
        getname: () => {
            return saveNAme;
        },
        setNAme: (name) => {
            saveNAme = name;
        }
    };
};

naePerson = person();
console.log(newPerson.getname());
newPerson.setNAme('Mauricio');
console.log(newPerson.getname());