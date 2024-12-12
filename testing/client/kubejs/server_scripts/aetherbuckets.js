// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
})

ServerEvents.tags('item', event => {
	event.add('create:diving_fluids', 'paradise_lost:aurel_water_bucket')
	event.add('create:bottomless/allow', 'paradise_lost:aurel_water_bucket')
	event.add('c:water', 'paradise_lost:aurel_water_bucket')
	event.add('minecraft:water', 'paradise_lost:aurel_water_bucket')
	event.add('c:water_bottles', 'paradise_lost:aurel_water_bucket')
	event.add('c:water_buckets', 'paradise_lost:aurel_water_bucket')
	
	event.add('create:diving_fluids', 'paradise_lost:aurel_milk_bucket')
	event.add('c:milks', 'paradise_lost:aurel_milk_bucket')
	event.add('create:deployable_drink', 'paradise_lost:aurel_milk_bucket')
	event.add('minecraft:water', 'paradise_lost:aurel_milk_bucket')
	event.add('c:milk', 'paradise_lost:aurel_milk_bucket')
	event.add('c:milk_buckets', 'paradise_lost:aurel_milk_bucket')
	event.add('c:water', 'paradise_lost:aurel_milk_bucket')
	
	event.add('origins:meat', 'paradise_lost:moa_meat')
	event.add('croptopia:meat_replacements', 'paradise_lost:moa_meat')
	event.add('c:raw_meat', 'paradise_lost:moa_meat')
	event.add('c:foods', 'paradise_lost:moa_meat')
	
	event.add('origins:meat', 'paradise_lost:moa_meat_cooked')
	event.add('croptopia:meat_replacements', 'paradise_lost:moa_meat_cooked')
	event.add('c:cooked_meat', 'paradise_lost:moa_meat_cooked')
	event.add('c:foods', 'paradise_lost:moa_meat_cooked')
	
	event.add('c:fruits/orange', 'paradise_lost:orange')
	event.add('c:fruits', 'paradise_lost:orange')
	event.add('c:crops', 'paradise_lost:orange')
	event.add('c:crops/orange', 'paradise_lost:orange')
	event.add('c:oranges', 'paradise_lost:orange')
	
	event.add('c:fruit_small', 'paradise_lost:blackcurrant')
	event.add('minecraft:fox_food', 'paradise_lost:blackcurrant')
	event.add('c:foods', 'paradise_lost:blackcurrant')
})
