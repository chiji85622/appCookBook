apiready = function() {
  console.log('2222')
  api.openFrame({
    name: "cookBookFrameMain",
    url: "../html/cookBookFrameMain.html",
    useWKWebView: true,
    pageBounce: false,
    bgColor: "rgb(248,248,0)",
    scrollToTop: true,
    scrollEnabled: false,
    vScrollBarEnabled: false,
    hScrollBarEnabled: false,
    rect: {
      marginLeft: 0,
      marginTop: 20,
      marginBottom: 0,
      marginRight: 0
    },
    pageParam: {
      name: "test"
    }
  });
};
