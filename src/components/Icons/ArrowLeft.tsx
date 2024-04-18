import { Icon } from "types/Icon"

export const ArrowLeft = ({ width = 6, height = 12, fill = "#000000" }: Icon) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 6 12"
			fill={fill}
			transform="scale(-1 1)"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.832913 11.8345C0.64458 11.8345 0.455413 11.7712 0.29958 11.6412C-0.0537538 11.347 -0.101254 10.8212 0.192913 10.4678L3.92291 5.99199L0.32708 1.52366C0.0387462 1.16533 0.0954129 0.640326 0.453746 0.351993C0.812913 0.0636595 1.33708 0.120326 1.62625 0.47866L5.64958 5.47866C5.89791 5.78783 5.89458 6.22949 5.64041 6.53449L1.47375 11.5345C1.30875 11.732 1.07208 11.8345 0.832913 11.8345Z"
			/>
		</svg>
	)
}
