var config = {
    style: 'mapbox://styles/asperitas/cmj1k5syz009901snebplhtas',
    overlayStyle: 'mapbox://styles/asperitas/cmj1k4dvf009801snbxyx6l79', // Overlay style to add on top
    satelliteStyle: 'mapbox://styles/mapbox/satellite-v9', // Satellite style for terrain view
    accessToken: 'pk.eyJ1IjoiYXNwZXJpdGFzIiwiYSI6ImNtajE2OG5oejBneWwzZ3BuemNibXBwZWsifQ.qMIF0P32ZMicg_s1440WrQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Unpacking "Affordability" in Los Angeles',
    subtitle: 'Building Everyday Intuition for Urban Policy',
    byline: 'By Rin Hinosawa',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    data: {
        geojson: './assets/census-data-processed.geojson',   // Pre-processed: joined CSV + GeoJSON, filtered to LA metro
        valueFields: ['ht_ami', 'h_ami', 't_ami', 'compact_ndx', 'frac_sfd', 'emp_gravity', 'emp_ovrll_ndx', 'hh_gravity', 'median_gross_rent'],     // fields available to visualize
        defaultField: 'ht_ami'              // initial choropleth variable
    },
    chapters: [
        {
            id: 'title-screen',
            alignment: 'fully',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-118, 34],
                zoom: 9,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                    duration: 5000            
                }
            ],
            onChapterExit: []
        },
        {
            id: 'look-map',
            alignment: 'left',
            hidden: false,
            title: 'The Housing and Transportation (H+T) Affordability Index',
            //image: '',
            description: 'Take a look at this map showing the percentage of incomes spent on housing and transportation across the region. <br>What do you see?',
            location: {
                center: [-118.42715, 33.935],
                zoom: 9.05,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'la-cheap',
            alignment: 'fully',
            hidden: false,
            title: 'Los Angeles is...cheap?',
            image: './assets/la skyline.jpg',
            description: 'Los Angeles is widely considered as one of the highest cost of living cities in in the United States. Good weather, cultural ammenities, and economic opportunity all drive extreme demand for housing in the region, making making living here inacessible for many who would like to. <br> <br>Yet, by the H+T Affordability Index, vast amounts of the city are actually considered affordable compared to the rest of the region. Why is this the case?',
            location: {
                center: [-118, 33.98449],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'affordability',
            alignment: 'fully',
            hidden: false,
            title: 'What is Affordability?',
            //image: '',
            description: 'Affordability seems like a simple, quantifiable metric at first glance, but in reality it is a complex combination of a number of different factors that are hard to abtract down to a human scale. <br> <br> The Housing and Transportation (H+T) Affordability Index is a mapping tool that attempts to give a more comprehensive view of affordability than just home prices.  Built on US Census and transit data, the index captures an aggregate of household characteristics within small geographic subunits of cities to give us a best estimate of how their affordabilities differ from each other for a typical person living in the region. The index captures the fundamental trade-off of distance from an urban center, where living further from an urban center often means cheaper housing but longer, more expensive commutes to high-paying jobs.<br> <br>Even then, these factors can vary drastically based on a person\'s lifestyle and personal preferences, making it difficult to measure or classify any one true assessment of how expensive a place is. Why study affordability at all then?',
            location: {
                center: [-118, 33.98449],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'purpose',
            alignment: 'fully',
            hidden: false,
            title: 'Policy Connection',
            //image: '',
            description: 'Affordability is a key measure of the effects of public policy that shapes our lives. Places are not affordable or unaffordable for no reason, but have been made so by a combination of historical, political, and economic drivers that continue to shape our cities. <br> <br>Understanding these drivers and the underlying fabric of our cities is key to understanding how urban planners and politicians make decisions about the communities we live in.',
            location: {
                center: [-118, 33.98449],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'methodology-intro',
            alignment: 'fully',
            hidden: false,
            title: 'A Patchwork City',
            image: './assets/la street.avif',
            description: 'Los Angeles is made up of hundreds of different cities and neighborhoods, all of which have different political contexts, development patterns, and populations that shape the complex and somewhat volatile measure of affordability captured by the H+T index. <br> <br>How can two census block groups located right next to each other be on completely opposite spectrums of the affordability index? <br> <br>To fully understand the power of the index, we need to be able to interpret it in the context of a variety of factors that aren\'t so easily captured by one map.',
            location: {
                center: [-118, 33.98449],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'bev-hills-intro',
            alignment: 'left',
            hidden: false,
            title: 'Case Study: Beverly Hills',
            image: './assets/ce9601b674170faa40e7a093f99be5b2f82703bb.jpg',
            description: 'Beverly Hills, an independent city located 10 miles west of downtown LA, is a prime example of how affordability is fundamentally intertwined with the built environment and public policy. Apart from its affluent suburban reputation, the city actually contains a significant level of density and commercial development in the area around the Beverly Triangle, located in proximity to Wilshire and Santa Monica Boulevards, two of LA\'s major East-West corridors.',
            location: {
                center: [-118.42017, 34.06963],
                zoom: 13.2,
                pitch: 0,
                bearing: 0.00,
                speed: 0.5, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'bev-hills-dif',
            alignment: 'right',
            hidden: false,
            title: 'The Construction of Difference',
            image: '',
            description: 'What creates the difference in affordability between these census block groups located right next to each other, in what should be the densest part of the city? The answer lies in the underlying zoning regulations that dictate what types of development are allowed on each plot of land.',
            location: {
                center: [-118.39017, 34.06963],
                zoom: 14.4,
                pitch: 0,
                bearing: 0.00,
                speed: 0.5, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'bev-satellite',
            alignment: 'right',
            hidden: false,
            title: 'A Closer Look',
            image: './assets/bevhillszoning.png',
            description: 'The Beverly Triangle (primarily colored red in the <a href="https://www.beverlyhills.org/zoningmap" target="_blank">zoning map</a>) and the area to the directly to its northeast are zoned for dense commercial and multifamily development, in line with the relative walkability and transit accessibility of the area. <br> <br>In constrast, the streets directly to the right are zoned for just single family homes, creating a pocket of low-density development that fundamentally limits the supply of housing in that area.',
            location: {
                center: [-118.39017, 34.06963],
                zoom: 14.4,
                pitch: 0,
                bearing: 0.00,
                speed: 0.5, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToSatellite',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 0,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'bev-redlining',
            alignment: 'right',
            hidden: false,
            title: 'How Did We Get Here?',
            image: './assets/bevhillsredlining.png',
            description: 'Beverly Hills has always been a city of exclusivity, first developed as an all-white, planned suburban community in the early 1900s. The story hasn\'t changed much even since the <a href="https://dsl.richmond.edu/panorama/redlining/map/CA/LosAngeles/areas#mapview=full&loc=10/34.0053/-118.1566" target="_blank">redlining maps</a> which codified racial segregation were created in the late 1930s: <br> <br>"Both deed restrictions and zoning are of a fairly good protection...This is a very stable and desirable district and might be rated first grade were it not for the fact that it is so highly improved and encompassed by income and business districts." - Quote from Home Owners Loan Corporation\'s (HOLC) appraisal of the selected Beverly Hills neighborhood <br> <br>Almost a century later, the neighborhood character has changed little, still covered with single family homes while the LA region\'s population has quintupled.',
            location: {
                center: [-118.39017, 34.06963],
                zoom: 14.4,
                pitch: 0,
                speed: 1, // make the flying slow
                curve: 0.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToSatellite',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 0,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'bev-cycle',
            alignment: 'right',
            hidden: false,
            title: 'Frozen in Time',
            //image: './assets/bevhillszoning.png',
            description: 'In many cases, the exclusivity of a low density development becomes a self-sustaining cycle fueled by financial and political incentives. Unaffordability for a prospective resident translates to skyrocketing home values for existing homeowners, who, as a result of the United States\' relatively weak social welfare structures, choose to rely on homeownership as a primary mechanism for wealth accumulation and economic mobility. <br> <br>This reinforces a pattern of stagnancy colloquially known as NIMBYism (Not In My Backyard), describing the tendency for current residents to resist efforts to revedelop housing in their neighborhoods. Political organizing gives NIMBY groups significant power over local government, reinforcing zoning policies such as Beverly Hills\'s which limits the vast majority of new housing construction to already dense, multifamily areas. <br> <br>This is what continues to allow areas such as the one directly right of the Beverly Triangle to continue existing as is: a pocket of car-dependent single family homes in what could be an otherwise dense, walkable neighborhood of LA.',
            location: {
                center: [-118.39017, 34.06963],
                zoom: 14.4,
                pitch: 0,
                speed: 1, // make the flying slow
                curve: 0.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToSatellite',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'beverly-review',
            alignment: 'right',
            hidden: false,
            title: 'Beverly Hills - In Review',
            //image: './assets/bevhillszoning.png',
            description: 'This may just be the story behind one small neighborhood, but it is not a unique one. These same patterns of low-density, exclusionary zoning and resistance to growth are repeated over and over across Los Angeles, as well as the rest of the country at large. <br> <br>Affordability is as much an indicator of the political and developmental health of a community as it is a tool to understand where we can and do choose to live. Unexamined, the underlying conditions contributing to unaffordability can make our cities more unequal, driving gentrification, homelessness, and continued spatial segregation.',
            location: {
                center: [-118.39017, 34.06963],
                zoom: 12.5,
                pitch: 0,
                speed: 1, // make the flying slow
                curve: 0.1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'santa-monica-intro',
            alignment: 'left',
            hidden: false,
            title: 'Case Study: Santa Monica',
            image: './assets/santamonicawater.png',
            description: 'Santa Monica, a city on ',
            location: {
                center: [-118.51363, 34.01580],
                zoom: 13.05,
                pitch: 0,
                bearing: 0.00,
                speed: 0.5, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'ht_ami',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
    ]
};
