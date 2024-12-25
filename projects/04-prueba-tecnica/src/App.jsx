import { Otros } from "./Components/Otros";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const { fact, refresFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refresFact();
  };

  return (
    <main>
      <h1>Prueba técnica</h1>
      <button onClick={handleClick}>Get random cat fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the thrree words for ${fact}`}
        />
      )}

      <Otros />
    </main>
  );
}
