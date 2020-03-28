import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function MatrixCanvas(props) {
	useEffect(() => {
		const matrix = document.getElementById(props.matrixCanvasId);
		const context = matrix.getContext("2d");
		matrix.height = props.cardHeight;
		matrix.width = props.cardWidth;
		const drop = [];
		const font_size = props.textFontSize;
		const columns = matrix.width / font_size;
		for (let i = 0; i < columns; i++) {
			drop[i] = 1;
		}
		const drawMatrix = (p_text) => {
			let l_color;
			if (Math.random() < props.textAlternateColorRatio) {
				l_color = props.textAlternateColorList[Math.floor(Math.random() * props.textAlternateColorList.length)];
			}
			else {
				l_color = props.textMainColor;
			};
			context.fillStyle = props.backgroundColor;
			context.fillRect(0, 0, matrix.width, matrix.height);
			context.fillStyle = l_color;
			context.font = font_size + "px";
			let l_length = p_text.length;
			for (let i = 0; i < columns; i++) {
				let l_cur_char = p_text.charAt(Math.floor(Math.random() * l_length));
				context.fillText(l_cur_char, i * font_size, drop[i] * font_size);/*get 0 and 1*/
				if (drop[i] * font_size > (matrix.height * 2 / 3) && Math.random() > 0.85)/*reset*/
					drop[i] = 0;
				drop[i]++;
			}
		}
		const l_intervalId = setInterval(() => drawMatrix(props.matrixText), 40);
		return () => {clearInterval(l_intervalId)}
	}, [
		props.cardHeight,
		props.cardWidth,
		props.matrixText,
		props.matrixCanvasId,
		props.containerId,
		props.backgroundColor,
		props.textFontSize,
		props.textMainColor,
		props.textAlternateColorRatio,
		props.textAlternateColorList,
	]); // Empty array ensures that effect is only run on mount and unmount

	return <React.Fragment />;
}

MatrixCanvas.propTypes = {
	cardHeight: PropTypes.number,
	cardWidth: PropTypes.number,
	matrixText: PropTypes.string,
	matrixCanvasId: PropTypes.string,
	containerId: PropTypes.string,
	backgroundColor: PropTypes.string,
	textFontSize: PropTypes.string,
	textMainColor: PropTypes.string,
	textAlternateColorRatio: PropTypes.number,
	textAlternateColorList: PropTypes.array,
}
