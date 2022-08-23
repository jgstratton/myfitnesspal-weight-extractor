var store = {
	measurements: []
}

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
	switch(request.messageName) {
		case "ADD_MEASUREMENT":
			store.measurements.push(request);
			break;
		case "GET_MEASUREMENTS":
			sendResponse(store.measurements);
			break;
		case "RESET_MEASUREMENTS":
			store.measurements = [];
			break;
		default:
			console.error("Unknown message: ", request.messageName);
	}
});