import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact";

export function useCatFact(){
	const [fact, setFact] = useState("lorem ipsum cat fact whatever");

	const refresFact = () => {
		getRandomFact().then((newFact) => setFact(newFact));
	};

	useEffect(refresFact, []);

	return { fact, refresFact };
};