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

        >
            <Meta
                title= {props.title}
                description={props.description}
                year={props.year}
            />
        </Card>
    );
};

export default CustomCard;
