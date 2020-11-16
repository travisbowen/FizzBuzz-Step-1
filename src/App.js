import logo from "./logo.svg";
import "./App.css";

export const fizzBuzz = (param) => {
	return param.map((i) => {
		if (i % 3 === 0 && i % 5 === 0) {
			return "fizzbuzz";
		} else if (i % 3 === 0) {
			return "fizz";
		} else if (i % 5 === 0) {
			return "buzz";
		} else {
			return i;
		}
	});
};

function App() {
	const arr = fizzBuzz([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
	]);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>FizzBuzz Step 1</h1>
				<h3>{arr.slice(0, arr.length + 1).join(", ")}</h3>
			</header>
		</div>
	);
}

export default App;
