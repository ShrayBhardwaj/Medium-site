import React from 'react'
import './Ourstory.css';

function Ourstory() {
    return (
        <div>
          <div className="main">
          <div>
              <h1 className="h1_story">Every idea needs Medium.</h1>
          </div>
          <hr className="line" />
                <div class="row">
        <div class="column" >
            <h3 className="h3_story">The best ideas can change who we are. Medium is where those ideas take shape, 
            take off, and spark powerful conversations. We’re an open platform 
            where 170 million readers come to find insightful and dynamic thinking. 
            Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. 
            Our purpose is to spread these ideas and deepen understanding of the world.
            <br />
            <br />
            
            We’re creating a new model for digital publishing. 
            One that supports nuance, complexity, and vital storytelling without giving in to the 
            incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity.
            And it’s where deeper connections forged between readers and writers can lead to discovery and growth.
         Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas 
         and the people who think about them.
            </h3>
            
        </div>
        <div class="vl"></div>
        <div class="column" >
           <img className="img_story" src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif" alt="news anime">

           </img>
            
        </div>
    </div>
    <hr className="line" />

    <div >
        <div className="living_story">
        <div className="center_living"></div>
        <h3 className="living_h3">A living network of curious minds.</h3>
       {/* <p className="living_para">Anyone can write on Medium. Thought-leaders, journalists, experts, and 
        individuals with unique perspectives share their thinking here. You’ll find pieces by independent
         writers from around the globe, 
        stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</p>*/} 
    </div>
    </div>
           </div>
        </div>
    )
}

export default Ourstory
