import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { getDeviceId, getFacingModePattern } from './getDeviceId'
// const { getDeviceId, getFacingModePattern } = require('./getDeviceId')


export default function App1() {

    const [ state, setState ] = useState({
        result: 'No result',
    })

    const handleScan = data => {
        if (data) {
            setState({
                result: data
            })
        }
    }
    const handleError = err => {
        console.error(err)
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
        </div>
    )


}