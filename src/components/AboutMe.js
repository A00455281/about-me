import person from './../assets/person.png'

const AboutMe = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start flex-column mx-5 mt-5">
                <div>HI THERE &#128075;, I'M</div>
                <div className="name">
                    <h1>Akshay.</h1>
                </div>
                <div className="text-primary name h3">
                    Software Developer &#128187;
                </div>
                <div className="h5">I'm a software developer based in Halifax, NS <br/> currently pursuing my masters at Saint Mary University.</div>
                <div className="mt-4 h5">
                    I joined the MCDA because I wanted to explore different fields in <br/>computer science and data analytics.
                </div>
                {/* <div>
                    <button type="button" class="btn btn-outline-primary my-4"> Contact Me </button>
                </div> */}
            </div>
            <img src={person}/>
        </div>
    );
}

export default AboutMe