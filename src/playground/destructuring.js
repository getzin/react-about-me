function begruessung(person) {
  console.log(person.name);
}

function begruessung2({ name }) {
  console.log(name);
}

const test = {
  name2: "AAA",
};

begruessung2(test);
