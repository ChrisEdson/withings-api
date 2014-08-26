var withingsApi = require("./index");
// test with dummy consumer and user accounts
var oAuthSignedUrl = withingsApi.generateUrl({
	url: "http://wbsapi.withings.net/measure",
	parameters: {
		action: "getmeas",
		userid: "4459868"
	},
	consumer_key: "eebb1b209289cc417b2ee9b16f2c77deb1e36d3bc5521595986f37563863",
	consumer_secret: "6ee50ee1f9b6065526b6652e3d73966c1c05343408f892392f4d68594e70",
	access_token: "568c3302324d881c4177dfbe23e7f3203398b1043d19fb0c820734ec7b0020",
	access_token_secret: "93899e211906677ed4667737d8f23f0bdf171766252f251b0d8d54f397bdd"
});

// TODO: run with proper test framework
console.log(oAuthSignedUrl);

process.exit();