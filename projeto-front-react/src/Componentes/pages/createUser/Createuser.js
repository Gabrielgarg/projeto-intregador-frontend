import { Divofimageslogin } from "../login/style";
import {
  BodyofpageCreate,
  HeaderofpagCreate,
  Modelspageoflogin,
} from "./style";
import image1 from "../../images/red.png";
import image2 from "../../images/yellow.png";
import image3 from "../../images/black.png";
import image4 from "../../images/gray.png";

import Image from "react-bootstrap/Image";

export const CreateUser = () => {
  return (
    <div>
      <Modelspageoflogin>
        <BodyofpageCreate>
          <HeaderofpagCreate>
            {/* <Divofimageslogin> */}
            <Image fluid src={image1} />
            <Image fluid src={image2} />
            <Image fluid src={image3} />
            <Image fluid src={image4} />
            <button>eai</button>
            {/* </Divofimageslogin> */}
          </HeaderofpagCreate>
          <button>eai</button>
        </BodyofpageCreate>
      </Modelspageoflogin>
    </div>
  );
};
