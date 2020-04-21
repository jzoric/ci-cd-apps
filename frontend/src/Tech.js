import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card} from "antd";

function Tech({url}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchTech = async () => {
            const result = await axios(url);
            setData(result.data);
        };
        fetchTech();
    }, [url])
    return (
        <div className="site-card-border-less-wrapper">
            <Card title="Tech" bordered={false} hoverable style={{width: 300}}>
                {data.map(tech => <p>{tech}</p>)}
            </Card>
        </div>
    )
}

export default Tech;
