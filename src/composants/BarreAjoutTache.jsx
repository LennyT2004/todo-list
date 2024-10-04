import './BarreAjoutTache.scss';

import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

function BarreAjoutTache({ ajouterTache, tachePrec = null }) {
    const [instructions, setInstructions] = useState(tachePrec ? tachePrec.tache : "");

    function gererEnvoi(e) {
        e.preventDefault();
        if (instructions.trim() === '') {
          return;
        }
      
        if (!tachePrec) {
          ajouterTache(instructions);
        } else {
          ajouterTache(tachePrec.id, instructions);
        }
      
        setInstructions('');
      }

    return (
        
        <div className="BarreAjoutTache">
            <form className='ajoutTacheFrm' onSubmit={gererEnvoi}>
                <input
                    type="text"
                    placeholder='Ajouter une tâche...'
                    name="text"
                    className='barreAjoutTache'
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                <IconButton onClick={gererEnvoi}>
                    <SendIcon className='icone-envoi' />
                </IconButton>
            </form>
        </div>
    )
}

export default BarreAjoutTache;