import React from 'react';
import './../App.css';

class Student extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            passed: false,
            failed: false
        }
    }
    componentDidMount() {
        this.setState(
            {
                score: this.props.score
            }
        );
    }

    passORfail(){
        if (this.state.score >= 349) {
            this.setState({
                passed: true
            })
            
        }
         else if(this.state.score >340 && this.state.score < 351){
            this.setState({
                passed: false,
                failed: false
            })
        }

            else if (this.state.score < 340) {
            this.setState({
                failed: true
            })
        }
        else{
            this.setState({
                passed: false,
                failed: false
            })
        }
        
    }

    incScore() {
        this.setState({
            score: this.state.score + 1
        },this.passORfail());
    
    }

    decScore() {
        this.setState({
            score: this.state.score - 1
        }, this.passORfail());
    
    }

    

    render() {
        const isPassed = this.state.passed;
        const isFailed = this.state.failed;
        let result;
        if (isPassed) {
            result = <span className='result pass'>PASS</span>
        } else if(isFailed){
            result = <span className='result fail'>FAILED</span>
        }
        
        else
        {
            result = '';
        }

        return (
            <div className='Student'>
                <div className='left'>
                    <h2 className='stuName'>
                        {this.props.name}
                        <button className='ScoreBtn' onClick={() => this.incScore()}>+</button>
                        <button className='ScoreBtn' onClick={() => this.decScore()}>-</button>
                    </h2>
                    <p className='uniName'>
                        {this.props.uni}
                        {result}
                        </p>
                </div>
                <div className='right'>
                    <div className="score">{this.state.score}</div>
                </div>
            </div>
        );
    }
}

export default Student;