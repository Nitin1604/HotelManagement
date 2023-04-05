import NavigationComponent from "./Navigation";
import hotel1 from './hotel1.jpg';
const AboutComponent = () => {

    return (
        <>
        <div id="AboutComponent">
            <NavigationComponent />
            <div className="content">
            <div className="row my-3">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-4 mx-2">
                        <img src={hotel1} alt="hotel1" />
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default AboutComponent;



