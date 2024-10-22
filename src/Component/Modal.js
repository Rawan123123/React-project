
import './popStyle.css';
function PopAge({ isVisable, errorMessage = null }) {
    if (isVisable) {
        return (

            <div className='cont'  >
                <div className='contmessage'>
                    <h2 style={{ color: errorMessage != null ? 'red' : 'green' }}> {errorMessage != null ? errorMessage :
                        'You Have Been Submited Successfully'
                    }
                    </h2>
                </div>

            </div>

        )
    }
    else
        return <></>

}
export default PopAge;