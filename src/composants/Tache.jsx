import './Tache.scss';

import IconButton from '@mui/material/IconButton';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tache({ id, tache, dateHeureAjout, completerTache, supprimerTache }) {

  const [seSupprime, setSeSupprime] = useState(false);

  useEffect(() => {
    if (seSupprime) {
      setTimeout(() => supprimerTache(tache.id), 500);
    }
  }, [seSupprime, supprimerTache, id]);

  const gererSupprime = () => {
    setSeSupprime(true);
  };

  return (
    <AnimatePresence>
      {!seSupprime && (
        <motion.article
          className={`Tache ${tache.complete ? 'complete' : ''}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: [0.5, 1.25, 1],
            background: tache.complete ? 'rgba(70, 165, 16, 0.25)' : 'rgba(255, 255, 255, 0.25)'
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='infos-taches'>
            <p>{tache.tache.length > 50 ? tache.tache.substring(0, 50) + '...' : tache.tache}</p>
            <p>{dateHeureAjout}</p>
          </div>
          <div className='boutons-action'>
            <IconButton className='btn-tache complete' onClick={() => completerTache(tache.id)}>
              <AssignmentTurnedInIcon />
            </IconButton>
            <IconButton
              className='btn-tache supprimer'
              onClick={gererSupprime}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  )
}