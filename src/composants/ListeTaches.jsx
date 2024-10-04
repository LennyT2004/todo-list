import './ListeTaches.scss';

import Tache from './Tache';
import { AnimatePresence } from 'framer-motion';

export default function ListeTaches({ taches, setTaches, filtre, dateHeureAjout}) {
  const tachesFiltrees = taches.filter(tache => {
    if (filtre === 'toutes') return true;
    if (filtre === 'actives') return !tache.complete;
    if (filtre === 'terminees') return tache.complete;
  });

  function completerTache(id) {
    setTaches(prevTaches => prevTaches.map(tache => {
      if (tache.id === id) {
        return { ...tache, complete: !tache.complete }
      }
      return tache;
    }));
  }

  function supprimerTache(id) {
    setTaches(taches.filter(tache => tache.id !== id));
  }

  return (
    <div className="ListeTaches">
      {
        (tachesFiltrees.length > 0)
          ?
            tachesFiltrees.map(tache => (
              <Tache
                key={tache.id}
                tache={tache}
                completerTache={completerTache}
                supprimerTache={supprimerTache}
                dateHeureAjout={tache.dateHeureAjout}
              />
            ))
          :
          <h3>Aucune tâche</h3>
      }
    </div>
  );
}