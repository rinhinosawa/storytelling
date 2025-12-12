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
            id: 'chapter-3',
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
            id: 'methodology',
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
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-118.41017, 34.06963],
                zoom: 12.98,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    field: 'ht_ami',
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'Beverly Hills - Affordable?',
            image: './assets/ce9601b674170faa40e7a093f99be5b2f82703bb.jpg',
            description: 'Beverly Hills, one of the most expensive cities in the.',
            location: {
                center: [-118.41017, 34.06963],
                zoom: 12.98,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToDefault',
            onChapterEnter: [
                {
                    field: 'frac_sfd',
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'A Closer Look',
            image: './assets/bevhillszoning.png',
            description: 'Beverly Hills is a prime example of how zoning can impacts affordability. <br> <br>The Beverly Triangle (primarily colored red) allows for dense commercial and multifamily housing development with multifamily housing, while the streets directly to the right are zoned for single family homes',
            location: {
                center: [-118.41017, 34.06963],
                zoom: 12.98,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'switchToSatellite',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
