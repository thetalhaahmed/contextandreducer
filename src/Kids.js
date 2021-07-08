import { useContext } from "react";
import { ChildContext } from "./App";

function ChildOne() {
  const isFavourite = useContext(ChildContext);
  return (
    <>
      <h1>one {isFavourite == "1" && "is favourite"} </h1>
      <ChildTwo />
    </>
  );
}
function ChildTwo() {
  const isFavourite = useContext(ChildContext);
  return (
    <>
      <h1>two {isFavourite == "2" && "is favourite"} </h1>
      <ChildThree />
    </>
  );
}
function ChildThree() {
  const isFavourite = useContext(ChildContext);
  return (
    <>
      <h1>three {isFavourite == "3" && "is favourite"} </h1>
      <ChildFour />
    </>
  );
}
function ChildFour() {
  const isFavourite = useContext(ChildContext);
  return (
    <>
      <h1>four {isFavourite == "4" && "is favourite"} </h1>
      <ChildFive />
    </>
  );
}
function ChildFive() {
  const isFavourite = useContext(ChildContext);
  return <h1>five {isFavourite == "5" && "is favourite"} </h1>;
}

function Parent() {
  return <ChildOne />;
}

export default Parent;
