/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

//this styled div is for the div element that renders for every character
const CharDataDiv = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	text-transform: capitalize;
	background-color: rgba(255, 255, 255, 0.45);
	color: black;
	margin: 2% 30%;
	border-bottom: 5px solid black;
	border-right: 5px solid black;
	border-radius: 8px;
	padding: 1%;
`;

const StyledH1 = styled.h1`
	font-family: Georgia;
	margin: 20px;
	color: black;
`;

const App = () => {
	const [charsData, setCharsData] = useState([]);

	// fetching Data from API. For some reason, only 6 characters show up - tried different methods to get ALL the people characters but non worked.
	useEffect(() => {
		Axios.get("https://swapi.dev/api/people/")
			.then((res) => {
				setCharsData(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="App">
			<StyledH1> Star Wars Characters </StyledH1>

			{Object.keys(charsData).map((char, i) => {
				

				return (
					<CharDataDiv>
						{/* This div element is rendered for every character fetched from API  */}
						<div>
							<Character charData={charsData[char]} key={i} />
						</div>
					</CharDataDiv>
				);
			})}
		</div>
	);
};

export default App;