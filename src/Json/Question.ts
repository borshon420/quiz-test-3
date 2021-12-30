export interface Question {
  id: number;
  title: string;
  options: string[];
  ans: string[];
  lang: string;
}

export const qList: Question[] = [
  {
    id: 1,
    title: "React.js is a free and open-source front-end_____.",
    options: [
      "JavaScript Library",
      "Bootstrap library",
      "CSS library",
      "None of the Above",
    ],
    ans: ["JavaScript Library"],
    lang: "Java",
  },
  {
    id: 2,
    title: "Which language we can use for reactJS?",
    options: ["Java", "Javascript", "Python", "Typescript"],
    ans: ["Javascript", "Typescript"],
    lang: "Java",
  },
  {
    id: 3,
    title: "When React.js was Initially released?",
    options: [
      "May 29, 2013",
      "April 29, 2013",
      "June 29, 2013",
      "May 29, 2014",
    ],
    ans: ["May 29, 2013"],
    lang: "Java",
  },
  {
    id: 4,
    title: "React.js had Written in___.",
    options: ["JavaScript", "Python", "Java", "Php"],
    ans: ["JavaScript"],
    lang: "Java",
  },
  {
    id: 5,
    title: "What is Babel?",
    options: [
      "A JavaScript transpiler",
      "A JavaScript interpreter",
      "A JavaScript Compiler",
      "None of the above",
    ],
    ans: ["A JavaScript Compiler"],
    lang: "Java",
  },
  {
    id: 6,
    title: "Which of the following is correct about TypeScript?",
    options: [
      "Angular is based on TypeScript",
      "This is a superset of JavaScript",
      "TypeScript is maintained by Microsoft",
      "All of the above",
    ],
    ans: ["All of the above"],
    lang: "NodeJS",
  },
  {
    id: 7,
    title: "Router is part of which of the following module?",
    options: [
      "@angular/core",
      "Router Support",
      "@angular/router",
      "None of the above",
    ],
    ans: ["@angular/core", "@angular/router"],
    lang: "NodeJS",
  },
  {
    id: 8,
    title: "What does AOT stand for?",
    options: [
      "Ahead-Of-Time Compilation",
      "Angular Object Templates",
      "Both",
      "None of above",
    ],
    ans: ["Ahead-Of-Time Compilation"],
    lang: "NodeJS",
  },
  {
    id: 9,
    title: "Observables help you manage _____ data",
    options: ["Synchronous", "Asynchronous", "Both", "None of above"],
    ans: ["Asynchronous"],
    lang: "NodeJS",
  },
  {
    id: 10,
    title: "Where would you put it?",
    options: [
      "In the Component",
      "In the Template",
      "In the Injectable decorator",
      "In the module",
    ],
    ans: ["In the Injectable decorator"],
    lang: "NodeJS",
  },
];

export const getQuestionByLang = (lang: string): Question[] => {
    return qList.filter(q => q.lang === lang)
}