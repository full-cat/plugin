chrome.runtime.onInstalled.addListener(function() {
  chrome.proxy.settings.set({
    value: {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: "http",
          host: "localhost", // Dirección del proxy
          port: 8080 // Puerto del proxy
        },
        bypassList: ["localhost", "127.0.0.1"] // Excepciones
      }
    },
    scope: "regular"
  }, function() {
    console.log("Proxy configurado exitosamente");
  });
});
