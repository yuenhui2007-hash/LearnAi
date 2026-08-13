const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');

const geographyContent = {
  'g1': {
    title: 'Plate Tectonics & Volcanic Hazards',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Structure of the Earth</h3>
<ul>
<li><strong>Crust:</strong> 5-70 km thick, solid rock (continental = granite, oceanic = basalt)</li>
<li><strong>Mantle:</strong> 2900 km thick, semi-solid, convection currents drive plate movement</li>
<li><strong>Core:</strong> Inner (solid iron) + Outer (liquid iron-nickel), generates magnetic field</li>
</ul>
<h3>2. Plate Tectonic Theory</h3>
<ul>
<li><strong>Evidence:</strong> Continents fit like jigsaw (Wegener), matching fossils, mid-ocean ridges, magnetic stripes</li>
<li><strong>Convection currents:</strong> Heat from core rises, cools, sinks — drives plate movement</li>
<li><strong>Slab pull:</strong> Dense oceanic plate sinks at subduction zone, pulls rest of plate</li>
</ul>
<h3>3. Constructive (Divergent) Boundaries</h3>
<ul>
<li>Plates move apart — magma rises to fill gap</li>
<li><strong>Landforms:</strong> Mid-ocean ridges, rift valleys, shield volcanoes</li>
<li><strong>Example:</strong> Mid-Atlantic Ridge (Iceland), East African Rift Valley</li>
</ul>
<h3>4. Destructive (Convergent) Boundaries</h3>
<ul>
<li>Plates collide — denser oceanic plate subducts beneath continental</li>
<li><strong>Landforms:</strong> Ocean trenches, fold mountains, composite volcanoes, island arcs</li>
<li><strong>Example:</strong> Peru-Chile Trench (Nazca + South American), Japan, Himalayas (continental-continental)</li>
</ul>
<h3>5. Conservative (Transform) Boundaries</h3>
<ul>
<li>Plates slide past each other — no crust created or destroyed</li>
<li><strong>Effects:</strong> Shallow, violent earthquakes</li>
<li><strong>Example:</strong> San Andreas Fault, California</li>
</ul>
<h3>6. Volcanic Hazards</h3>
<ul>
<li><strong>Lava flows:</strong> Slow but destroy everything in path — basaltic (runny) vs andesitic (thick)</li>
<li><strong>Pyroclastic flows:</strong> Superheated gas + rock at 700°C, speeds up to 700 km/h</li>
<li><strong>Lahars:</strong> Volcanic mudflows triggered by rainfall mixing with ash</li>
<li><strong>Primary effects:</strong> Death, injury, destruction of buildings, farmland</li>
<li><strong>Secondary effects:</strong> Famine (crops destroyed), disease, economic loss, climate cooling</li>
</ul>`,
    as: `<h3>Advanced Plate Tectonics</h3>
<ul>
<li><strong>Paleomagnetism:</strong> Iron minerals in lava align with Earth's magnetic field; stripes show reversal history</li>
<li><strong>Hotspots:</strong> Stationary mantle plumes create chains (Hawaii, Yellowstone)</li>
<li><strong>Mantle plumes:</strong> Rising columns of hot rock from core-mantle boundary</li>
</ul>
<h3>Case Study: Mount St Helens (1980) vs Mount Pinatubo (1991)</h3>
<ul>
<li><strong>Mount St Helens:</strong> Lateral blast killed 57, $1.1bn damage, limited monitoring</li>
<li><strong>Mount Pinatubo:</strong> 700 evacuated, 800 died, $700m damage, successful prediction saved thousands</li>
</ul>`,
    a2: `<h3>Complex Hazard Management</h3>
<ul>
<li><strong>Prediction:</strong> Seismic activity, ground deformation (GPS, tiltmeters), gas emissions (SO₂)</li>
<li><strong>Protection:</strong> Lava diversion channels, reinforced buildings, exclusion zones</li>
<li><strong>Preparedness:</strong> Emergency drills, evacuation plans, education</li>
<li><strong>International aid:</strong> UN OCHA, Red Cross, bilateral assistance</li>
</ul>
<h3>Hazard Management Cycle</h3>
<ul>
<li><strong>Before:</strong> Prediction, preparation, mitigation</li>
<li><strong>During:</strong> Emergency response, evacuation</li>
<li><strong>After:</strong> Rescue, relief, rehabilitation, reconstruction</li>
</ul>`,
    summary: `<li>Earth structure: crust, mantle, core</li>
<li>3 boundary types: constructive (divergent), destructive (convergent), conservative (transform)</li>
<li>Constructive → mid-ocean ridges, rift valleys, shield volcanoes</li>
<li>Destructive → trenches, fold mountains, composite volcanoes, subduction</li>
<li>Conservative → shallow violent earthquakes (San Andreas)</li>
<li>Volcanic hazards: lava, pyroclastic flows, lahars, ash, gases</li>
<li>Prediction: seismic monitoring, GPS, gas analysis</li>
<li>Management: prediction, protection, preparedness, international aid</li>`,
    examTips: `<li>Always name specific examples (Mount Pinatubo, Iceland, San Andreas)</li>
<li>Distinguish between primary and secondary effects</li>
<li>Compare LEDC vs MEDC responses for full marks</li>`
  },
  'g2': {
    title: 'Weather, Climate & Storms',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Weather vs Climate</h3>
<ul>
<li><strong>Weather:</strong> Short-term atmospheric conditions (temperature, precipitation, wind, humidity)</li>
<li><strong>Climate:</strong> Long-term average weather patterns (30+ years)</li>
</ul>
<h3>2. Factors Affecting Climate</h3>
<ul>
<li><strong>Latitude:</strong> Lower latitude = more direct sunlight = higher temperatures</li>
<li><strong>Altitude:</strong> Temperature decreases ~6.5°C per 1000m (lapse rate)</li>
<li><strong>Distance from sea:</strong> Maritime climates (small range) vs continental climates (large range)</li>
<li><strong>Ocean currents:</strong> Warm currents warm coast (Gulf Stream), cold currents cool coast (Humboldt)</li>
<li><strong>Prevailing winds:</strong> Direction determines moisture content</li>
</ul>
<h3>3. Atmospheric Circulation</h3>
<ul>
<li><strong>Hadley cell:</strong> 0-30°, trade winds, intertropical convergence zone (ITCZ)</li>
<li><strong>Ferrel cell:</strong> 30-60°, westerlies, low pressure belt</li>
<li><strong>Polar cell:</strong> 60-90°, polar easterlies</li>
<li><strong>Coriolis effect:</strong> Deflects winds right (NH) / left (SH)</li>
</ul>
<h3>4. Weather Systems</h3>
<ul>
<li><strong>Depressions (low pressure):</strong> Anticlockwise rotation (NH), warm + cold fronts, heavy rain, strong winds</li>
<li><strong>Anticyclones (high pressure):</strong> Clockwise rotation (NH), clear skies, calm, temperature extremes</li>
<li><strong>Fronts:</strong> Warm front (gradual rise, drizzle), cold front (steep, thunderstorms), occluded (complex)</li>
</ul>
<h3>5. Tropical Storms (Hurricanes/Typhoons/Cyclones)</h3>
<ul>
<li><strong>Formation:</strong> Sea temp > 27°C, 5-20° latitude, Coriolis effect, weak wind shear</li>
<li><strong>Structure:</strong> Eye (calm, clear), eyewall (strongest winds, heaviest rain), rainbands</li>
<li><strong>Effects:</strong> Storm surge, flooding, landslides, wind damage</li>
<li><strong>Case study:</strong> Hurricane Katrina (2005, USA), Typhoon Haiyan (2013, Philippines)</li>
</ul>`,
    as: `<h3>Climate Change Evidence</h3>
<ul>
<li><strong>Ice cores:</strong> CO₂ and temperature records going back 800,000 years</li>
<li><strong>Tree rings:</strong> Wider rings = warmer/wetter years</li>
<li><strong>Satellite data:</strong> Glacier retreat, sea ice extent, temperature anomalies</li>
<li><strong>Keeling Curve:</strong> Continuous CO₂ measurements since 1958 — rising from 315 to 420+ ppm</li>
</ul>`,
    a2: `<h3>Climate Change Impacts & Responses</h3>
<ul>
<li><strong>Physical:</strong> Rising sea levels, extreme weather, glacier melt, ocean acidification</li>
<li><strong>Human:</strong> Food insecurity, water scarcity, displacement, disease spread</li>
<li><strong>Mitigation:</strong> Reduce emissions (renewables, efficiency), carbon capture, reforestation</li>
<li><strong>Adaptation:</strong> Sea walls, drought-resistant crops, early warning systems</li>
<li><strong>International agreements:</strong> Kyoto Protocol (1997), Paris Agreement (2015)</li>
</ul>`,
    summary: `<li>Weather = short-term; Climate = long-term average</li>
<li>Climate factors: latitude, altitude, distance from sea, ocean currents, prevailing winds</li>
<li>3 circulation cells: Hadley, Ferrel, Polar</li>
<li>Coriolis effect deflects winds right (NH), left (SH)</li>
<li>Depressions = low pressure, rain, wind; Anticyclones = high pressure, clear, calm</li>
<li>Tropical storms need: >27°C water, 5-20° latitude, Coriolis, low wind shear</li>
<li>Climate change evidence: ice cores, tree rings, Keeling Curve, satellites</li>
<li>Mitigation + adaptation needed at local and global scales</li>`,
    examTips: `<li>Use named examples for storm case studies (Hurricane Katrina, Typhoon Haiyan)</li>
<li>Compare responses in LEDCs vs MEDCs</li>
<li>Always link climate change evidence to human causes</li>`
  },
  'g3': {
    title: 'River Landscapes & Flooding',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. River Processes</h3>
<ul>
<li><strong>Erosion:</strong> Hydraulic action, abrasion, attrition, solution</li>
<li><strong>Transportation:</strong> Traction, saltation, suspension, solution</li>
<li><strong>Deposition:</strong> When river loses energy (slower, shallower, less water)</li>
</ul>
<h3>2. Upper Course Landforms</h3>
<ul>
<li><strong>V-shaped valleys:</strong> Vertical erosion dominates, narrow, steep-sided</li>
<li><strong>Interlocking spurs:</strong> River winds around ridges of resistant rock</li>
<li><strong>Waterfalls & gorges:</strong> Hard rock over soft rock → undercutting → plunge pool → retreat</li>
</ul>
<h3>3. Middle & Lower Course Landforms</h3>
<ul>
<li><strong>Meanders:</strong> Lateral erosion on outer bend (river cliff), deposition on inner bend (point bar)</li>
<li><strong>Oxbow lakes:</strong> Meander neck eroded, cut-off forms lake</li>
<li><strong>Deltas:</strong> Deposition at mouth, distributaries, arcuate (Nile), bird's foot (Mississippi)</li>
<li><strong>Levees:</strong> Natural embankments from repeated flooding and deposition</li>
</ul>
<h3>4. Flooding — Causes</h3>
<ul>
<li><strong>Physical:</strong> Heavy rainfall, snowmelt, steep relief, impermeable rock, saturated soil</li>
<li><strong>Human:</strong> Deforestation, urbanisation (impermeable surfaces), channel straightening, climate change</li>
</ul>
<h3>5. Flood Management</h3>
<ul>
<li><strong>Hard engineering:</strong> Dams, levees, embankments, channel straightening, flood walls</li>
<li><strong>Soft engineering:</strong> Floodplain zoning, wetland restoration, tree planting, flood warnings</li>
<li><strong>Case study:</strong> Bangladesh floods (annual, monsoon + snowmelt + low-lying delta)</li>
</ul>`,
    as: `<h3> River Discharge & Storm Hydrographs</h3>
<ul>
<li><strong>Discharge (Q):</strong> Volume of water passing a point per second (m³/s)</li>
<li><strong>Storm hydrograph:</strong> Graph showing discharge before, during, after rainfall</li>
<li><strong>Lag time:</strong> Time between peak rainfall and peak discharge</li>
<li><strong>Factors affecting lag time:</strong> Basin size, shape, slope, land use, soil type, vegetation</li>
<li><strong>Urbanisation effect:</strong> Shorter lag time, higher peak (impermeable surfaces, drains)</li>
</ul>`,
    a2: `<h3>Integrated River Basin Management</h3>
<ul>
<li><strong>Whole-catchment approach:</strong> Managing entire river system, not just flood sites</li>
<li><strong>Sustainable strategies:</strong> Washlands (controlled flooding), river restoration, permeable paving</li>
<li><strong>Case study:</strong> River Thames (UK) — Thames Barrier, embankments, flood warnings, upstream storage</li>
</ul>`,
    summary: `<li>Erosion: hydraulic action, abrasion, attrition, solution</li>
<li>Upper course: V-shaped valleys, interlocking spurs, waterfalls</li>
<li>Lower course: meanders, oxbow lakes, deltas, levees</li>
<li>Flood causes: heavy rain, snowmelt, deforestation, urbanisation</li>
<li>Hard engineering: dams, levees, embankments</li>
<li>Soft engineering: floodplain zoning, wetlands, tree planting</li>
<li>Storm hydrograph: lag time, rising limb, peak, falling limb</li>
<li>Urbanisation = shorter lag time, higher peak discharge</li>`,
    examTips: `<li>Draw and label storm hydrographs accurately</li>
<li>Compare hard vs soft engineering with costs and sustainability</li>
<li>Use specific named examples (Bangladesh, Thames, Mississippi)</li>`
  },
  'g4': {
    title: 'Coastal Landscapes & Erosion',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Coastal Processes</h3>
<ul>
<li><strong>Erosion:</strong> Hydraulic action, abrasion, attrition, solution</li>
<li><strong>Transport:</strong> Longshore drift (swash at angle, backwash perpendicular)</li>
<li><strong>Deposition:</strong> Beaches, spits, bars, tombolos</li>
</ul>
<h3>2. Erosional Landforms</h3>
<ul>
<li><strong>Headlands & bays:</strong> Resistant rock = headland, less resistant = bay</li>
<li><strong>Caves, arches, stacks, stumps:</strong> Sequential erosion of headland by wave action</li>
<li><strong>Wave-cut platforms:</strong> Flat rock exposed at low tide from cliff retreat</li>
</ul>
<h3>3. Depositional Landforms</h3>
<ul>
<li><strong>Beaches:</strong> Sandy or shingle, formed by deposition between high and low tide</li>
<li><strong>Spits:</strong> Extended beach across bay, curved by prevailing wind</li>
<li><strong>Bars:</strong> Spit joining two headlands, enclosing lagoon</li>
<li><strong>Tombolos:</strong> Spit connecting island to mainland</li>
</ul>
<h3>4. Coastal Management</h3>
<ul>
<li><strong>Hard engineering:</strong> Sea walls, groynes, revetments, rock armour, gabions</li>
<li><strong>Soft engineering:</strong> Beach nourishment, dune regeneration, managed retreat</li>
<li><strong>Case study:</strong> Holderness Coast (UK) — fastest eroding in Europe, 1-2m/year</li>
</ul>`,
    as: `<h3>Coastal Processes in Detail</h3>
<ul>
<li><strong>Constructive waves:</strong> Low frequency, long wavelength, strong swash → build beaches</li>
<li><strong>Destructive waves:</strong> High frequency, short wavelength, strong backwash → erode beaches</li>
<li><strong>Fetch:</strong> Distance wind blows over water — longer fetch = bigger waves</li>
</ul>`,
    a2: `<h3>Sustainable Coastal Management</h3>
<ul>
<li><strong>Integrated Coastal Zone Management (ICZM):</strong> Balances economic, social, environmental needs</li>
<li><strong>Managed retreat:</strong> Allowing coastline to flood naturally, creating salt marshes</li>
<li><strong>Case study:</strong> Medmerry (UK) — Europe's largest managed realignment, 2013</li>
</ul>`,
    summary: `<li>Erosion: hydraulic action, abrasion, attrition, solution</li>
<li>Headlands → caves → arches → stacks → stumps</li>
<li>Deposition: beaches, spits, bars, tombolos</li>
<li>Longshore drift: swash at angle, backwash perpendicular</li>
<li>Hard engineering: sea walls, groynes, rock armour</li>
<li>Soft engineering: beach nourishment, dunes, managed retreat</li>
<li>Constructive waves build; destructive waves erode</li>`,
    examTips: `<li>Sequence headland erosion stages accurately</li>
<li>Compare hard vs soft engineering costs and sustainability</li>
<li>Name specific coasts (Holderness, Dorset, Medmerry)</li>`
  },
  'g5': {
    title: 'Population & Migration',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Population Distribution & Density</h3>
<ul>
<li><strong>Factors attracting:</strong> Flat land, fertile soil, water, temperate climate, resources, jobs, accessibility</li>
<li><strong>Factors repelling:</strong> Mountains, deserts, cold, disease, conflict, remoteness</li>
</ul>
<h3>2. Population Change</h3>
<ul>
<li><strong>Birth rate:</strong> Live births per 1000 per year</li>
<li><strong>Death rate:</strong> Deaths per 1000 per year</li>
<li><strong>Natural increase:</strong> Birth rate − Death rate</li>
<li><strong>Doubling time:</strong> 70 ÷ growth rate (%)</li>
</ul>
<h3>3. Demographic Transition Model (DTM)</h3>
<ul>
<li><strong>Stage 1:</strong> High BR, high DR, low growth (no countries)</li>
<li><strong>Stage 2:</strong> High BR, falling DR, rapid growth (LEDCs)</li>
<li><strong>Stage 3:</strong> Falling BR, low DR, slowing growth (NICs)</li>
<li><strong>Stage 4:</strong> Low BR, low DR, stable/slow growth (MEDCs)</li>
<li><strong>Stage 5:</strong> Very low BR, low DR, declining (Japan, Germany)</li>
</ul>
<h3>4. Migration</h3>
<ul>
<li><strong>Push factors:</strong> War, poverty, unemployment, persecution, natural disasters</li>
<li><strong>Pull factors:</strong> Jobs, safety, education, healthcare, family reunification</li>
<li><strong>Internal migration:</strong> Rural to urban (urbanisation), counter-urbanisation</li>
<li><strong>International migration:</strong> Economic, refugee, asylum seeker</li>
</ul>`,
    as: `<h3>Population Pyramids</h3>
<ul>
<li><strong>Expanding:</strong> Wide base, triangular (Stage 2 — rapid growth)</li>
<li><strong>Stationary:</strong> Straight sides, rectangular (Stage 4 — stable)</li>
<li><strong>Contracting:</strong> Narrow base, bulging top (Stage 5 — declining)</li>
</ul>
<h3>Population Policies</h3>
<ul>
<li><strong>Anti-natalist:</strong> China's one-child policy (1979-2015), fines, benefits for compliance</li>
<li><strong>Pro-natalist:</strong> France (family allowances, tax breaks), Singapore (Baby Bonus)</li>
</ul>`,
    a2: `<h3>Migration Impacts & Management</h3>
<ul>
<li><strong>Source country impacts:</strong> Loss of working-age population, remittances, brain drain/brain gain</li>
<li><strong>Host country impacts:</strong> Labour supply, cultural diversity, pressure on services, housing</li>
<li><strong>Case study:</strong> Mexico to USA — NAFTA effects, border control, remittances ($25bn/year)</li>
</ul>`,
    summary: `<li>Population factors: physical (relief, climate) + human (jobs, resources)</li>
<li>Natural increase = BR − DR; Doubling time = 70 ÷ growth rate</li>
<li>DTM stages 1-5: high growth → rapid → slowing → stable → declining</li>
<li>Push factors force out; pull factors attract in</li>
<li>Expanding pyramid = Stage 2; Stationary = Stage 4; Contracting = Stage 5</li>
<li>Anti-natalist (China) vs pro-natalist (France, Singapore)</li>`,
    examTips: `<li>Draw and interpret population pyramids accurately</li>
<li>Link DTM stage to country development level with named examples</li>
<li>Evaluate both positive and negative migration impacts</li>`
  },
  'g6': {
    title: 'Settlement & Urbanisation',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Settlement Patterns</h3>
<ul>
<li><strong>Dispersed:</strong> Isolated buildings, rural areas</li>
<li><strong>Nucleated:</strong> Clustered around central point, villages</li>
<li><strong>Linear:</strong> Along roads, rivers, coastlines</li>
</ul>
<h3>2. Urbanisation</h3>
<ul>
<li><strong>Definition:</strong> Increasing proportion of population living in towns/cities</li>
<li><strong>Causes:</strong> Rural push (poverty, mechanisation) + urban pull (jobs, services)</li>
<li><strong>MEDC characteristics:</strong> Slow growth, counter-urbanisation, urban renewal</li>
<li><strong>LEDC characteristics:</strong> Rapid growth, shanty towns, infrastructure strain</li>
</ul>
<h3>3. Urban Land Use Models</h3>
<ul>
<li><strong>Burgess concentric zone model:</strong> CBD → transition zone → working class → commuter zone</li>
<li><strong>Hoyt sector model:</strong> Sectors radiating from CBD along transport routes</li>
<li><strong>Multiple nuclei model:</strong> Several CBDs develop (Harris & Ullman)</li>
</ul>
<h3>4. Urban Problems in LEDCs</h3>
<ul>
<li><strong>Shanty towns (favelas/squatter settlements):</strong> Self-built, no services, crime, disease risk</li>
<li><strong>Traffic congestion:</strong> Poor public transport, rapid car ownership</li>
<li><strong>Water supply & sanitation:</strong> Polluted rivers, waterborne diseases</li>
<li><strong>Case study:</strong> Rio de Janeiro — favela upgrading (Pacifying Police Units, utilities)</li>
</ul>`,
    as: `<h3>Urban Problems in MEDCs</h3>
<ul>
<li><strong>Urban sprawl:</strong> Greenfield development, loss of countryside, commuting</li>
<li><strong>Inner city decline:</strong> Deindustrialisation, unemployment, deprivation</li>
<li><strong>Social segregation:</strong> Wealthy suburbs vs deprived inner city</li>
<li><strong>Solutions:</strong> Urban regeneration, brownfield development, sustainable transport</li>
</ul>`,
    a2: `<h3>Sustainable Urban Planning</h3>
<ul>
<li><strong>Curitiba (Brazil):</strong> Bus rapid transit, pedestrian zones, recycling, green spaces</li>
<li><strong>Songdo (South Korea):</strong> Smart city, waste vacuum system, 40% green space</li>
<li><strong>Features:</strong> Mixed-use zoning, public transport, renewable energy, green buildings</li>
</ul>`,
    summary: `<li>Settlement patterns: dispersed, nucleated, linear</li>
<li>Urbanisation = increasing % in cities; rural push + urban pull</li>
<li>Burgess = concentric zones; Hoyt = sectors; Multiple nuclei = several CBDs</li>
<li>LEDC problems: shanty towns, congestion, water/sanitation</li>
<li>MEDC problems: urban sprawl, inner city decline, segregation</li>
<li>Sustainable cities: Curitiba, Songdo — public transport, green space, recycling</li>`,
    examTips: `<li>Draw urban land use models with accurate labels</li>
<li>Compare LEDC vs MEDC urban problems with named examples</li>
<li>Evaluate sustainability of urban solutions</li>`
  },
  'g7': {
    title: 'Agriculture & Food Production',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Types of Farming</h3>
<ul>
<li><strong>Arable:</strong> Growing crops (wheat, rice, maize)</li>
<li><strong>Pastoral:</strong> Rearing animals (cattle, sheep)</li>
<li><strong>Mixed:</strong> Both crops and animals</li>
<li><strong>Intensive:</strong> High inputs, high yields per hectare (market gardening)</li>
<li><strong>Extensive:</strong> Low inputs, large area (ranching, nomadic herding)</li>
<li><strong>Subsistence:</strong> Growing food for own family</li>
<li><strong>Commercial:</strong> Growing for sale/profit</li>
</ul>
<h3>2. Factors Affecting Farming</h3>
<ul>
<li><strong>Physical:</strong> Climate, soil, relief, water availability</li>
<li><strong>Human:</strong> Capital, labour, technology, markets, government policy</li>
</ul>
<h3>3. Green Revolution</h3>
<ul>
<li><strong>Features:</strong> High-yield variety (HYV) seeds, irrigation, fertilisers, pesticides</li>
<li><strong>Success:</strong> India — doubled wheat production, prevented famine</li>
<li><strong>Problems:</strong> Water table depletion, soil salinity, debt for poor farmers, biodiversity loss</li>
</ul>
<h3>4. Food Security</h3>
<ul>
<li><strong>Definition:</strong> Access to sufficient, safe, nutritious food</li>
<li><strong>Threats:</strong> Climate change, conflict, population growth, water scarcity, land degradation</li>
<li><strong>Solutions:</strong> Sustainable intensification, GMOs, reduced food waste, fair trade</li>
</ul>`,
    as: `<h3>Agricultural Systems</h3>
<ul>
<li><strong>Shifting cultivation:</strong> Rainforest, slash-and-burn, 2-3 years then move</li>
<li><strong>Plantation agriculture:</strong> Tropical, single crop, foreign-owned, export</li>
<li><strong>Intensive rice farming:</strong> Monsoon Asia, terracing, high labour input</li>
<li><strong>Extensive commercial grain farming:</strong> Prairies, mechanised, low labour</li>
</ul>`,
    a2: `<h3>Sustainable Agriculture</h3>
<ul>
<li><strong>Organic farming:</strong> No synthetic chemicals, crop rotation, biological pest control</li>
<li><strong>Agroforestry:</strong> Mixing trees and crops — reduces erosion, provides shade</li>
<li><strong>Fairtrade:</strong> Guaranteed minimum price, premiums for community projects</li>
</ul>`,
    summary: `<li>Farming types: arable, pastoral, mixed, intensive, extensive, subsistence, commercial</li>
<li>Factors: physical (climate, soil) + human (capital, technology, markets)</li>
<li>Green Revolution: HYV seeds, irrigation, fertilisers — success but environmental cost</li>
<li>Food security = access to sufficient safe nutritious food</li>
<li>Sustainable solutions: organic, agroforestry, fairtrade, reduced waste</li>`,
    examTips: `<li>Use named case studies (India Green Revolution, Ethiopian famine)</li>
<li>Evaluate both benefits and drawbacks of agricultural change</li>
<li>Link food security to climate change and population growth</li>`
  },
  'g8': {
    title: 'Energy & Water Resources',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Energy Sources</h3>
<ul>
<li><strong>Fossil fuels:</strong> Coal, oil, gas — reliable, cheap, but polluting, finite</li>
<li><strong>Nuclear:</strong> Low emissions, high energy density, but radioactive waste, accidents</li>
<li><strong>Renewables:</strong> Solar, wind, hydro, geothermal, biomass — clean, sustainable, intermittent</li>
</ul>
<h3>2. Energy Security</h3>
<ul>
<li><strong>Definition:</strong> Reliable, affordable access to energy</li>
<li><strong>Threats:</strong> Depletion, political instability, price volatility, climate policies</li>
<li><strong>Strategies:</strong> Diversification, renewables, nuclear, efficiency, strategic reserves</li>
</ul>
<h3>3. Water Supply</h3>
<ul>
<li><strong>Sources:</strong> Rivers, lakes, aquifers, desalination</li>
<li><strong>Demand:</strong> Agriculture (70%), industry (20%), domestic (10%)</li>
<li><strong>Scarcity:</strong> Physical (arid climates) vs economic (poor infrastructure)</li>
</ul>
<h3>4. Water Management</h3>
<ul>
<li><strong>Large dams:</strong> Three Gorges (China) — flood control, hydroelectric, but displacement, siltation</li>
<li><strong>Water transfer schemes:</strong> South-to-North (China), Lesotho Highlands (South Africa)</li>
</ul>`,
    as: `<h3>Renewable Energy Case Studies</h3>
<ul>
<li><strong>Wind (Denmark):</strong> 50%+ electricity from wind, offshore farms</li>
<li><strong>Solar (Morocco):</strong> Noor Ouarzazate — world's largest concentrated solar plant</li>
<li><strong>Hydro (Itaipu, Brazil/Paraguay):</strong> 14 GW capacity, but displaced 40,000 people</li>
</ul>`,
    a2: `<h3>Water Conflict</h3>
<ul>
<li><strong>Nile Basin:</strong> Egypt depends on Nile for 95% of water; Ethiopia's GERD dam threatens supply</li>
<li><strong>Management approaches:</strong> International treaties, joint commissions, water pricing, conservation</li>
</ul>`,
    summary: `<li>Fossil fuels = reliable but polluting; renewables = clean but intermittent</li>
<li>Energy security = reliable affordable access; diversify sources</li>
<li>Water demand: agriculture 70%, industry 20%, domestic 10%</li>
<li>Physical scarcity = arid; Economic scarcity = poor infrastructure</li>
<li>Large dams: benefits (flood control, hydro) vs costs (displacement, environment)</li>
<li>Water conflict: Nile (Egypt vs Ethiopia), Colorado (USA vs Mexico)</li>`,
    examTips: `<li>Evaluate energy sources using cost, reliability, environmental impact</li>
<li>Name specific dams and renewable projects</li>
<li>Discuss international water conflicts with geopolitical context</li>`
  },
  'g9': {
    title: 'Economic Activity & Development',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Types of Economic Activity</h3>
<ul>
<li><strong>Primary:</strong> Extracting raw materials (farming, fishing, mining, forestry)</li>
<li><strong>Secondary:</strong> Manufacturing and construction (factories, building)</li>
<li><strong>Tertiary:</strong> Services (retail, education, healthcare, tourism)</li>
<li><strong>Quaternary:</strong> Knowledge-based (research, IT, finance)</li>
</ul>
<h3>2. Development Indicators</h3>
<ul>
<li><strong>Economic:</strong> GNI per capita, GDP growth, HDI (Human Development Index)</li>
<li><strong>Social:</strong> Literacy rate, life expectancy, access to healthcare, education</li>
<li><strong>Political:</strong> Corruption index, political stability, governance</li>
</ul>
<h3>3. Development Gap</h3>
<ul>
<li><strong>LEDCs:</strong> Low GNI, high poverty, poor infrastructure, dependence on primary sector</li>
<li><strong>MEDCs:</strong> High GNI, advanced services, strong infrastructure, tertiary/quaternary dominant</li>
<li><strong>NICs (Newly Industrialised Countries):</strong> Rapid growth, manufacturing shift (China, India, Brazil)</li>
</ul>
<h3>4. Strategies for Development</h3>
<ul>
<li><strong>Top-down:</strong> Large projects, government-led, infrastructure (dams, roads)</li>
<li><strong>Bottom-up:</strong> Community-led, small scale, appropriate technology (microfinance, NGOs)</li>
</ul>`,
    as: `<h3>Globalisation & Development</h3>
<ul>
<li><strong>Characteristics:</strong> Increased trade, foreign investment, TNCs, technology transfer</li>
<li><strong>Benefits:</strong> Jobs, technology, economic growth</li>
<li><strong>Drawbacks:</strong> Exploitation, environmental damage, cultural erosion, dependency</li>
</ul>`,
    a2: `<h3>Sustainable Development Goals (SDGs)</h3>
<ul>
<li><strong>UN 2015:</strong> 17 goals to achieve by 2030</li>
<li><strong>Key goals:</strong> No poverty, zero hunger, quality education, gender equality, clean water, climate action</li>
<li><strong>Criticisms:</strong> Too ambitious, underfunded, measurement difficulties</li>
</ul>`,
    summary: `<li>Primary = extraction; Secondary = manufacturing; Tertiary = services; Quaternary = knowledge</li>
<li>HDI combines income, education, life expectancy</li>
<li>LEDCs = primary-dependent; MEDCs = tertiary/quaternary dominant</li>
<li>Top-down (large infrastructure) vs bottom-up (community, microfinance)</li>
<li>Globalisation: trade, TNCs, FDI — benefits and costs</li>
<li>SDGs: 17 UN goals for 2030</li>`,
    examTips: `<li>Use HDI data with named countries for comparison</li>
<li>Evaluate top-down vs bottom-up with specific examples</li>
<li>Discuss globalisation winners and losers</li>`
  },
  'g10': {
    title: 'Map Skills & Fieldwork',
    code: '9696 (A-Level) · 0460 (IGCSE)',
    igcse: `<h3>1. Map Skills</h3>
<ul>
<li><strong>Grid references:</strong> 4-figure (area) vs 6-figure (precise point)</li>
<li><strong>Compass bearings:</strong> Measured clockwise from north (000°)</li>
<li><strong>Scale:</strong> Representative fraction (1:50,000), line scale</li>
<li><strong>Contour lines:</strong> Join points of equal height; close = steep, far apart = gentle</li>
<li><strong>Gradient:</strong> Vertical interval ÷ horizontal equivalent (× 100 for %)</li>
</ul>
<h3>2. Weather Instruments</h3>
<ul>
<li><strong>Thermometer:</strong> Temperature (°C)</li>
<li><strong>Rain gauge:</strong> Precipitation (mm)</li>
<li><strong>Barometer:</strong> Atmospheric pressure (hPa)</li>
<li><strong>Anemometer:</strong> Wind speed (m/s, km/h, knots)</li>
<li><strong>Wind vane:</strong> Wind direction</li>
<li><strong>Stevenson screen:</strong> Protects instruments from direct sun/rain</li>
</ul>
<h3>3. Fieldwork Techniques</h3>
<ul>
<li><strong>Questionnaires:</strong> Closed (quantitative) vs open (qualitative)</li>
<li><strong>Environmental quality surveys:</strong> Scoring system for litter, noise, greenery</li>
<li><strong>Traffic counts:</strong> Pedestrian/vehicle surveys at different times</li>
<li><strong>Bi-polar analysis:</strong> Rating opposing statements on a scale</li>
</ul>`,
    as: `<h3>Data Presentation</h3>
<ul>
<li><strong>Graphs:</strong> Bar (discrete), line (trend), scatter (correlation), pie (proportion)</li>
<li><strong>Maps:</strong> Choropleth (shading), dot maps, flow lines, proportional symbols</li>
<li><strong>Tests for significance:</strong> Spearman's rank correlation coefficient</li>
</ul>`,
    a2: `<h3>Statistical Analysis</h3>
<ul>
<li><strong>Spearman's rank:</strong> Tests correlation between two variables (-1 to +1)</li>
<li><strong>Interpreting results:</strong> Compare to critical value at chosen significance level (5%)</li>
<li><strong>Limitations:</strong> Only tests rank order, not cause and effect</li>
</ul>`,
    summary: `<li>6-figure grid reference = precise location</li>
<li>Contour interval = height difference between lines; close = steep</li>
<li>Gradient = vertical interval ÷ horizontal equivalent × 100</li>
<li>Weather instruments: thermometer, rain gauge, barometer, anemometer, wind vane</li>
<li>Fieldwork: questionnaires, EQS, traffic counts, bi-polar analysis</li>
<li>Spearman's rank tests correlation; compare to critical value</li>`,
    examTips: `<li>Practice measuring bearings and grid references accurately</li>
<li>Know when to use each graph type</li>
<li>Show full working for Spearman's rank</li>`
  }
};

