import React, { useState } from 'react';
import  {usePapaParse } from 'react-papaparse';


function Counter() {
    const { readRemoteFile } = usePapaParse();
    const [cvsData, setCSVData ]= useState([]);
    function readData() {
        console.log(process.env.PUBLIC_URL + '/data/stock.csv')
        readRemoteFile(process.env.PUBLIC_URL + '/data/stock.csv', {
            header: true,
            dynamicTyping: true,
            error: function (err) {
                console.error('Error:', err);
            },
            complete: (results) => {
                console.log('CSV File Data');
                console.log(results.data);
                setCSVData(results.data);
            }
        });
    };
    readData();

    let [n, setCount] = useState(0);
    let increase = () => {
        n++
        setCount(n)
        console.log(n);
    }
    let reset = () => {
        n = 0;
        setCount(n)
    }
    return (
        <div>
            <p>value:{n}</p>
            <button style={{ margin: "2px" }} onClick={increase}>increase</button>
            <button style={{ margin: "2px" }} onClick={reset}>reset</button>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Index</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                     cvsData.map((el)=>{
                       return <tr>
                        <td>{el.name}</td>
                        <td>{el.id}</td>
                        <td>{el.index}</td>
                        <td>{el.rate}</td>
                    </tr>
                     })  
                    }
                </tbody>
            </table>
        </div>
    );

}

export default Counter;
