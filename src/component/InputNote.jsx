import React, { useState } from 'react'

const InputNote = ({passNote}) => {
    const [data, setData] = useState({
        title:'',
        description:'',
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(newData => {
            return{
                ...newData, [name]:value
            }
        })
    }

    const addEvent = (e) => {
        e.preventDefault();
        passNote(data);
        setData({
            title:'',
            description:'',
        })
    }
    return (
        <div className='input-data'>
            <div className='input-mainwrap'>
                <form className='google-form'>                   
                    <div className="mb-3">
                        {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                        <input type="text" name='title' value={data.title} onChange={handleChange} className="form-control border-0 title" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                        <textarea name="description" value={data.description} onChange={handleChange} className="form-control border-0 desc" placeholder='Take a note'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='addbtn' onClick={addEvent}>Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InputNote
