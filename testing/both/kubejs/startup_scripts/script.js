// priority: 0
// priority: 0

Platform.mods.kubejs.name = 'CapSMP'

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	//event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('warded_cobblestone').material('stone').hardness(2.0).displayName('Obsidian Infused Cobblestone').tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('warded_stone').material('stone').hardness(3.0).displayName('Obsidian Infused Stone').tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
})
