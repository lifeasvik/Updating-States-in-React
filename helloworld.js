import React from "react";
import { render } from "@testing-library/react";


class HelloWorld extends React.Component {
    state = {
        who : "World"
    };

    displayWord = (Word) => {
        const newWho = this.state.who
        this.setState({
            who: Word
        });
    }


    render() {
        return (
        <main>
            <div>
                <p>Hello, {this.state.who}</p>
            </div>
            <div>
                <button onClick={() => this.displayWord('World')}>World</button>
                <button onClick={() => this.displayWord('Friend')}>Friend</button>
                <button onClick={() => this.displayWord('React')}>React</button>
            </div>
        </main>
        );
    }
}

export default HelloWorld;