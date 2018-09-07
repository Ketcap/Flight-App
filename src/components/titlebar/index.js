import React from 'react'
import classes from './index.module.scss';

export default () => {
  return (
    <div className={classes.titlebar}>
      {['Havayolu', 'Kalkış', 'Varış', 'Aktarma/Süre', 'Fiyat', 'Satın Al'].map(e => (
        <div key={e}>
          {e}
        </div>
      ))}
    </div>
  )
}
