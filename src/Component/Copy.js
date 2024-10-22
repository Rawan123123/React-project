import {useState } from "react";
import './popStyle.css';
import Modal from './Modal';

function Form() {
    const [inputForm, setInputForm] = useState({ name: '', phone: '', age: '', cheackB: false, salary: '' });
    const [showModal, setShowModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)


    function handleFormSubmit(event) {
        event.preventDefault();
        setShowModal(true);
        
        if (inputForm.age < 18 || inputForm.age > 100)
            setErrorMessage('The Age Not Allowed');
        else if(inputForm.phone.length <10 || inputForm.phone.length >12)
            setErrorMessage('The Phone Number is Not Allowed')
        else
            setErrorMessage(null)



    }
    const btnDisable =
        inputForm.name == '' ||
        inputForm.phone == '' ||
        inputForm.age == '';

    let btnClass = "";
    if (btnDisable)
        btnClass = 'disable';

    function handleDivClick() {
        if (showModal)
            setShowModal(false);
    }
    return (
        <div className="box" onClick={handleDivClick}>
            <div className="container">
                <div className="head">
                    <h1>Requesting a loan</h1>
                    <hr></hr>
                </div>

                <div className="content">
                    <form>
                        <lable>Name</lable>
                        <input placeholder="enter your name" value={inputForm.name} onChange={(event) => {
                            setInputForm({ ...inputForm, name: event.target.value })
                        }} />

                        <lable>Phone Number</lable>
                        <input placeholder="enter your Phone number" value={inputForm.phone} onChange={(event) => {
                            setInputForm({ ...inputForm, phone: event.target.value })
                        }} />

                        <lable>Age</lable>
                        <input placeholder="enter your age" type="number" value={inputForm.age} onChange={(event) => {
                            setInputForm({ ...inputForm, age: event.target.value })
                        }} />

                        <lable>Are You An Employee?</lable>
                        <input style={{ height: '25px' }} type="checkbox" cheacked={inputForm.cheackB} onChange={(event) => {
                            setInputForm({ ...inputForm, cheackB: event.target.checked })
                        }} />

                        <label>Salary</label>
                        <select value={inputForm.salary} onChange={(event) => {
                            setInputForm({ ...inputForm, salary: event.target.value })
                        }}>
                            <option>10000$</option>
                            <option>5000$</option>
                            <option>60000$</option>
                        </select>



                        <button
                            onClick={handleFormSubmit}
                            disabled={btnDisable}
                            className={btnClass}>
                            Submit
                        </button>

                        <Modal isVisable={showModal} errorMessage={errorMessage} />
                    </form>

                </div>

            </div>
        </div>
    )

}
export default Form;