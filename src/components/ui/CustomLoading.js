import './Loading.css'

const CustomLoading = ({ loading }) => {
    if(!loading){
        return (<div className='loader_container'><span class="loader"></span></div>) 
    }
};

export default CustomLoading;