import './PiedDePage.scss';

import Button from '@mui/material/Button';

function PiedDePage({ filtre, setFiltre, supprimerTachesCompletees, tachesIncompletes }) {
  const gererFiltre = (event) => {
    setFiltre(event.target.value);
  };

  return (
    <footer className="PiedDePage">
      <h3>{tachesIncompletes} tâches restantes</h3>
      <div className='boutons-footer'>
        <form action="" method='get'>
          <div className='filtre'>
            <select name="filtre" id="filtre" value={filtre} onChange={gererFiltre}>
              <option value="toutes">Toutes</option>
              <option value="actives">Actives</option>
              <option value="terminees">Complétées</option>
            </select>
          </div>
        </form>
        <Button variant="contained" onClick={supprimerTachesCompletees}>Supprimer les tâches complétées</Button>
      </div>
    </footer>
  )
}

export default PiedDePage;