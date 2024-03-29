import Button from "../components/Button";
import { GoBell, GoCreditCard  } from "react-icons/go";
function ButtonsPage() {
  const handleClick = () => {
    console.log("Clicked !");
  };
  return (
    <div>
      <div>
        <Button className="mb-1" primary rounded onClick={handleClick}  >
          {/* <GoBell className="mr-2"/> */}
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCreditCard />
          Secondary
        </Button>
      </div>
      <div>
        <Button success outline rounded>Success</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger outline>Danger</Button>
      </div>

    </div>
  
  );
}

export default ButtonsPage;

