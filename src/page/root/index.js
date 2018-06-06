import Bootstrap from "../../units/bootstrap";
import CookBookWinConfig from "./cookBookWinConfig";
import NavigationWinConfig from "./navigationWinConfig";

Bootstrap(() => {
  api.openDrawerLayout({
    ...CookBookWinConfig,
    leftPane: NavigationWinConfig()
  });
});
