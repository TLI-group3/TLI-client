import { Card } from "antd";

/**
 * Basic builder/factory for a Custom Card.
 */
var Meta = Card.Meta;

var CustomCard = function CustomCard(props) {
    return React.createElement(
        Card,
        {
            cover: React.createElement("img", {
                alt: "example",
                src: props.src
            }),
            hoverable: true,
            style: { width: 300 }

        },
        React.createElement(Meta, {
            title: props.title,
            description: props.description
        })
    );
};

export default CustomCard;