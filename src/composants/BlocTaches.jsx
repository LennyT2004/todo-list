import './BlocTaches.scss';

import { useEffect, useState } from 'react';

import BarreAjoutTache from './BarreAjoutTache';
import ListeTaches from './ListeTaches';
import PiedDePage from './PiedDePage';

export default function BlocTaches() {

  const [taches, setTaches] = useState(
    () => JSON.parse(window.localStorage.getItem('gestionnaireTaches')) || []
  );

  useEffect(
    () => window.localStorage.setItem('gestionnaireTaches', JSON.stringify(taches))
    ,
    [taches]
  );
  const [filtre, setFiltre] = useState('toutes');

  function ajouterTache(tache) {
    let nouvelleTache = {
      id: window.crypto.randomUUID(),
      tache: tache,
      complete: false,
      dateHeureAjout: new Date().toLocaleString()
    };
    console.log(nouvelleTache);
    setTaches([...taches, nouvelleTache]);
  }

  function supprimerTachesCompletees() {
    setTaches(prevTaches => prevTaches.filter(tache => !tache.complete));
  }

  const tachesIncompletes = taches.filter(tache => !tache.complete).length;

  return (
    <div className="BlocTaches">
      <BarreAjoutTache ajouterTache={ajouterTache} />
      <ListeTaches
        ajouterTache={ajouterTache}
        taches={taches}
        setTaches={setTaches}
        filtre={filtre}
        
        
      />
      <PiedDePage
        filtre={filtre}
        setFiltre={setFiltre}
        supprimerTachesCompletees={supprimerTachesCompletees}
        tachesIncompletes={tachesIncompletes}
      />
    </div>

  )
}