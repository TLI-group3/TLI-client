import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const CustomCard = (props) => {
    return (
        <Card
            cover={
                <img
                    alt="example"
                    src= {props.src}
                />
            }
            hoverable={true}
            style={{ width: 300 }}

        >
            <Meta
                title= {props.title}
                description={props.description}
            />
        </Card>
    );
};

export default CustomCard;