function generateNoteHTML(data, id) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title} — Geography Notes | LearnAI</title>
<meta name="description" content="${data.title} notes for Cambridge ${data.code}. Detailed study notes and last-minute summary.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=5">
<link rel="stylesheet" href="../css/znotes-style.css?v=5">
</head>
<body>
<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a><ul class="nav-menu"><li><a href="../index.html" class="nav-link">Home</a></li><li><a href="../subjects.html" class="nav-link">Subjects</a></li><li><a href="../tutor.html" class="nav-link">AI Tutor</a></li><li><a href="../academy.html" class="nav-link">AI Academy</a></li><li><a href="../dashboard.html" class="nav-link">My Progress</a></li><li><a href="../planner.html" class="nav-link">Planner</a></li><li id="navAuth"></li></ul></div></nav>

<section class="notes-page"><div class="container">
<a href="../subject.html?id=geography" class="back-btn">← Back to Geography</a>
<div class="notes-container">
<div class="notes-header">
<div class="level-badges">
<span class="level-badge badge-igcse">IGCSE</span>
<span class="level-badge badge-as">AS Level</span>
<span class="level-badge badge-a2">A2 Level</span>
</div>
<h1>${data.title}</h1>
<p style="color:var(--gray)">${data.code}</p>
</div>

<div class="notes-section"><h2>📘 IGCSE Content</h2>${data.igcse}</div>
<div class="notes-section"><h2>📗 AS Level Content</h2>${data.as}</div>
<div class="notes-section"><h2>📙 A2 Level Content</h2>${data.a2}</div>

