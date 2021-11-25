type StatusProps = {
  status: "loading" | "error" | "success";
};

export default function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading ...";
  } else if (props.status === "error") {
    message = "data fetched";
  } else if (props.status === "success") {
    message = "Error fetching data";
  }

  return (
    <div>
      <h2>Status {message}</h2>
    </div>
  );
}
