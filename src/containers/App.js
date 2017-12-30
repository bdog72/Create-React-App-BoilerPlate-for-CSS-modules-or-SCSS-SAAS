import React, { Component } from 'react'
import styles from './App.css'
console.log('------------------------------------')
console.log(styles)
console.log('------------------------------------')
class App extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.Header}>Hello There</h1>
            </div>
        )
    }
}

export default App
