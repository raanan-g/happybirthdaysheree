var config = {
    accessToken: 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w',
    style: 'mapbox://styles/raanan-g/cm3ukzwk1001401qrcntv598j',
    alignment: 'left',
    toptitle: 'Dear Sheree,',
    title: "Happy 28th Birthday!",
    byline: '',
    description: `
    <p>I am so sad that I cannot be with you on your birthday, to celebrate you and your amazing accomplishment and pamper you with all the love and attention I can give. To make it up to you, I did a little research and came up with a scavenger hunt for you to do on your last day in India.</p>
    <p>For each location on the scavenger hunt, there is a special activity or surprise, along with a hint that leads you to the correct password to unlock the next location.</p>
    <p>The first hint is the day of the week that we first met. Type the password in below and you'll be able to scroll to the first location.</p>
    <p>I hope you have an amazing day! I love you so so so much</p>
    <input placeholder='Enter the password here...'></input>`,
    chapters: [
      // intro
        {
            id: 'id0',
            title: 'Congratulations!!',
            image: 'fire-ceremony.jpeg',
            imageCredit: '',
            description: "Congratulations, Sheree! You've accomplished something incredible, a goal you've had for years, something that took remarkable courage, strength, intellect and intention.",
            location: {
                center: [73.990477, 15.036685],
                zoom: 19.30,
                pitch: 61.54,
                bearing: -82.40
            },
            onChapterEnter: [],
            onChapterExit: [],
            chapterLegend: {}
        },
        {
            id: 'id3',
            title: 'Time for brunch...',
            image: 'brunch.png',
            imageCredit: '<a href="https://maps.app.goo.gl/KyuXf31bKPHj673c8" target="_blank">Zest Agonda</a>',
            description: `
            <p>The yoga teacher training may have been a life-changing experience, but some things just never change. One of those things is that you're a true brunch girlie...</p>
            <p>Enjoy a lovely brunch meal on me at the beautiful <a href='https://maps.app.goo.gl/KyuXf31bKPHj673c8' target='_blank'>Zest Vegan and Vegetarian Restaurant</a> in Agonda.</p>
            <p>Think back to our first brunch together and find what we ordered on the menu. The first ingredient that's not tofu/eggs is the password to unlock your next location.</p> 
            Enjoy!! 
            <input placeholder='Password...'></input>`,
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
            id: 'id4',
            title: 'I hope you enjoyed your meal!',
            image: '',
            imageCredit: '<a href="https://maps.app.goo.gl/KyuXf31bKPHj673c8" target="_blank">Zest Agonda</a>',
            description: `
            <p>Now that you've had a little something to eat, time to head to your next destination. Grab a taxi to ...</p> 
            <input placeholder='Password...'></input>`,
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
            id: 'id5',
            title: 'Congratulations, you unlocked your final destination!',
            image: 'hotelroom.png',
            imageCredit: '',
            description: `
            <p>Grab a taxi to <a href='https://maps.app.goo.gl/CoZLvL5bmF94r9Co8' target='_blank'>The Cape Goa</a>. Your luxurious home for this very special night.</p>
            <p>Just walk in to the front desk and check-in under your own name. They are waiting for you!</p>
            <p>I hope you had fun on this scavenger hunt and I hope you have an amazing night of pampering and luxury, my treat.</p>
            <p>And once again, happy birthday! I love you so much!</p>
            <p>- Raanan</p>
            <img src='lovers.png'>
            `,
            location: {
                center: [73.92700357828012, 15.098811410049244],
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