<div class="worked-example"><h4>🌍 Worked Example</h4><p><strong>Question:</strong> Explain why tropical storms form between 5° and 20° latitude.</p><div class="solution"><strong>Answer:</strong><br>• Sea surface temperature must exceed 27°C for sufficient evaporation and energy<br>• Coriolis effect needed for rotation — too weak at equator (0-5°), too far poleward beyond 20°<br>• Low wind shear allows storm structure to develop vertically<br>• Warm, moist air rises, creating low pressure that draws in more air</div></div>
<div class="common-mistake">Confusing weather (short-term) with climate (long-term average). Weather changes daily; climate is measured over 30+ years.</div>
<div class="key-point">Always use named examples in Geography answers. Generic descriptions score lower than specific case studies.</div>
<div class="quick-recall"><h4>⚡ Quick Recall</h4><ul>${data.summary}</ul></div>

<div class="summary-box"><h3>📝 Last-Minute Summary</h3><ul>${data.summary}</ul></div>

<div class="exam-tips"><h2>Exam Tips</h2><ul>${data.examTips}<li>Plan essays before writing — use PEEL structure (Point, Evidence, Explanation, Link)</li><li>Use data in answers where possible — statistics strengthen arguments</li></ul></div>

<div class="external-resources">
<button class="ext-toggle" onclick="this.classList.toggle('active');this.nextElementSibling.classList.toggle('open')">🔗 External Resources</button>
<div class="ext-content">
<ul>
<li><a href="https://www.savemyexams.co.uk/notes/geography/" target="_blank" rel="noopener">SaveMyExams</a> — Topic questions & mark schemes</li>
<li><a href="https://znotes.org/cie-a-level-geography-9696/" target="_blank" rel="noopener">ZNotes</a> — Condensed revision notes</li>
<li><a href="https://www.tutorchase.com/revision-notes/geography/" target="_blank" rel="noopener">TutorChase</a> — Free revision notes</li>
<li><a href="https://simplestudy.ie/subject/geography" target="_blank" rel="noopener">Simple Study</a> — Flashcards & past papers</li>
<li><a href="https://www.coolgeography.co.uk/" target="_blank" rel="noopener">Cool Geography</a> — Case studies & explanations</li>
</ul>
</div>
</div>

