import { useCatImage } from "../hooks/useCatImage";

export function Otros() {
  const { imageUrl } = useCatImage({ fact: "cat" });
  return <>{imageUrl && <img src={imageUrl} />}</>;
}
