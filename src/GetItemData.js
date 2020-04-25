import React, { useState } from 'react'

export default function GetItemDate(data) {
    if (data) {
        const data2 = data.split(",");
        console.log(data2);
        return (
            <div>
                {data2.map((item, idx) =>
                    <h1>{item}</h1>
                )}

            </div>

        )
    }
}