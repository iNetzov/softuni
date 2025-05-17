const getGeneric = <T>(paramId: T): T => {
  return paramId;
};
const id1 = getGeneric<number>(1);
const id2 = getGeneric<string>("a");
const id3 = getGeneric<number[]>([1, 2, 3, 4]);
console.log(id1);
console.log(id2);
console.log(id3);

interface UserData {
  name: string;
  age: number;
  address: string;
}
const id4 = getGeneric<UserData>({
  name: "Ivailo",
  age: 12,
  address: "suhata reka",
});

console.log(id4);

const generateAndAttachId = <T>(obj: T) => {
  return { ...obj, id: Math.random() };
};

type PersonObjDetails = {
  name: string;
  age: number;
  city: string;
};

const person: PersonObjDetails = { name: "Mitko", age: 21, city: "lovech" };
const personWithId = generateAndAttachId<PersonObjDetails>(person);
console.log();
console.log(person);
console.log(personWithId);

interface DocumentObject<T> {
  id: number;
  name: string;
  data: T;
}

const doc = {
  id: 1,
  name: "flowwer",
  data: [{ name: "flowwer2" }, { name: "flowwer3" }],
};

const docPerson = {
  id: 1,
  name: "Pesho",
  data: { sername: "Peshov", familyName: "Petrov", age: 33 },
};
