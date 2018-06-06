import Pr from "../../units/pr";

export default () => ({
  name: "cookBookFrameSearchButton",
  url: "../html/cookBookFrameSearchButton.html",
  useWKWebView: true,
  pageBounce: false,
  bgColor: "rgb(0,0,0,0)",
  scrollToTop: false,
  scrollEnabled: false,
  vScrollBarEnabled: false,
  hScrollBarEnabled: false,
  rect: {
    x: Pr(16),
    y: api.winHeight - Pr(48 + 32),
    w: Pr(48),
    h: Pr(48)
  }
});
