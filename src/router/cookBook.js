import Pr from "../units/pr";

export const CookBookWin={
  name: "cookBookWin",
  url: "../html/cookBookWin.html",
  useWKWebView: true,
  pageBounce: false,
  historyGestureEnabled: false,
  slidBackEnabled: false,
  scrollEnabled: false,
  vScrollBarEnabled: false,
  hScrollBarEnabled: false,
  scaleEnabled: false,
}

export const CookBookMain = {
  name: "cookBookFrameMain",
  url: "../html/cookBookMain.html",
  useWKWebView: true,
  pageBounce: false,
  scrollToTop: true,
  scrollEnabled: false,
  vScrollBarEnabled: false,
  hScrollBarEnabled: false,
  rect: {
    marginLeft: 0,
    marginTop: 20,
    marginBottom: 0,
    marginRight: 0
  }
};

export const CookBookNavButton = () => ({
  name: "cookBookFrameNavButton",
  url: "../html/cookBookNavButton.html",
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
