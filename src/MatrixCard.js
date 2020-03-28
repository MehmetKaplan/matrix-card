import React, { useState, useEffect } from 'react';
import MatrixCanvas from './MatrixCanvas.jsx';
// eslint-disable-next-line
import MatrixCardDefaultStyles from './MatrixCardDefaultStyles.js';

function MatrixCard(props) {

	let l_size = useWindowSize();

	const l_containerId = `container-${props.id}`;
	const l_canvasId = `canvas-${props.id}`;
	const l_containerStyle = { ...(MatrixCardDefaultStyles.container), ...(props.styleOverrideForContainerDiv ? props.styleOverrideForContainerDiv : {}) };
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
				cardHeight={l_size.height}
				cardWidth={l_size.width}
				matrixText={`${props.matrixText} `}
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
		width: (typeof window === 'object') ? window.innerWidth : undefined,
		height: (typeof window === 'object') ? window.innerHeight : undefined
	};

	const [windowSize, setWindowSize] = useState(initialState);

	useEffect(() => {

		const isClient = typeof window === 'object';

		const getSize = () => {
			return {
				width: isClient ? window.innerWidth : undefined,
				height: isClient ? window.innerHeight : undefined
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
