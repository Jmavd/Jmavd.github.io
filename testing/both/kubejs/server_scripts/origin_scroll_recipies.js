ServerEvents.recipes(event => {
	event.shapeless(
		Item.of('kubejs:blank_scroll', 1), // arg 1: output
		[ 
			'minecraft:paper',
			'minecraft:feather',
			'minecraft:ink_sac'
		]
		)
	event.shaped(
		Item.of('kubejs:human_scroll', 1), // arg 1: output
		[ 
			'EBE', 
			'BSB', // arg 2: the shape (array of strings)
			'EBE'  
		],
		{
			B: 'minecraft:bread', 
			E: 'minecraft:emerald',  //arg 3: the mapping object
			S: 'kubejs:blank_scroll'   
		}
		)
	event.shaped(
		Item.of('kubejs:entropy_scroll', 1), // arg 1: output
		[ 
			'LBL', 
			'PCE', // arg 2: the shape (array of strings)
			'LSL'  
		],
		{
			L: 'minecraft:lapis_lazuli', 
			P: 'minecraft:ender_pearl',  //arg 3: the mapping object
			C: 'minecraft:end_crystal',
			E: 'minecraft:ender_eye',
			S: 'kubejs:blank_scroll',
			B: 'minecraft:enchanted_book'
		}
		)
})
