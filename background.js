function setProxy(proxyUrl) {
  browser.proxy.settings.set(
    {
      value: {
        mode: "fixed_servers",
        rules: {
          proxyForHttp: {
            host: proxyUrl.host,
            port: proxyUrl.port
          },
          proxyForHttps: {
            host: proxyUrl.host,
            port: proxyUrl.port
          },
          proxyForFtp: {
            host: proxyUrl.host,
            port: proxyUrl.port
          },
          bypassList: ["<local>"]
        }
      },
      scope: "regular"
    },
    () => {
      console.log("Proxy configurado correctamente");
    }
  );
}

browser.browserAction.onClicked.addListener(() => {
  let proxyUrl = new URL("http://localhost:8080");  // Cambia la URL del proxy según sea necesario
  setProxy(proxyUrl);
});
