import React from 'react'

const Notelist = ({title, description, id, deleteItem}) => {

    const deleteNote = () => {
        deleteItem(id);
    }
    return (
        <div className='note-list text-start'>
            <div className='note-title'>
                <h6>{title}</h6>
            </div>
            <div className='note-desc'>
                <p>{description}</p>
            </div>
            <div className='note-foot'>
                <ul className='d-flex p-0 justify-content-end'>
                    {/* <li>
                        <a href="#"><i class="far fa-edit"></i></a>
                    </li> */}
                    <li>
                        <a href="#" onClick={deleteNote}><i className="far fa-trash-alt"></i></a>
                    </li> 
                    
                </ul>
            </div>
        </div>
    )
}

export default Notelist
