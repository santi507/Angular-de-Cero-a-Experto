import "./style.css";
// import './topics/01-basic-types'
// import './topics/02-object-interface'
// import './topics/03-functions'
// import './topics/04-homework-types'
// import './topics/05-basic-destructuring'
// import './topics/06-function-destructuring'
// import './topics/07-import-export'
import { Person } from "./topics/08-classes";

const ironman = new Person("Ironman");
console.log(ironman);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  Hola mundo!   
`;
