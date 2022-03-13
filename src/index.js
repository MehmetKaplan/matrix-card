import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MatrixCanvas from './MatrixCanvas.jsx';
import MatrixCardDefaultStyles from './MatrixCardDefaultStyles.js';

function MatrixCard(props) {

	let l_size = useWindowSize();

	const l_containerId = `container-${props.id}`;
	const l_canvasId = `canvas-${props.id}`;
	const l_containerStyle = { ...(MatrixCardDefaultStyles.container), backgroundColor: props.backgroundColor, ...(props.styleOverrideForContainerDiv ? props.styleOverrideForContainerDiv : {}) };
	const l_childrenStyle = { ...(MatrixCardDefaultStyles.children), ...(props.styleOverrideForChildrenDiv ? props.styleOverrideForChildrenDiv : {}) };
	const l_canvasStyle = { ...(MatrixCardDefaultStyles.canvas), ...(props.styleOverrideForCanvas ? props.styleOverrideForCanvas : {}) };

	return (
		<div id={l_containerId}
			style={l_containerStyle}
		>
			<canvas
				id={l_canvasId}
				style={l_canvasStyle}
			/>
			<MatrixCanvas
				cardHeight={props.canvasSize ? props.canvasSize.height : l_size.height}
				cardWidth={props.canvasSize ? props.canvasSize.width : l_size.width}
				matrixText={`${props.matrixText} `}
				delay={props.delay}
				matrixCanvasId={l_canvasId}
				containerId={l_containerId}
				backgroundColor={props.backgroundColor}
				textFontSize={props.textFontSize}
				textMainColor={props.textMainColor}
				textAlternateColorRatio={props.textAlternateColorRatio}
				textAlternateColorList={props.textAlternateColorList}
			/>
			<div id={`children-${props.id}`}
				style={l_childrenStyle}
			>
				{props.children}
			</div>
		</div >
	);
}

// Hook
function useWindowSize() {

	const initialState = {
		width: (typeof window === 'object') ? window.visualViewport.width : undefined,
		height: (typeof window === 'object') ? window.visualViewport.height : undefined
	};

	const [windowSize, setWindowSize] = useState(initialState);

	useEffect(() => {

		const isClient = typeof window === 'object';

		const getSize = () => {
			return {
				width: isClient ? window.visualViewport.width : undefined,
				height: isClient ? window.visualViewport.height : undefined
			};
		}

		if (!isClient) {
			return false;
		}

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
}

export default MatrixCard;

MatrixCard.propTypes = {
	id: PropTypes.string,
	matrixText: PropTypes.string,
	delay: PropTypes.number,
	matrixCanvasId: PropTypes.string,
	containerId: PropTypes.string,
	backgroundColor: PropTypes.string,
	textFontSize: PropTypes.string,
	textMainColor: PropTypes.string,
	textAlternateColorRatio: PropTypes.number,
	textAlternateColorList: PropTypes.array,
	styleOverrideForContainerDiv: PropTypes.object,
	styleOverrideForChildrenDiv: PropTypes.object,
	styleOverrideForCanvas: PropTypes.object,
	canvasSize: PropTypes.object,
}
