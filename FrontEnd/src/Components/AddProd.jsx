import React from 'react'
import "./Style/AddProd.css"
import { useState } from 'react';



const AddProd = () => {
    const [file, setFile] = useState(null);
    const [focusDivBorder,setFocusDivBorder] = useState(false);

function fileHandler(file) {
    if (file.type.startsWith("image/")) {
        setFile(file);
        setFocusDivBorder(true);
        console.log(file);
        return;
    }
    alert("Only image files are allowed!");
}

return (
    <>
    <div className='Addprod'> <center><h2>Add Product Detailes</h2></center>
        <div className={focusDivBorder?"file-uplaod-div-focus":'file-uplaod-div-not-focus'}>
            <input type="file" accept='image/*' id='photo-input' name="photo" required onChange={(e) => fileHandler(e.target.files[0])} />
            {!file ? (
                <p className='drag-drop-filename'>Drag & Drop Photo or Browse Photo</p>
            ) : <p className='drag-drop-filename'>{file.name}</p>
            }</div>
            <div className='prod-details'>
                <div className='prod-detail-div'><label htmlFor="prodname"> Name: <input type="text" name='prodname' placeholder='ex: Watch'/></label></div>
                <div className='prod-detail-div'><label htmlFor="proddes"> Description: <input type="text" name='proddes' placeholder='ex: Write about watch'/></label></div>
                <div className='prod-detail-div'><label htmlFor="prodcategory"> Category: <input type="text" name='prodcategory' placeholder='ex: Electronics or Groccessry'/></label></div>
                <div className='prod-detail-div'><label htmlFor="prodprice"> Price: <input type="number" name='prodprice' placeholder='ex: $100'/></label></div>
                <div className='prod-detail-div'><label htmlFor="proddiscountPrice"> Discount Price: <input type="number" name='proddiscountPrice' placeholder='ex: $50'/></label></div>
                <div className='prod-detail-div'><label htmlFor="prodoffer"> Offer %: <input type="number" name='prodoffer' placeholder='ex: 50'/></label></div>
                <div title='given by user' className='prod-detail-div'><label htmlFor="prodratings"> Ratings: <input style={{cursor:"not-allowed"}} type="number" readOnly name='prodratings' placeholder='this will be given by user'/></label></div>
            </div>
        <button>Add</button>
    </div>
    </>
)
}

export default AddProd
