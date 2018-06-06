import Bootstrap from "../../units/bootstrap";
import CookBookFrameMainConfig from "./cookBookFrameMainConfig";
import CookBookFrameSearchButtonConfig from "./cookBookFrameSearchButtonConfig";

Bootstrap(() => {
  api.openFrame(CookBookFrameMainConfig);
  api.openFrame(CookBookFrameSearchButtonConfig());
});
