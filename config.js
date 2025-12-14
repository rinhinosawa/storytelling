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
    byline: 'Rin Hinosawa   |   December 2025',
    footer: 'Data visualized from the Housing and Transportation (H+T) Affordability Index and the US Census Bureau (census block group geometry)<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    data: {
        geojson: './assets/census-data-processed.geojson',   // Pre-processed: joined CSV + GeoJSON, filtered to LA metro
        valueFields: ['ht_ami', 'h_ami', 't_ami', 'compact_ndx', 'frac_sfd', 'emp_gravity', 'emp_ovrll_ndx', 'h_cost', 'hh_gravity', 'median_gross_rent', 'pct_renter_occupied_hu'],     // fields available to visualize
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
            title: 'Los Angeles is...Cheap?',
            image: './assets/la skyline.jpg',
            description: 'Los Angeles is widely considered as one of the highest cost of living cities in the United States. Good weather, cultural amenities, and economic opportunity all drive extreme demand for housing in the region, making living here inaccessible for many who would like to. <br> <br>Yet, by the H+T Affordability Index, vast amounts of the city are actually considered affordable compared to the rest of the region. Why is this the case?',
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
            description: 'Affordability seems like a simple, quantifiable metric at first glance, but in reality it is a complex combination of a number of different factors that are hard to abstract down to a human scale. <br> <br> The Housing and Transportation (H+T) Affordability Index is a mapping tool that attempts to give a more comprehensive view of affordability than just home prices.  Built on US Census and transit data, the index captures an aggregate of household characteristics within small geographic subunits of cities to give us a best estimate of how their affordabilities differ from each other for a typical person living in the region. The index captures the fundamental trade-off of distance from an urban center, where living further from an urban center often means cheaper housing but longer, more expensive commutes to high-paying jobs.<br> <br>Even then, these factors can vary drastically based on a person\'s lifestyle and personal preferences, making it difficult to measure or classify any one true assessment of how expensive a place is. Why study affordability at all then?',
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
                speed: 0.4, // make the flying slow
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
                speed: 0.4, // make the flying slow
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
                speed: 0.2, // make the flying slow
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
            description: 'The Beverly Triangle (primarily colored red in the <a href="https://www.beverlyhills.org/zoningmap" target="_blank">zoning map</a>) and the area to the directly to its northeast are zoned for dense commercial and multifamily development, in line with the relative walkability and transit accessibility of the area. <br> <br>In contrast, the streets directly to the right are zoned for just single family homes, creating a pocket of low-density development that fundamentally limits the supply of housing in that area.',
            location: {
                center: [-118.39017, 34.06963],
                zoom: 14.4,
                pitch: 0,
                bearing: 0.00,
                speed: 0.2, // make the flying slow
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
                speed: 0.2, // make the flying slow
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
            description: 'In many cases, the exclusivity of a low density development becomes a self-sustaining cycle fueled by financial and political incentives. Unaffordability for a prospective resident translates to skyrocketing home values for existing homeowners, who, as a result of the United States\' relatively weak social welfare structures, choose to rely on homeownership as a primary mechanism for wealth accumulation and economic mobility. <br> <br>This reinforces a pattern of stagnancy colloquially known as NIMBYism (Not In My Backyard), describing the tendency for current residents to resist efforts to redevelop housing in their neighborhoods. Political organizing gives NIMBY groups significant power over local government, reinforcing zoning policies such as Beverly Hills\'s which limits the vast majority of new housing construction to already dense, multifamily areas. <br> <br>This is what continues to allow areas such as the one directly right of the Beverly Triangle to continue existing as is: a pocket of car-dependent single family homes in what could be an otherwise dense, walkable neighborhood of LA.',
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
            title: 'Beverly Hills: In Review',
            //image: './assets/bevhillszoning.png',
            description: 'This may just be the story behind one small neighborhood, but it is not a unique one. These same patterns of low-density, exclusionary zoning and resistance to growth are repeated over and over across Los Angeles, as well as the rest of the country at large. <br> <br>Affordability is as much an indicator of the political and developmental health of a community as it is a tool to understand where we can and do choose to live. Unexamined, the underlying conditions contributing to unaffordability can make our cities more unequal, driving gentrification, homelessness, and continued spatial segregation.',
            location: {
                center: [-118.39017, 34.06963],
                zoom: 12.5,
                pitch: 0,
                speed: 1, // make the flying slow
                curve: 0.2, // change the speed at which it zooms out
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
            description: 'Santa Monica, situated on the Pacific Coast in the Westside of LA, reflects the complexities of the underlying economic and access factors shaping measures of affordability. <br> <br>The city hosts some of the highest home values in the region thanks to its proximity to the beach, a wide range of amenities, and high job concentration in tech and entertainment. Yet by the H+T index, large portions of the city are still considered to be on the affordable end for the region. <br> <br>How can these two contradictory realities coexist?',
            location: {
                center: [-118.51363, 34.01580],
                zoom: 13.05,
                pitch: 0,
                bearing: 0.00,
                speed: 0.4, // make the flying slow
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
            id: 'housing',
            alignment: 'left',
            hidden: false,
            title: 'Housing Characteristics',
            image: './assets/santamonicahousing.png',
            description: 'Santa Monica\'s <a href="https://scag.ca.gov/sites/default/files/old/file-attachments/santa-monica-he-0421.pdf?1620767629=" target="_blank">housing stock</a> is primarily multifamily development, distinctly denser than the region as a whole. This range of condos, apartments, and townhomes makes sense for a high-demand community, but the existing supply is still not enough to prevent a shortage of housing. While employment growth continues in desirable job sectors nearby, Santa Monica\'s housing construction has stalled over the past decade, driving up market rates far beyond the region\'s average.<br> <br>Desire for specific types of housing also shapes affordability on an individual level, where many people seek out quieter, detached-style homes which may be scarcer in places like Santa Monica. A person\'s lifestyle and preferences has a significant impact on how affordable a place is to them.',
            location: {
                center: [-118.51363, 34.01580],
                zoom: 13.05,
                pitch: 0,
                bearing: 0.00,
                speed: 0.2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToSatellite',
            onChapterEnter: [
                {
                    layer: 'census-choropleth',
                    field: 'frac_sfd',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'rent-control',
            alignment: 'left',
            hidden: false,
            title: 'The Gap Between Existing and Prospective Residents',
            image: './assets/santamonicarentcontrol.png',
            description: 'An important aspect of Santa Monica\'s affordability under the H+T index comes down to its <a href="https://www.santamonica.gov/media/Document%20Library/Topic%20Explainers/Rent%20Control%20Information%20by%20Subject/SMRCB%202024%20Annual%20Report.pdf" target="_blank">rent control laws</a> , which are some of the strongest in the country. Over 27,000 units are rent controlled across a city of 90,000 people, creating a mechanism for existing residents to continue to be able to afford living in the city despite much higher market rates. <br> <br>The areas with the highest proportion of rent controlled properties (A, G, and E) are also considered to be some of the most affordable by the H+T index. While someone in a rent-controlled unit may not be especially housing burdened according to resident surveys, the reality will look very different for someone who wants to move to the area and can only access market rate housing. <br> <br>Santa Monica may become affordable after years of living in the city and benefiting from slow rent growth, but the barrier of entering the market is a critical blind spot towards the affordability shown in the data.',
            location: {
                center: [-118.50363, 34.02580],
                zoom: 13.05,
                pitch: 0,
                bearing: 45.00,
                speed: 0.2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToSatellite',
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
            id: 'transportation',
            alignment: 'left',
            hidden: false,
            title: 'Transportation and Density',
            image: './assets/santamonicatransit.png',
            description: 'Reduced transportation costs are one of the foremost benefits of density, making car-free or car-light life a possibility for many trips and commutes. Walking, biking, and transit are all more affordable transportation options than cars, balancing out the costs of living in a central, high-demand area. <br> <br>Santa Monica is considered a thought leader in bike-friendly infrastructure, and has good transit connectivity to the rest of the region by bus and the Metro E Line, which runs from the city center to Downtown LA. <br> <br>While this variety of options can reduce transportation costs for residents that use them, it can also act as another factor pushing up demand for housing here. Walkable communities are scarce in car-reliant LA, perpetuating displacement risks and inequitable access to multimodal transportation options.',
            location: {
                center: [-118.498, 34.01580],
                zoom: 15,
                pitch: 0,
                bearing: 45.00,
                speed: 0.2, // make the flying slow
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
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'santa-monica-en',
            alignment: 'left',
            hidden: false,
            title: 'Access to Affordability',
            image: './assets/santamonicaincome.png',
            description: 'Santa Monica reveals how access to affordability is just as important as affordability itself, calling into question how the policies we create for our cities function in reality. The skewed population of Santa Monica, leaning <a href="https://www.justicemap.org/index.php?gsLayer=income&gfLon=-118.24874703&gfLat=34.03014851&giZoom=11&gsGeo=tract&giAdvanced=1&" target="_blank">disproportionately white and wealthy</a>, reflect the current barriers that may prevent people from accessing the affordability provided by policies like rent control. <br> <br>The city\'s history of redlining and exclusionary housing policy continue to shape its current landscape, where upfront financial barriers inhibit the diversification of the city and preserve demographic characteristics established decades ago.',
            location: {
                center: [-118.498, 34.01580],
                zoom: 15,
                pitch: 0,
                bearing: 45.00,
                speed: 0.2, // make the flying slow
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
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'santa-monica-review',
            alignment: 'left',
            hidden: false,
            title: 'Santa Monica: In Review',
            image: '',
            description: 'Santa Monica is a complex picture of affordability - an aggregate of who chooses to live there, and why. Between desire for specific housing stock, behaviors related to transportation, and access to policies like rent control, the city shows the pitfalls of taking aggregate data at face value. <br> <br>One single metric can never truly capture the complexities of our lived reality. Looking at local context and policy is critical to truly understand how different people from all walks of life experience our cities.',
            location: {
                center: [-118.51363, 34.01580],
                zoom: 13.05,
                pitch: 0,
                bearing: 0.00,
                speed: 0.4, // make the flying slow
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
            id: 'case-review',
            alignment: 'fully',
            hidden: false,
            title: 'Takeaways',
            image: '',
            description: 'These two case studies reveal how different dimensions of affordability are fundamentally intertwined with the built environment of our cities. The political, historical, and economic factors shaping of our cities are in constant dialogue with the metrics we use to evaluate them. <br> <br>Affordability is just a snapshot in time of one dimension of our cities, but that doesn\'t make it any less powerful of a tool to understand the health and accessibility of our communities. <br> <br>The H+T Index is just one of hundreds of data-based tools our city planners and politicians will use to make decisions about our cities. The best thing we can do is work towards understanding and thinking critically about the data we have, and the stories that can be told with it.',
            location: {
                center: [-118, 33.98449],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.4, // make the flying slow
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
            id: 'explore',
            alignment: 'fully',
            hidden: false,
            title: 'Explore',
            image: '',
            description: 'Curious about how your community compares to the rest of the United States? Map the H+T Index <a href="https://htaindex.cnt.org/map/" target="_blank">here</a> to explore how it scores your community, or learn more about the methodology and tools used to construct the index.',
            location: {
                center: [-118, 33.98449],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.4, // make the flying slow
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
