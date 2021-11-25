import { Name } from "./Person.type";

type PersonListProps = {
  names: Name[];
};
export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((el, index) => (
        <h2 key={index}>{el.first}</h2>
      ))}
    </div>
  );
}
