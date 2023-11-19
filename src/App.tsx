import "./App.css";
import { useState } from "react";
import image from "./assets/bg.jpg";
import InputCard from "./components/InputCard";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);

	type currencyInfo = {
		[key: string]: number;
	};
	const currencyInfo: currencyInfo = useCurrencyInfo(from);
	const options = Object.keys(currencyInfo);

	const swap = () => {
		console.log(to, from);
		setFrom(to);
		console.log(to, from);
		setTo(from);
		console.log(to, from);
		console.log(amount, convertedAmount);
		setConvertedAmount(amount);
		console.log(amount, convertedAmount);
		setAmount(convertedAmount);
		console.log(amount, convertedAmount);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};

	return (
		<>
			<div
				className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="card glass bg-base-200  p-8 flex flex-wrap justify-center items-center flex-column">
					<div>
						<input
							type="checkbox"
							value="dark"
							className="toggle theme-controller"
						/>
					</div>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							convert();
						}}
					>
						<div>
							<InputCard
								label="From"
								amount={amount}
								currencyOptions={options}
								onCurrencyChange={(currency: string) =>
									setFrom(currency)
								}
								onAmountChange={(amount: number) =>
									setAmount(amount)
								}
								selectedCurrency={from}
								amountDisabled={false}
								currencyDisabled={false}
								className=""
							></InputCard>
						</div>
						<div className=" text-center">
							<button
								onClick={swap}
								className="btn btn-neutral my-4"
							>
								swap
							</button>
						</div>
						<div>
							<InputCard
								label="To"
								amount={convertedAmount}
								currencyOptions={options}
								onCurrencyChange={(currency: string) =>
									setTo(currency)
								}
								onAmountChange={() => {}}
								selectedCurrency={to}
								amountDisabled={true}
								currencyDisabled={false}
								className=""
							></InputCard>
						</div>
						<button
							type="submit"
							className="btn btn-neutral my-4 w-full"
						>
							Convert {from.toUpperCase()} to {to.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
