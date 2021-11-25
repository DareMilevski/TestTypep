type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greets = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name} you have ${props.messageCount} messages`
        : `welcome guest`}
    </div>
  );
};

export default Greets;
