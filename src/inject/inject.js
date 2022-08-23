chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		$("table.check-in tbody tr").each(function(){
			var measurement = $(this).find("td:first-child").html().trim();
			var date = $(this).find("td:nth-child(2)").html().trim();
			var value = $(this).find("td:nth-child(3)").html().replace("lbs","").trim();
			
			if (measurement == "Weight") {
				chrome.extension.sendMessage({
					messageName: "ADD_MEASUREMENT",
					type: "Weight",
					date: date,
					value: value
				});
			}
		});
		window.location.href = $("table.check-in tfoot a.next_page").attr("href");
	}
	}, 10);
});