import { Bootstrap } from "@/units";
import { CookBookMain, CookBookNavButton } from "@/router";

Bootstrap(() => {
  api.openFrame(CookBookMain);
  api.openFrame(CookBookNavButton());
});
