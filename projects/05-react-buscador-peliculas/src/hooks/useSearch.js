import { useEffect, useRef, useState } from "react";

export function useSearch() {
	const [search, setSearch] = useState("");
	const [error, setError] = useState(null);
	const isFirstInput = useRef(true);

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = search === "";
			return;
		}

		if (search === "") {
			setError("No se puede realizar una búsqueda vacía");
			return;
		}
		if (search.match(/^\d+$/)) {
			setError("No se puede realizar una búsqueda solo con números");
			return;
		}
		if (search.length < 3) {
			setError("La búsqueda debe tener al menos 3 caracteres");
			return;
		}
	}, [search]);

	return { search, setSearch, error };
}