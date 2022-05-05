import { useParams } from "react-router-dom";

const users = [
  {
    name: "Andrew",
  },
  {
    name: "Seena",
  },
];

export default function Profile() {
  let params = useParams();
  console.log("params is: ", params);

  return <div>Hello {users[params.id].name}!</div>;
}
