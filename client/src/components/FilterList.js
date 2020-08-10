import React from "react";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function FilterList({ list, id }) {
  return (
    <>
      {list.map((item, index) => {
        return (
          <li key={`${id}${index}`}>
            <FormControlLabel
              control={
                  <Checkbox
                    inputProps={{ 'aria-label': `${item} checkbox` }}
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
