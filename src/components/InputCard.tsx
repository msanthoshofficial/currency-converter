type Props = {
	label: string;
	amount: number;
	onAmountChange: Function;
	onCurrencyChange: Function;
	currencyOptions: string[];
	selectedCurrency: string;
	amountDisabled: boolean;
	currencyDisabled: boolean;
	className: string;
};

function InputCard({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectedCurrency = "usd",
	amountDisabled = false,
	currencyDisabled = false,
	className = "",
}: Props) {
	return (
		<>
			<div className={`card min-w-96 bg-base-100 shadow-xl ${className}`}>
				<div className="card-body">
					<div className="flex justify-center items-center gap-4">
						<label className="label" htmlFor="amount">
							<span className="label-text">{label}</span>
						</label>
						<input
							id="amount"
							type="number"
							placeholder="Amount"
							className="input input-bordered input-primary w-full max-w-xs"
							disabled={amountDisabled}
							value={amount}
							onChange={(e) => {
								onAmountChange &&
									onAmountChange(Number(e.target.value));
							}}
						/>
						<div>
							<select
								className="select select-bordered w-full max-w-xs min-w-[5rem]"
								value={selectedCurrency}
								onChange={(e) => {
									onCurrencyChange &&
										onCurrencyChange(e.target.value);
								}}
								disabled={currencyDisabled}
							>
								{currencyOptions.map((currency) => (
									<option key={currency} value={currency}>
										{currency}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InputCard;
