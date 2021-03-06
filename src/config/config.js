import InputTextPlugin from '../plugins/inputtext-plugin.js'
export default {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: 2000,
	height: 1580,
	audio: {
        disableWebAudio: true
    },
	backgroundColor: 0x314D79,
	dom: {
		createContainer: true
	},
	plugins: {
		global: [{
			key: 'rexInputTextPlugin',
			plugin: InputTextPlugin,
			start: true
		}]
	}
};