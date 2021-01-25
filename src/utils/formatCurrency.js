import numeral from "numeral";

const formatCurrency = (number) => {
	// EX: $2.5 m
	return numeral(number).format("($0.0a)");
};

export default formatCurrency;
