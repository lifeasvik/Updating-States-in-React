import React from "react"

class Bomb extends React.Component {
    state = {count: 0};

    bombCounter = () => {

        if (this.state.count % 2 === 0){
            return 'Tick';
        }
        else if (!this.state.count % 2 === 0){
            return 'Tock';
        }
        else if (this.state.count > 9) { 
            clearInterval(this.interval)
            return 'Boom!';
        }
    }

    componentDidMount() {
        console.log(this.state.count);
        this.interval = setInterval(() => {
          this.setState({
            count: this.state.count +1
          })
        }, 1000)
      }

      componentWillUnmount() {
        clearInterval(this.interval)
    }

    render () {
        return (
            <div>
                <p>{this.bombCounter()}</p>
            </div>
        )
    }
}

export default Bomb;

/*componentDidMount() {
    console.log('componentDidMount')

    this.interval = setInterval()
        const count = 
        console.log('setInterval')
        this.setState({
            count: this.state.count
            })

                if (count % 2 === 0){
                    return `<p>'Tick'</p>`;
                }
                else if (!count % 2 === 0){
                    return 'Tock';
                }
                else if (count >= 8) { 
                    return 'Boom!';
                }
            }

        }, 1000)


    }*/


