import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { getDeviceId, getFacingModePattern } from './getDeviceId'
// const { getDeviceId, getFacingModePattern } = require('./getDeviceId')


export default function App1() {

    const [state, setState] = useState({
        result: 'No result',
    })
    //data schema : Name,Price,Count,Image_Url
    const handleScan = data => {
        if (data) {
            return (
                value.map(
                    (val, idx) =>
                        <div>
                            <h1>val.name</h1>
                            <h1>val.price</h1>
                            <h1>val.count</h1>
                            <h1>val.image_url</h1>
                        </div>
                )
            )
                
    }
}
const handleError = err => {
    console.error(err)
}
const getNewItemData = (value) => {
    return (
        value.map(
            (val, idx) =>
                <div>
                    <h1>val.name</h1>
                    <h1>val.price</h1>
                    <h1>val.count</h1>
                    <h1>val.image_url</h1>
                </div>
        )
    )
}
const allItemsSum = () => {

}
return (
    <div>
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '30%' }}
        />
        <p>{console.log(state.result)}</p>

        <a></a>

    </div>
)

}
