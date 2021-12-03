import person from './../assets/person.png'

const AboutMe = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex align-items-start flex-column mx-5 mt-5">
                <div>HI THERE &#128075;, I'M</div>
                <div className="name">
                    <h1>Akshay.</h1>
                </div>
                <div>
                    <h4 className="text-primary name">Software Developer &#128187;</h4>
                </div>
                <div>I'm a software developer based in Halifax, Canada.</div>
                {/* <div>
                    <button type="button" class="btn btn-outline-primary my-4"> Contact Me </button>
                </div> */}
            </div>
            <img src={person}/>
        </div>
    );
}

export default AboutMe