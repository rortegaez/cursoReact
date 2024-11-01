import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    ifFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Heraldo",
    ifFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    ifFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomás",
    ifFollowing: false,
  },
];

export function App() {
  /*
  Esta son dos formas de pasar props
  const midudev = { userName: "midudev" }; // otra mandera de mandar las props

  return (
    <>
      <TwitterFollowCard {...midudev}>Miguel Angel Duran</TwitterFollowCard>;
      <TwitterFollowCard userName="pheralb">Pablo Hernandez</TwitterFollowCard>
    </>
  ); */
  return (
    <section className="App">
      {users.map(({ userName, name, ifFollowing }) => {
        <TwitterFollowCard userName={userName} initialFollowing={ifFollowing}>
          {name}
        </TwitterFollowCard>;
      })}
    </section>
  );
}
