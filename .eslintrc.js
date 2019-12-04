module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "@vue/standard"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"allowIndentationTabs": true,
		"indent": ["error", "tab"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"quotes": [2, "single"],
		"semi": [2, "always"]
	},
	parserOptions: {
		parser: "babel-eslint"
	}
};
