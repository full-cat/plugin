chrome.runtime.onInstalled.addListener(function() {
  // Si ya está habilitado, configura el proxy al instalar
  chrome.storage.local.get('proxyEnabled', function(result) {
    if (result.proxyEnabled) {
      enableProxy();
    }
  });
});

// Función para habilitar el proxy
function enableProxy() {
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
    console.log("Proxy activado");
  });
}

// Función para deshabilitar el proxy
function disableProxy() {
  chrome.proxy.settings.set({
    value: {
      mode: "direct"
    },
    scope: "regular"
  }, function() {
    console.log("Proxy desactivado");
  });
}

// Escucha los mensajes desde el popup para activar o desactivar el proxy
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'enableProxy') {
    enableProxy();
  } else if (request.action === 'disableProxy') {
    disableProxy();
  }
});
