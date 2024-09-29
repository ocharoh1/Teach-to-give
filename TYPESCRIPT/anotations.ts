const studInfo = (name: string, age: number, progamme: string) => {
  name = "John";
  age = 23;
  progamme = "EEE";
};

console.log(studInfo.name);

function add(a: number, b: number) {
  return a + b;
}

const result = add(3, 4);
type rectangele = {
  width: number;
  height: number;
};

const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(" ");
};


type Rectangle = {
  width: number;
  height: number;
};


const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.height * rectangle.width;
};

const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};


