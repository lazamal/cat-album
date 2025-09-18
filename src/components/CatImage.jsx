export default function CatImage({ src, key }) {
  return (
    <img src={src} key={key} className="mt-4 max-w-xs rounded shadow"></img>
  );
}
