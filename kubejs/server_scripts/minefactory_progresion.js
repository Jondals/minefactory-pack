// MineFactory · bloqueos de progresión
// Cada bloqueo sustituye la receta original por una que pide un logro de otra parte del pack.
// Las misiones de FTB Quests explican cada uno. Para quitar un bloqueo, borra su bloque.

ServerEvents.recipes(event => {
  const PRECISION = 'create:precision_mechanism'

  // 1) Cohetes: la mesa de la NASA pide latón (mecanismos de precisión) y vencer al Lich del Bosque Crepuscular
  event.remove({ output: 'ad_astra:nasa_workbench' })
  event.shaped('ad_astra:nasa_workbench', [
    'PTP',
    'BCB',
    'III'
  ], {
    P: PRECISION,
    T: 'twilightforest:lich_trophy',
    B: 'ad_astra:steel_block',
    C: 'minecraft:crafting_table',
    I: 'ad_astra:steel_ingot'
  }).id('minefactory:progresion/nasa_workbench')

  // 2) Aviones: el motor de Immersive Aircraft pide un mecanismo de precisión de Create
  event.remove({ output: 'immersive_aircraft:engine' })
  event.shaped('immersive_aircraft:engine', [
    'IPI',
    'ICI',
    'IFI'
  ], {
    I: 'create:iron_sheet',
    P: PRECISION,
    C: 'create:cogwheel',
    F: 'minecraft:furnace'
  }).id('minefactory:progresion/aircraft_engine')

  // 3) Dirigibles de Create Aeronautics: el rodamiento de hélice pide zanita del Aether
  event.remove({ output: 'aeronautics:propeller_bearing' })
  event.shaped('aeronautics:propeller_bearing', [
    'AZA',
    'ACA',
    ' S '
  ], {
    A: 'create:andesite_alloy',
    Z: 'aether:zanite_gemstone',
    C: 'create:andesite_casing',
    S: 'create:shaft'
  }).id('minefactory:progresion/propeller_bearing')

  // 4) Energía nuclear: la carcasa del reactor de Create: New Age pide eco reforzado del Otro Lado (Deeper and Darker)
  event.remove({ output: 'create_new_age:reactor_casing' })
  event.shaped(Item.of('create_new_age:reactor_casing', 4), [
    'SES',
    'E E',
    'SES'
  ], {
    S: 'create:sturdy_sheet',
    E: 'deeperdarker:reinforced_echo_shard'
  }).id('minefactory:progresion/reactor_casing')
})
