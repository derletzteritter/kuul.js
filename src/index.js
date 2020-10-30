import React from 'react'
//import styles from './styles.module.css'

import styled from 'styled-components';



export const KuulCard = (props) => {

  const Card = styled.div`
    box-sizing: border-box;
    background: ${props => props.primary ? 'red' : 'brown'};
    height: 200px;
    width: 300px;
    margin: auto;
    border-radius: 5px;
  `

  return (
    <Card>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        {props.children}
      </div>
    </Card>
  )
}
