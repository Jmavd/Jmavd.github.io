// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
	event.replaceInput(
  		{ input: 'minecraft:emerald', mod: 'fwaystones' },
  		'minecraft:emerald',
  		'minecraft:diamond'
		)
	event.replaceInput(
  		{ output: 'fwaystones:abyss_watcher'},
  		'minecraft:flint',
  		'minecraft:lapis_lazuli'
		)
})

ServerEvents.tags('item', event => {

	
})

