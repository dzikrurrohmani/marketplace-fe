import './AppLoading.css';
import Lottie from 'react-lottie-player';
import animation from './AppLoading.json'

const AppLoading = ({label = 'Mohon tunggu..'}) => {
    return (
        <div className='backdrop-container'>
            <div className='backdrop-content'>
                <Lottie animationData={animation} play loop style={{width:'200px',height:'200px'}}/>
                <p className='label'>{label}</p>
            </div>
        </div>
    )
}
export default AppLoading;
