if(document.cookie == "")
{
	console.log("Cookie not found, creating cookie...")
	document.cookie = "cookie=exists; expires=Tue, 19 Jan 2038 03:14:07 UTC; path=/";
	if(document.cookie == "")
	{
		console.log("Failed to create cookie.");
	}
	else
	{
		console.log("Cookie has been created.");
	}
}