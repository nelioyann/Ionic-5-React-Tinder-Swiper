import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React, { useEffect, useRef } from 'react'
import { Gesture, GestureConfig, createGesture } from '@ionic/core';
import "./TinderCard.css"

// Schema of the provided data
export interface ITinderCard{
    imageUrl:string;
    title: string;
    subtitle:string;
}




const TinderCard:React.FC<ITinderCard> = ({imageUrl, title, subtitle}) => {
    // Getting a reference to the card element
    const cardElement = useRef<HTMLIonCardElement>(null);

    const initGesture = async () =>{
        const windowWidth = window.innerWidth;
        if (cardElement.current === null ) {return}
        const options: GestureConfig = {
            el: cardElement.current,
            gestureName: "tinder-swipe",
            onStart: () => {
                cardElement.current!.style.transition = ""
            },
            onMove: (detail) => {
                cardElement.current!.style.transform = `translate(${detail.deltaX}px, ${detail.deltaY}px) rotate(${detail.deltaX / 20}deg)`
            },
            onEnd: (detail) =>{

                cardElement.current!.style.transition = "0.3s ease-out"

                if (detail.deltaX > windowWidth / 2){
                    // do something
                    cardElement.current!.style.transform = `translateX(${windowWidth * 1.5}px)`;
                    console.log("A")
                } else if(detail.deltaX < -windowWidth / 2){
                    cardElement.current!.style.transform = `translateX(-${windowWidth * 1.5}px)`;
                    console.log("B")

                } else{
                    cardElement.current!.style.transform = ""
                }
            }
        }
        const gesture: Gesture = await createGesture(options);
        gesture.enable()

    }



    useEffect(() => {
        console.log(cardElement?.current);
        initGesture()
        // return () => {
        //     console.log("cleanup")
        // }
    }, [cardElement])

    return (
        <IonCard ref={cardElement} className="tinder-card" style={{ width: "max-content" }}>
            <IonCardHeader>
                <img draggable="false" src={imageUrl} alt={title}/>
            </IonCardHeader>
            <IonCardContent>
                <IonCardTitle>{title}</IonCardTitle>
                <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    )
}

export default TinderCard;
