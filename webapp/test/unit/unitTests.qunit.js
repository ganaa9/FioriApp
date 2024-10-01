/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"projet/pfe/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
