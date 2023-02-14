sap.ui.define([
		"phoenix/zfr_nb_i18n_13/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("phoenix.zfr_nb_i18n_13.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);