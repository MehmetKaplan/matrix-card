## Installation

```
yarn add matrix-card
```

## Usage

The easiest usage with all parameters is:
```javascript
	 <MatrixCard
	 	id={"my-id-123"}
		matrixText={"ANIMATE ME"}
		backgroundColor={"rgba(42, 40, 45, 0.2)"}
		textFontSize={"16"}
		textMainColor={"#A9A9A9"}
		textAlternateColorRatio={0.1}
		textAlternateColorList={["#808080", "#989898", "#A9A9A9", "#C0C0C0"]}
		styleOverrideForContinerDiv={{ "min-height": "400vh", "color": "black",}}
		styleOverrideForCanvas={ {"background-color": "#123456", }}
		styleOverrideForChildrenDiv={{ "width": "80%", "top": "40px", }}
	 />
```

## API

| Name | Description | Example |
|------|-------------|---------|
|  id  | The id of the div you want to use | my-id-123 | 
|  matrixText  | The id of the div you want to use | ANIMATE ME | 
|  backgroundColor  | The background color of the canvas where text will animate | "rgba(42, 40, 45, 0.2)" | 
|  textFontSize  | The font size of the text that will animate | 16 | 
|  textMainColor  | The main color of the text that will animate | #A9A9A9" | 
|  textAlternateColorRatio  | The ratio (should be <1) that alternate color is used | 0.1 | 
|  textAlternateColorList  | The color list to use while animating the list | ["#808080", "#989898", "#A9A9A9", "#C0C0C0"] | 
|  styleOverrideForContinerDiv  | Style override for container div. Refer to the `container` key in the `MatrixCardDefaultStyles.js` file to get the idea | { "min-height": "400vh", "color": "black",} |
|  styleOverrideForCanvas  | Style override for the canvas where matrix animation plays. Refer to the `canvas` key in the `MatrixCardDefaultStyles.js` file to get the idea | { "background-color": "#123456", } |
|  styleOverrideForChildrenDiv  | Style override for children area. Refer to the `children` key in the `MatrixCardDefaultStyles.js` file to get the idea | { "width": "80%", "top": "40px", } |

## License

The license is MIT and full text [here](LICENSE).

### Used Modules

* react license [here](./OtherLicenses/react.txt)
* react-scripts license [here](./OtherLicenses/react-scripts.txt)
* matrix-rain-animation license [here](./OtherLicenses/matrix-rain-animation.txt)
