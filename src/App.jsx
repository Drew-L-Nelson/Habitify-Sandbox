import './App.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable';


import axios from 'axios';

export default function App(props) {
    const [data, setData] = useState([]);
    const { id } = useParams;

    const URL = 'https://api.habitify.me/habits';

    useEffect(() => {
        axios.get(URL, {
            headers: {
                Authorization:
                    '1e992ef3c6630ca138a016460debdd5f0b6de0b86beb1b59cfefe8467ba31317'
            }
        })
            .then(res => {
                console.log(res);
                // console.log(res.data.data[0]);

                // for (let i = 0; i < res.data.data.length; i++) {
                //     setData(res.data.data[i]);
                    // console.log(data);
                // }
                

                
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    console.log("data ==>", data);

    const handleEvent = (e, d) => {
        console.log("Event name: ", e.type);
        // console.log("e ==>", e, "d==>", d);
    }

    return (
        <Draggable 
            onDrag={handleEvent} 
            onStart={handleEvent}
            onStop={handleEvent}
            onMouseDown={handleEvent}
            onMouseUp={handleEvent}
            onTouchStart={handleEvent}
            onTouchEnd={handleEvent}>
            
            <div className="draggableBlock">
                React ⚛️ + Vite ⚡ + Replit 🌀
                <label>
                    <p>ID: {data.id}</p>
                    <p>Name: {data.name}</p>
                    <p>Priority: {data.priority}</p>
                </label>
            </div>
        </Draggable>
    )
}
            
            