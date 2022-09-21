import "./styles.css";

const success = "(){[]}";
const fail = "(){}{[}]";
const parentheses: { [key: string]: string } = {
  "(": ")",
  "{": "}",
  "[": "]"
};

const ValidParentheses = (test) => {
  const nextClosing = [];
  let i = 0;

  while (i < test.length) {
    if (nextClosing[nextClosing.length - 1] === test[i]) {
      nextClosing.pop();
    } else {
      nextClosing.push(parentheses[test[i]]);
    }
    i++;
  }
  return nextClosing.length === 0;
};

export default function App() {
  return (
    <div className="App">
      1 valid: {ValidParentheses(success) ? "yes" : "no"}
      <p>2 valid: {ValidParentheses(fail) ? "yes" : "no"}</p>
    </div>
  );
}
