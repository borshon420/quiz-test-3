import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface ResultProps {
    ansCount: number;
    count: number;
}

const Result: React.FC<RouteComponentProps> = (props: RouteComponentProps<{}>) => {
    const result = props.location.state as ResultProps;

    const deg = (a: number, b: number) => {
        return (360 * a) / (a + b);
    }
    return (
        <div>
            <h2>Result Page</h2>
            <h3 style={{color: "green", padding: "5px", margin: "0" }}>Correct answer: {result.ansCount}</h3>
            <h3 style={{color: "red", padding: "5px", margin: "0" }}>Incorrect answer: {result.count - result.ansCount}</h3>
            <div
                style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: `conic-gradient(
                        green 0deg ${deg(
                            result.ansCount,
                            result.count - result.ansCount
                        )}deg,
                        red ${deg(
                            result.ansCount,
                            result.count - result.ansCount
                        )}deg 360deg
                    )`,
                    borderRadius: "50%",
                    margin: "auto"
                }}
            >

            </div>
        </div>
    );
};

export default Result;