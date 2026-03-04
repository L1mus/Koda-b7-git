const dataString = ["Aku", "adalah", "Kunci"];
const dataNumber = [4, 2, 5, 7, 1, 7, 4, 9];

const calculateData = (nums) => nums.reduce((a, b) => a + b, 0);

const trasnforString = (strings) => strings.map((value) => value.toUpperCase());
