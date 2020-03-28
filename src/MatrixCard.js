import React from 'react';
import MatrixCanvas from './MatrixCanvas.jsx';
// eslint-disable-next-line
import MatrixCardDefaultStyles from './MatrixCardDefaultStyles.js';

function MatrixCard(props) {
	const l_backgroundCanvasId = `bgc-${props.id}`;
	return (
		<div id={props.id}
		>
			<div id={`children-${props.id}`}
			>
				{props.children}
			</div>
			<canvas
				id={l_backgroundCanvasId}
			/>
			<MatrixCanvas
				matrixText={`${props.matrixText} `}
				matrixCanvasId={l_backgroundCanvasId}
				backgroundColor={props.backgroundColor}
				textFontSize={props.textFontSize}
				textMainColor={props.textMainColor}
				textAlternateColorRatio={props.textAlternateColorRatio}
				textAlternateColorList={props.textAlternateColorList}
			/>
		</div>
	);
}

export default MatrixCard;

/**
 * 			
 * 	style={[MatrixCardDefaultStyles.continer, (props.styleOverrideForContinerDiv ? props.styleOverrideForContinerDiv : {})]}
				style={[MatrixCardDefaultStyles.children, (props.styleOverrideForChildrenDiv ? props.styleOverrideForChildrenDiv : {})]}
				style={[MatrixCardDefaultStyles.canvas, (props.styleOverrideForCanvas ? props.styleOverrideForCanvas : {})]}

 */