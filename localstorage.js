const addNumberToLocalStorage = () => {
  const number = Math.ceil(Math.random() * 100);
  localStorage.setItem("randomNumber", number);
};

const getNumberFromLocalStorage = () => {
  const number = localStorage.getItem("randomNumber");
  console.log(number);
};

const addObjectToLocalStorage = () => {
  const student = {
    name: "John Doe",
    age: 21,
    course: "Computer Science",
  };
  localStorage.setItem("student", JSON.stringify(student));
};

const getObjectFromLocalStorage = () => {
  const student = JSON.parse(localStorage.getItem("student"));
  console.log(student);
};
