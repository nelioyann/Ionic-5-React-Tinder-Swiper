import { GestureDetail, IonBadge, IonButton, IonButtons, IonCard, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useRef } from 'react';
import './Home.css';
import TinderCard, { ITinderCard } from '../components/TinderCard';
import TinderCardStack from '../components/TinderCardStack';

const Home: React.FC = () => {
  const cards: ITinderCard[] = [{
    imageUrl: "https://picsum.photos/250/270",
    title: "Image1",
    subtitle: "Image1 retieved from picsum",
}, {
    imageUrl: "https://picsum.photos/250/271",
    title: "Image2",
    subtitle: "Image2 retieved from picsum",
}, {
    imageUrl: "https://picsum.photos/250/272",
    title: "Image3",
    subtitle: "Image3 retieved from picsum",
}]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tinder Cards </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <TinderCardStack cards={cards}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
