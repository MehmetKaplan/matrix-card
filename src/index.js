import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MatrixCard from './MatrixCard';

ReactDOM.render(
	<React.StrictMode>
		<MatrixCard
			id={"my-id-123"}
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
	</React.StrictMode>,
	document.getElementById('root')
);

/*
			styleOverrideForContinerDiv={{ "min-height": "400vh", "color": "black", }}
			styleOverrideForCanvas={{ "background-color": "#123456", }}
			styleOverrideForChildrenDiv={{ "width": "100%", "top": "40px", }}
*/