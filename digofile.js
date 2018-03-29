var digo = require("digo");
var open = require("open");
digo.sourceMapRoot = "file:///";

exports.default = function () {
	digo.exec("digo api");
	digo.exec("npm run open");
	digo.exec("digo server");
};

exports.api = function () {
	digo.src("./api.json").pipe(file => {
			var d = JSON.parse(file.content);
			for (var k in d.types) {
				for (var f in d.types[k].fields) {
					d.types[k].fields[f].optional = true;
				}
			}
			file.content = JSON.stringify(d);
		})
		.pipe("digo-api", {
			apiDir: "libs/api/",
			docDir: "libs/api/",
			mockDir: "mock/",
			mergeDir: "mock/",
			ajaxModule: "project/core",
			successDescription: "请求成功的回调函数",
			errorDescription: "请求失败的回调函数",
		})
		.dest(".");
};

exports.openapi = function () {
	open("libs/api/index.html");
};

exports.server = () => digo.startServer({
	port: 9090,
	root: 'libs/api/index.html',
});