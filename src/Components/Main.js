import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {

    render() {
        return (
            <div className={ styles.mainDiv }>
                <div className={styles.subContent}>
                    {this.props.children[0]}
                    {this.props.children[1]}
                    {this.props.children[2]}
                </div>
                {this.props.children[3]}
            </div>
        )
    }
}

export default Main;