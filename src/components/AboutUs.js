import React from 'react'
import '../App'

function AboutUs() {

    return (
        <div >
            <div>
                <img src={process.env.PUBLIC_URL + "./static/dhoni.jpg"} alt="image" style={{height:"255px", width:"100%"}}/>
            </div>
            <div className="App">
                <h2>Indian Cricket Club</h2>
            </div>
            <div className="App-Para">
                <h4>History</h4>
                <p>
                At the outset, there is nothing significant about the year 1721, 
                as far as India's political history is concerned. Aurangzeb, the 
                sixth of the great Mughals, had passed away in 1707, and the 
                Empire he and his forefathers had built, had started to disintegrate. 
                The Marathas were gaining in prominence, and in the process of knocking 
                hard on the doors of Delhi. These were prominent happenings; what was 
                peripheral was that 'merchants' from England and France had established 'settlements' 
                in select areas of the subcontinent, and were going about their business of trade.
                </p>
                <p>
                The sea-route being the sole link between them and their respective homelands,
                 most of these settlements were situated in the coastal areas of the Indian peninsula.
                </p>
                <p>
                It was sometime in 1721 that a British ship dropped anchor off the coast of Kutch in 
                western India. The recreational activities the sailors indulged in on the coast 
                elicited curious reactions from onlookers. One of the sailors, who answered to 
                the name of Downing, recalled his time on the Kutch coast in his memoirs thus: 
                "We everyday diverted ourselves with playing cricket and other exercises"
                </p>
                <p>This is the earliest recorded reference to cricket in India.</p>
                <p>
                As the merchants metamorphosed into rulers, they continued to demonstrate their recreational 
                pursuits on Indian soil. The British army took on the English settlers in what was the first
                 recorded cricket match in India in 1751.
                </p>

                <p>
                The establishment of the Calcutta Cricket Club (what we know today as CC & FC) in 1792, was 
                er watershed for the sport in the land. In fact, it is the second-oldest cricket club in 
                the world, after the MCC (1787).
                </p>
            </div>
        </div>
    )
}

export default AboutUs