</div>
</div></section>

<script src="../js/auth.js?v=5"></script>
<script src="../js/app.js?v=5"></script>
<script src="../js/mascot.js?v=5"></script>
</body>
</html>`;
}

function generateSummaryHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title} — Summary — LearnAI</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css?v=5">
<link rel="stylesheet" href="../css/znotes-style.css?v=5">
</head>
<body>
<nav class="navbar"><div class="container nav-container"><a href="../index.html" class="logo"><span class="logo-icon">🎓</span><span class="logo-text">LearnAI</span></a></div></nav>
<section class="notes-page"><div class="container">
<a href="../subject.html?id=geography" class="back-btn">← Back to Geography</a>
<div class="notes-container">
<div class="notes-header">
<h1>${data.title} — Summary</h1>
<p style="color:var(--gray)">${data.code}</p>
</div>
<div class="summary-box"><h3>📝 Last-Minute Revision</h3><ul>${data.summary}</ul></div>
<div class="summary-box"><h3>💡 Exam Tips</h3><ul>${data.examTips}</ul></div>
</div>
</div></section>
<script src="../js/mascot.js?v=5"></script>
</body>
</html>`;
}

let rewritten = 0;
Object.keys(geographyContent).forEach(id => {
  const data = geographyContent[id];
  const fullPath = path.join(notesDir, `geography-g${id}.html`);
  const summaryPath = path.join(notesDir, `geography-g${id}-summary.html`);
  
  fs.writeFileSync(fullPath, generateNoteHTML(data, id));
  fs.writeFileSync(summaryPath, generateSummaryHTML(data));
  rewritten += 2;
});

console.log(`Rewrote ${rewritten} geography files with real content`);
