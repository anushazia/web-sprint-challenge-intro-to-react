import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import styled from "styled-components";

//styling for p elements
const StyledParagraph = styled.p`
	margin: 10px;
`;

//styling for buttons
const StyledButton = styled.button`
	padding: 7px;
	border-radius: 10px;
`;

const Character = ({ charData }) => {
	const [currentCharId, setCurrentCharId] = useState(null);

	//function for "View Details"
	const showDetails = (id) => {
		setCurrentCharId(id);
	};

	//function for "Hide Details"
	const hideDetails = () => {
		setCurrentCharId(null);
	};

	return (
		<div>
			<h3> {charData.name} </h3>

			{/* View Details button */}
			<StyledButton onClick={() => showDetails(charData.name)}>
				View details
			</StyledButton>

			{/* This will render the "More Details" div element when showDetails() is triggered thru clicking the View Details button */}
			{currentCharId && (
				<div>
					<StyledParagraph>
						Gender: {charData.gender} <br />
						Birth Year: {charData.birthYear} <br />
						Height: {charData.height} <br />
						Hair Color: {charData.hair_color} <br />
						Skin Color: {charData.skin_color} <br />
						Eye Color: {charData.eye_color} <br />
					</StyledParagraph>

					{/* Hide Details button */}
					<StyledButton onClick={() => hideDetails(null)}>
						{" "}
						Hide details{" "}
					</StyledButton>
				</div>
			)}
		</div>
	);
};

export default Character;