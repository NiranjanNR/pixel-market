import "./Content.css"
import {Link} from 'react-router-dom';
const Content = () => {
    return ( 
        <div className="content">
            {/* {width<=720 && <img src={logo} width="120px" height="120px" alt="autodeck-logo"></img>}     */}
            <h1 className="title text-white">Sell | Find | Buy</h1>
            <p className="message text-center">
                A one stop destination for all your digital art needs
                <br></br>
                <br></br>
                Pixel Market makes it easier for you to find that perfect art to call your own.
                <br></br>
                <br></br>

            </p>
            <Link to="/"><button className="text-xl font-semibold mt-4 lg:mt-0 lg:ml-8 border border-gray-500/25 p-6 mx-4 bg-indigo-700 hover:bg-indigo-600 transition-all ease-in-out active:scale-95 rounded-sm">Explore Around</button></Link>
        </div>
     );
}
 
export default Content;