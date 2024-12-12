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
	event.shaped(
		Item.of('kubejs:pactbreaker', 1), // arg 1: output
		[ 
			'GWG', 
			'ASA', // arg 2: the shape (array of strings)
			'MEM'  
		],
		{
			G: 'minecraft:golden_apple', 
			W: 'minecraft:wither_skeleton_skull',
			A: 'minecraft:amethyst_shard',
			M: 'minecraft:glistering_melon_slice',
			E: 'minecraft:ender_eye',
			S: 'kubejs:blank_scroll'
		}
		)
	event.shaped(
		Item.of('kubejs:faust_scroll', 1), // arg 1: output
		[ 
			'PGP', 
			'BSB', // arg 2: the shape (array of strings)
			'CNC'  
		],
		{
			P: 'minecraft:blaze_powder', 
			B: 'minecraft:bone',
			G: 'minecraft:ghast_tear',
			C: 'minecraft:coal',
			N: 'minecraft:netherite_scrap',
			S: 'kubejs:blank_scroll'
		}
		)
})
