// priority: 0

ServerEvents.recipes(event => {
	// Change recipes here
	event.shapeless(
  	    Item.of('kubejs:warded_cobblestone', 8), // arg 1: output
  	    [ 
    		'create:powdered_obsidian',
    		'8x minecraft:cobblestone'
  	    ]
  	    )
  	event.smelting('kubejs:warded_stone', 'kubejs:warded_cobblestone')
})

ServerEvents.tags('item', event => {

	
})

ServerEvents.blockLootTables(event => {
  event.addSimpleBlock('minecraft:dirt', 'minecraft:red_sand')
})
