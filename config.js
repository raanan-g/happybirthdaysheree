var config = {
    accessToken: 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w',
    style: 'mapbox://styles/raanan-g/cm3ukzwk1001401qrcntv598j',
    alignment: 'left',
    showMarkers: true,
    toptitle: 'Dear Sheree,',
    title: "Happy 28th Birthday!",
    byline: '',
    description: `
    <p>I wish more than anything I could be with you on your birthday. But fortunately, distance alone can't stop me from celebrating you and your amazing accomplishment or pampering you with all the love and attention I can give you.<p> 
    <p>To make it up to you, I made a cute little scavenger hunt for you to do on your very special birthday in India.</p>
    <p>The scavenger hunt has four locations with a special surprise at each stop, along with a hint to the password that unlocks the next location.</p>
    <p><b>The first hint</b> is the day of the week that we first met. Type the password in below and you'll be able to scroll to the first location.</p>
    <p>I hope you have an amazing day!</p>
    <input id='thursday' next='id0' placeholder='Enter the password here...'></input>
    <br><br>
    <small onclick='this.innerText = "thursday";'>click here to reveal the password</small>`,
    chapters: [
      // intro
        {
            id: 'id0',
            title: 'Congratulations!!',
            image: 'fire-ceremony.jpeg',
            imageCredit: '',
            description: `
            <p>Congratulations, Sheree! You've accomplished something incredible, a goal you've had for years, something that took remarkable courage, strength, intellect and intention.</p>
            <p>But it's not just your fortitude that I admire so much, it's also your kindness, warmth and loving compassion.</p>
            <p>I love you so so so much</p>
            <h4>Hint:</h4>
            <p>What is the Sanscrit word for "love" or "affection" that is often associated with universal compassion in yoga philosophy?</p>
             <input id='prema' next='id1' placeholder='Enter the password here...'></input>
             <br><br>
             <small onclick='this.innerText = "prema";'>click here to reveal the password</small>`,
            location: {
                center: [73.92700357828012, 15.098811410049244],
                zoom: 19.30,
                pitch: 61.54,
                bearing: -82.40
            },
            onChapterEnter: [],
            onChapterExit: [],
            chapterLegend: {}
        },
        {
            id: 'id1',
            title: 'Time for brunch...',
            image: 'brunch.png',
            imageCredit: '',
            description: `
            <p>The yoga teacher training may have been a life-changing experience, but some things just never change.</p> 
            <p>One of those things is that you're a brunch girlie...</p>
            <p>Enjoy a lovely brunch meal on me at the beautiful <a href='https://maps.app.goo.gl/KyuXf31bKPHj673c8' target='_blank'>Zest Vegan and Vegetarian Restaurant</a> in Agonda.</p>
            <h4>Hint:</h4>
            <p>Think back to our first brunch together and find what we ordered on the menu. The first ingredient that's not tofu/eggs is the password to unlock your next location.</p> 
            <input id='mushrooms' next='id2' placeholder='Enter the password here...'></input>
            <br><br>
            <small onclick='this.innerText = "mushrooms";'>click here to reveal the password</small>`,
            location: {
                center: [73.98925723057404, 15.03925197318239],
                zoom: 18.30,
                pitch: 61.54,
                bearing: -82.40,
                duration: 3000
            },
            onChapterEnter: [],
            onChapterExit: [],
            chapterLegend: {}
        },
        {
            id: 'id2',
            title: 'I hope you enjoyed your meal!',
            image: '',
            imageCredit: '<a href="https://maps.app.goo.gl/YbZwyHTvQ7MQuq4q9" target="_blank">Farooq Jewellers</a>',
            description: `
            <p>Now that you've had a little something to eat, time to head to your next destination. Make your way down the street to Farooq Jewellers to pick out a ring or any other piece of jewellery that you like, also on me.</p> 
            <p>Across the street there's a 2-star hotel on the beach that's named after a country in the Carribbean. The name of that country is the password to unlock your next destination.</p> 
            <input id='cuba' next='id3' placeholder='Password...'></input>
            <br><br>
            <small onclick='this.innerText = "cuba";'>click here to reveal the password</small>`,
            location: {
                center: [73.9896257120608, 15.037374788772572],
                zoom: 18.30,
                pitch: 61.54,
                bearing: -82.40,
                duration: 3000
            },
            onChapterEnter: [],
            onChapterExit: [],
            chapterLegend: {}
        },
        {
            id: 'id3',
            title: 'Congratulations, you unlocked your final destination!',
            image: 'waterfall.png',
            imageCredit: '<a href="https://maps.app.goo.gl/aZ43ti4A1Uz2ZKkF9" target="_blank">Shiva Waterfall</a>',
            description: `
            <p>Since I assume you left your stuff at the hotel, it's time to head back up in that direction. But there's something special near the hotel where you can go to take in Goa's natural beauty before you leave.</p>
            <p>Grab a taxi back up to Gonval and follow the road by your hotel (I think it's called Canaguinim) toward Cabo de Rama fort. There should be a trail leading you to the waterfall, with some lovely views of the ocean.</p>
            <p>Be careful on the trail! Looks like some of the rocks might be slippery</p>
            <p>I hope you had an amazing stay at The Cape and that you had fun on this scavenger hunt.</p>
            <p>Happy birthday, safe travels, and I can't wait to see you when you're back in Brooklyn!</p>
            <p>I love you so much!</p>
            <p>&#9829; Raanan</p>
            <img src='lovers.png'>
            `,
            location: {
                center: [73.9239697, 15.0918457],
                zoom: 18.30,
                pitch: 61.54,
                bearing: -82.40,
                duration: 6000
            },
            onChapterEnter: [],
            onChapterExit: [],
            chapterLegend: {}
        },
    ]
};
