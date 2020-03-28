export default {
	container: {
		"min-height": "100vh",
		"display": "flex",
		"flex-direction": "column",
		"align-items": "center",
		"justify-content": "center",
		"font-size": "calc(10px + 2vmin)",
		"color": "white",
	},
	canvas: {
		"width": "100%",
		"position": "absolute",
		"top": "0px",
		"left": "0px",
		"background-color": "#DCDCDC",
		"height": "200%",
		"z-index": "2",
	},
	children: {
		"position": "relative",
		"width": "95%",
		"z-index": "3",
		"top": "10px",
	},
}
