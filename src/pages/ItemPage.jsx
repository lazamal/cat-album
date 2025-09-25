import { useParams } from "react-router";

export default function ItemPage() {
  const { id } = useParams();

  console.log(id);

  return <div>Item Page {id}</div>;
}
