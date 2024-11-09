// Recupera el estado del proxy almacenado (si hay alguno)
chrome.storage.local.get('proxyEnabled', function(result) {
  if (result.proxyEnabled) {
    document.getElementById('enableProxy').checked = true;
  } else {
    document.getElementById('disableProxy').checked = true;
  }
});

// Event listener para cambiar el estado del proxy
document.getElementById('enableProxy').addEventListener('change', function() {
  if (this.checked) {
    // Activar proxy
    chrome.storage.local.set({ 'proxyEnabled': true }, function() {
      chrome.runtime.sendMessage({ action: 'enableProxy' });
    });
  }
});

document.getElementById('disableProxy').addEventListener('change', function() {
  if (this.checked) {
    // Desactivar proxy
    chrome.storage.local.set({ 'proxyEnabled': false }, function() {
      chrome.runtime.sendMessage({ action: 'disableProxy' });
    });
  }
});
