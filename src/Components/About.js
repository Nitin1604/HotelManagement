import NavigationComponent from "./Navigation";
// Image will only works when it was imported.
import hotel2 from './hotel2.jpg';
import hotel3 from './hotel3.jpg';
import room from './room.jpg';
import tajLakePalace from './tajLakePalace.jpeg';
import hotel4 from './hotel4.jpg';
import hotel5 from './hotel5.jpg';
import hotel6 from './hotel6.jpg';
import hotel7 from './hotel7.jpg';
import hotel8 from './hotel8.jpg';

const AboutComponent = () => {

    return (
        <>
            {/* AboutComponent start here  */}
            <div id="AboutComponent">
                <NavigationComponent />

                {/* Content start here */}
                <div className="content">

                    {/* Jumbotron content start here */}
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1>Best Hotels in India</h1>
                            <p className="lead text-muted">These are the some awesome hotel in India you must visit these hotels.</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2 mx-2">Hotel open hours: 8am to 9pm</a>
                                <a href="#" className="btn btn-danger my-2">Hotel closed hours: 9pm to 8am</a>
                            </p>
                        </div>
                    </section>
                    {/* Jumbotron content ends here */}

                    {/* div's className as album content start here */}
                    <div className="album py-5 bg-light">

                        {/* Container content start here */}
                        <div className="container">

                            {/* Row content start here */}
                            <div className="row">

                                {/* column1 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content1 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={hotel2} alt="Image not found" />

                                        {/* card-body1 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">Radisson Noida</h6>

                                            {/* card-text1 start here */}
                                            <p className="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            </p>
                                            {/* card-text1 ends here */}

                                        </div>
                                        {/* card-body1 ends here */}

                                    </div>
                                    {/* Bringing shadow in card-content1 ends here */}

                                </div>
                                {/* column1 content ends here */}

                                {/* column2 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content2 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={hotel3} alt="Image not found" />

                                        {/* card-body2 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">FabExpress Sector 35</h6>

                                            {/* card-text2 start here */}
                                            <p className="card-text">
                                                This hotel provides many facilities such as Free WiFi,
                                                Free Parking, Room Service.
                                            </p>
                                            {/* card-text2 ends here */}
                                           
                                        </div>
                                        {/* card-body2 ends here */}

                                    </div>
                                    {/* Bringing shadow in card-content2 ends here */}

                                </div>
                                {/* column2 content ends here */}

                                {/* column3 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content3 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={room} alt="Image not found" />

                                         {/* card-body3 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">5 star hotel</h6>

                                            {/* card-text3 start here */}
                                            <p className="card-text">
                                                This is the best room of this hotel and best among other hotels too.
                                            </p>
                                            {/* card-text3 ends here */}

                                        </div>
                                         {/* card-body3 ends here */}

                                    </div>
                                    {/* Bringing shadow in card-content3 ends here */}

                                </div>
                                {/* column3 content ends here */}

                                {/* column4 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content4 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={tajLakePalace} alt="Image not found" />

                                        {/* card-body4 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">Taj Lake Palace</h6>

                                            {/* card-text4 start here */}
                                            <p className="card-text">
                                                This is the best hotel among other hotel in India and it is situated in between of lake.
                                            </p>
                                            {/* card-text4 ends here */}

                                        </div>
                                        {/* card-body4 ends here */}

                                    </div>
                                    {/* Bringing shadow in card-content4 ends here */}

                                </div>
                                {/* column4 content ends here */}

                                {/* column5 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content5 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={hotel4} alt="Image not found" />

                                        {/* card-body5 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">THE OBEROI UDAIVILAS</h6>
                                            
                                            {/* card-text5 start here */}
                                            <p className="card-text">
                                                Every single room of this luxurious hotel reflects elegance and is designed to bestow the utmost comfort.
                                            </p>
                                            {/* card-text5 ends here */}

                                        </div>
                                        {/* card-body5 ends here */}

                                    </div>
                                      {/* Bringing shadow in card-content5 ends here */}

                                </div>
                                {/* column5 content ends here */}

                                {/* column6 content start here */}
                                <div className="col-md-4">
                                    
                                    {/* Bringing shadow in card-content6 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={hotel5} alt="Image not found" />
                                        
                                        {/* card-body6 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">LEELA PALACE UDAIPUR</h6>

                                            {/* card-text6 start here */}
                                            <p className="card-text">
                                                Located by Lake Pichola, each of the 80 luxurious rooms offer panoramic views of mountains and tranquil lakes.
                                            </p>
                                            {/* card-text6 ends here */}

                                        </div>
                                        {/* card-body6 ends here */}

                                    </div>
                                    {/* Bringing shadow in card-content6 ends here */}

                                </div>
                                {/* column6 content ends here */}

                                {/* column7 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content7 ends here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={hotel6} alt="Image not found" />

                                        {/* card-body7 start here  */}
                                        <div className="card-body">
                                            <h6 className="card-title">TAJ ARAVALI RESORT & SPA</h6>
                                            
                                            {/* card-text7 start here */}
                                            <p className="card-text"> 
                                            From the ornate marble flooring to elaborate chandeliers, every part of the resort is designed to perfection.
                                            </p>
                                            {/* card-text7 ends here */}

                                        </div>
                                        {/* card-body7 ends here  */}

                                    </div>
                                    {/* Bringing shadow in card-content7 ends here */}

                                </div>
                                {/* column7 content ends here */}

                                {/* column8 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content8 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={hotel7} alt="Image not found" />
                                          
                                        {/* card-body8 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">RAMBAGH PALACE</h6>
                                            
                                            {/* card-text8 start here */}
                                            <p className="card-text">
                                                The Pink city of India, Jaipur has an array of architectural wonders that mirrors India’s glorious heritage.
                                            </p>
                                            {/* card-text8 ends here */}

                                        </div>
                                        {/* card-body8 ends here */}

                                    </div>
                                    {/* Bringing shadow in card-content8 ends here */}

                                </div>
                                {/* column8 content ends here */}

                                {/* column9 content start here */}
                                <div className="col-md-4">

                                    {/* Bringing shadow in card-content9 start here */}
                                    <div className="card mb-4 shadow-sm">
                                        <img className="card-img-bottom" src={hotel8} alt="Image not found" />
                                        
                                        {/* card-body9 start here */}
                                        <div className="card-body">
                                            <h6 className="card-title">OBEROI RAJVILAS</h6>
                                           
                                           {/* card-text9 start here */}
                                            <p className="card-text">
                                                A gem in the vibrant city of Jaipur, Oberoi Rajvilas is unmistakably one of the best hotels in India.
                                            </p>
                                            {/* card-text9 ends here */}

                                        </div>
                                        {/* card-body9 ends here */}


                                    </div>
                                    {/* Bringing shadow in card-content9 ends here */}

                                </div>
                                {/* column9 content ends here */}

                            </div>
                            {/* Row content ends here */}

                        </div>
                        {/* Container content ends here */}

                    </div>
                    {/* div's className as album content ends here */}

                </div>

                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#">Back to top</a>
                        </p>
                        <p>Best Hotel in India &copy; All these hotel are best and fully air conditioner.</p>

                    </div>
                </footer>

            </div>
            {/* Content ends here */}

            {/* AboutComponent ends here */}

        </>
    )
}

export default AboutComponent;