import React from 'react'
import MatrixCard from 'matrix-card'

const App = () => {
	return (
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
					delay={40}
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
					delay={100}
					backgroundColor={"rgba(0, 40, 0, 0.1)"}
					textFontSize={"16"}
					textMainColor={"#00FF00"}
					textAlternateColorRatio={0.1}
					textAlternateColorList={["#00F000", "#00EA00", "#00E000", "#00D600"]}
					styleOverrideForContinerDiv={{ "color": "blue", }}
					styleOverrideForCanvas={{ backgroundColor: "#00FF00" }}
					styleOverrideForChildrenDiv={{ backgroundColor: "#aa77aa" }}
				>
					<div>
						This is a test div 2
							 </div>
				</MatrixCard>
			</div>
		</div>
	)
}
export default App