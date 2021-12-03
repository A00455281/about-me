import { Component } from "react";
import { getTempInDegreeCel, WEATHER_DATE_CITYWISE_URL } from "../service/Weather";
import cold from './../assets/cold.png'
import mild from './../assets/mild.png'
import sunny from './../assets/sunny.png'
import halifax from './../assets/halifax.jpg'

class Town extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature : 0
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch(WEATHER_DATE_CITYWISE_URL)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response.main);
                this.setState({
                    temperature : getTempInDegreeCel(response.main.temp)
                })
            });
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="d-flex align-items-start flex-column">
                <img src={halifax} height="200" width="300"/>
                <div className="mt-4 h3">
                    I live in Halifax, NS Canada
                </div>
                <div className="h6 my-3 name">
                    Halifax is the capital city of Nova Scotia. 
                    <br/>It is located on the East Coast of Canada on the Atlantic Ocean.
                </div>
                <div>
                    {this.state.temperature <= 10 ?
                        <img src={cold} alt="Cold" height="40" width="50"/> :
                            this.state.temperature > 10 & this.state.temperature < 20 ?
                                <img src={mild} alt="Mild" height="40" width="50"/> : 
                                    <img src={sunny} alt="Sunny" height="40" width="50"/>
                    }
                    <span className="comic-sans primary h3 ml-3">
                        {this.state.temperature}
                        {/* <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autocomplete="off" checked/> &#8451;
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="option2" autocomplete="off"/> &#8457;
                            </label>
                        </div> */}
                    </span>
                </div>
            </div>
        )
    }
}

export default Town