import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MatrixCard from './MatrixCard';

ReactDOM.render(
	<React.StrictMode>
		<div style={{
			position: "relative",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		}}>
			<div>
				<MatrixCard
					id={"my-id-1"}
					matrixText={"ANIMATE ME"}
					backgroundColor={"rgba(42, 40, 45, 0.2)"}
					textFontSize={"16"}
					textMainColor={"#A9A9A9"}
					textAlternateColorRatio={0.1}
					textAlternateColorList={["#808080", "#989898", "#A9A9A9", "#C0C0C0"]}
				>
					<div>
						This is a test div
					</div>
				</MatrixCard>
			</div>
			<div>
				Some random div
			</div>
			<div>
				<MatrixCard
					id={"my-id-2"}
					matrixText={"ANIMATE ME 2"}
					backgroundColor={"rgba(42, 40, 45, 0.2)"}
					textFontSize={"16"}
					textMainColor={"#A9A9A9"}
					textAlternateColorRatio={0.1}
					textAlternateColorList={["#808080", "#989898", "#A9A9A9", "#C0C0C0"]}
					styleOverrideForContinerDiv={{ "color": "blue", }}
					styleOverrideForCanvas={{ backgroundColor: "#00FF00" }}
					styleOverrideForChildrenDiv={{ backgroundColor: "#FF00FF" }}
				>
					<div>
						This is a test div 2
					</div>
				</MatrixCard>
			</div>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

/*
			styleOverrideForContinerDiv={{ "min-height": "400vh", "color": "black", }}
			styleOverrideForCanvas={{ "background-color": "#123456", }}
			styleOverrideForChildrenDiv={{ "width": "100%", "top": "40px", }}
*/