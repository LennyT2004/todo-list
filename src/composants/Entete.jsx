import './Entete.scss';

import AssignmentIcon from '@mui/icons-material/Assignment';


function Entete() {

  return (
    <header className="Entete">
      <AssignmentIcon className='icone-entete' />
      <h2>TP - Gestionnaire de tâches</h2>
    </header>
  )
}

export default Entete;