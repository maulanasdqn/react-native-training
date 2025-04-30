const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.blacklistRE = /react-test-renderer/;

module.exports = config;
