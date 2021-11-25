import Button from "./components/Buttons";
import Input from "./components/Input";
import Greets from "./components/Greets";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Container from "./components/Container";
// import User from "./components/state/User";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";

function App() {
  // const personName = {
  //   first: "Dare",
  //   last: "Milevski",
  // };
  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Dean",
  //     last: "Sean",
  //   },
  //   {
  //     first: "Mike",
  //     last: "Dean",
  //   },
  // ];

  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
{/* 
      <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <User /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "2rem" }} /> */}
    </div>
  );
}

export default App;
