const map_data = [
    {
        id: 1,
        mapName: 'Ascent',
        imgUrl: '/maps_img/ascent.png',
        description: "Ascent is akin to Counter-Strike's De_Dust 2. It has a simple layout with a midsection, an A, and a B bombsite. But what makes it stand out are its chokepoints and its alcoves. A few callouts to take into consideration include Catwalk, A, and B lobby. It's a defense-heavy map that requires coordination from both sides."
    },
    {
        id: 2,
        mapName: 'Bind',
        imgUrl: '/maps_img/bind.png',
        description: "The attackers have several options when it comes to Bind. A few of the more common callouts and chokepoints on the map include Hookah, a room full of hanging water pipes leading up to the B bombsite, and Showers, a bathroom area toward A."
    },
    {
        id: 3,
        mapName: 'Breeze',
        imgUrl: '/maps_img/breeze.png',
        description: "Breeze is VALORANT's largest map. It has wide-open spaces and long sight lines, similar to maps you might find in Counter-Strike. Leading up to the A site are Cave and Shop but there's also Bridge, Mid Wood Doors, and Switch to take into consideration. Around the B site, there's Main, Arches, Elbow, and Tunnel."
    },
    {
        id: 4,
        mapName: 'Fracture',
        imgUrl: '/maps_img/fracture.png',
        description: "Fracture is one of VALORANT's most unique maps—for better or worse. The defenders spawn in the middle of the H-shaped map with access to both sites, while the attackers spawn directly in front of a zipline. This zipline, which runs beneath the map, allows players to reach the northern and southern points of the map before the round starts. A few important callouts include, of course, Spike site A and B, B Tower, A Deep, and A Link."
    },
    {
        id: 5,
        mapName: 'Haven',
        imgUrl: '/maps_img/haven.png',
        description: "Haven is a three-bombsite map with many options when it comes to attacking and defending. The middle of the map has two especially important callouts. There's T Mid Doors, which leads up to Garage and the C bombsite, and there's Mid Courtyard, which can be found directly in front of B. Around this area, there's also Mid-Windows, which is a common spot for attackers, and B-box, where the defenders lie in wait."
    },
    {
        id: 6,
        mapName: 'Icebox',
        imgUrl: '/maps_img/icebox.png',
        description: "Icebox is a small and confined snow-covered map with two bombsites. There are tight angles and choke points, long sightlines, and numerous elevated positions, as well as horizontal zip lines. It's the perfect map for aerial agents like Jett and Raze, rewarding adaptive play and quick aim. Shipping Containers and Rafters are just a few callouts to be aware of."
    },
    {
        id: 7,
        mapName: 'Split',
        imgUrl: '/maps_img/split.png',
        description: "Split is another defense-sided map with little to no room for error on the attacking side. B and A main are two of the map's crucial callouts, but Mid and Sewers are also highly contentious. The defenders will often sit on B Rafters, otherwise known as Heaven, or the back of A. But there are plenty of options and the defenders have the pick of the litter."
    },
]

export function getMapData(name) {
    return map_data.find(m => m.mapName === name);
}
