import React from 'react'
import TinderCard, { ITinderCard } from './TinderCard'
import "./TinderCardStack.css"

const TinderCardStack: React.FC<{cards:ITinderCard[]}> = ({cards}) => {
    return (
        <div className="tinder-container">
            {cards.map((dummyCard, index) => (
                <TinderCard key={index} imageUrl={dummyCard.imageUrl} title={dummyCard.title} subtitle={dummyCard.subtitle} />
            ))}
        </div>
    )
}

export default TinderCardStack
