import React from "react";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function FilterList({ list, id, clickCallback }) {
  return (
    <>
      {list.map((item, index) => {
        return (
          <li key={`${id}${index}`}>
            <FormControlLabel
              control={
                  <Checkbox
                    inputProps={{ 'aria-label': `${item} checkbox` }}
                    name={item}
                    onChange={clickCallback}
                  />
                }
                label={item}
            />
          </li>
        )
      })}
    </>
  )
}

export default FilterList;
