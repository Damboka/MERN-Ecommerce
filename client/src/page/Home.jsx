import Card from "../components/Card";
import Slider from "../components/Slider";

const Home = () => {
    return ( 
        <>
            <div className="flex w-full justify-center mt-20">
                <div className="w-10/12 flex">
                    <div className="w-full">
                        <Slider />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20">
                <Card />
            </div>
        </>
     );
}
 
export default Home;