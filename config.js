var config = {
    style: 'mapbox://styles/asperitas/cmj1k5syz009901snebplhtas',
    overlayStyle: 'mapbox://styles/asperitas/cmj1k4dvf009801snbxyx6l79', // Overlay style to add on top
    satelliteStyle: 'mapbox://styles/mapbox/satellite-v9', // Satellite style for terrain view
    // leave commented to use Mapbox Standard Style
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
        geojson: './assets/blockgroups.geojson',   // converted shapefile -> GeoJSON
        csv: './assets/htaindex2022_data_blkgrps_06.csv',           // ACS CSV
        csvGeoidField: 'blkgrp',                    // field name in CSV (block group ID)
        geoidField: 'GEOID',                       // field name in GeoJSON
        valueFields: ['ht_ami', 'h_ami', 't_ami', 'compact_ndx', 'frac_sfd', 'emp_gravity', 'emp_ovrll_ndx', 'hh_gravity', 'median_gross_rent'],     // fields available to visualize
        defaultField: 'ht_ami'              // initial choropleth variable
    },
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'fully',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-118.36715, 33.98449],
                zoom: 8.23,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'census-choropleth',
                     opacity: 0,                
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'fully',
            hidden: false,
            title: 'What is Affordability?',
            //image: '',
            description: 'The Housing and Transportation (H+T) Affordability Index is a mapping tool designed to give a more comprehensive view of affordability based on local costs of housing and transportation. <br>, and slowly rotates. <br>  <br>' ,
            location: {
                center: [-118.36715, 33.98449],
                zoom: 9.23,
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
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Beverly Hills - Affordable?',
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
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Beverly Hills - Affordable?',
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
                    field: 'frac_sfd',
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'A Closer Look',
            image: './assets/bevhillszoning.png',
            description: 'Beverly Hills is a prime example of ',
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
