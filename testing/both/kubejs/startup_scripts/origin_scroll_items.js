//@ts-check

Platform.mods.kubejs.name = "CapSMP"
const MOD_ID = 'capSMP';
const P_ITEM = `${MOD_ID}:item`;

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {

	event.create("blank_scroll", "basic")

	event.create("human_scroll", "basic")
        .useAnimation("bow")
        .useDuration((itemstack) => 20)
        .use((level, player, hand) => true)
		.unstackable()
        .finishUsing((itemstack, level, entity) => {
			try{
				if (entity.isPlayer() == true) {
					setOrigin(entity, "origins:human")
				}
			}
			catch (error){
				console.error("Exception thrown when humanscroll");
			}
		})
		.displayName("Scroll of Humanity")
		.tooltip("§7Removes Origin")
		.rarity('uncommon')

	event.create("entropy_scroll", "basic")
        .useAnimation("bow")
        .useDuration((itemstack) => 20)
        .use((level, localplayer, interactionhand) => true)
		.unstackable()
        .finishUsing((itemstack, level, entity) => {
			try{
				if (entity.isPlayer() == true) {
					let name = entity.getUsername()
					let server = entity.getServer()
					console.info("serverOBJ: " + JSON.stringify(server))
					server.runCommandSilent(`origin random ${name} origins:origin`)
				}
            }
			catch (error){
				console.error("Exception thrown when entropyscroll");
			}
	})
		.tooltip("§7Assigns a Random Origin")
		.rarity('uncommon')
		
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	//event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

let setOrigin = (entity, originID) => {
	let name = entity.getUsername()
	let server = entity.getServer()
	console.info("serverOBJ: " + JSON.stringify(server))
	server.runCommandSilent(`origin set ${name} origins:origin ${originID}`)
}

let particleCommand = (entity) => {
	let name = entity.getUsername()
	let server = entity.getServer()
	console.info("serverOBJ: " + JSON.stringify(server))
	server.runCommandSilent(`execute at ${name} run particle minecraft:enchant ~ ~1 ~ 1 1 1 1 100`)
}