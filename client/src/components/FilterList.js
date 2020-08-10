import React from "react";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function FilterList({ list, id, accessor }) {
  return (
    <>
      {list.map((item, index) => {
        return (
          <li key={id ? `${id}${index}` : item.id}>
            <FormControlLabel
              control={
                  <Checkbox
                    inputProps={{ 'aria-label': `${item} checkbox` }}
                  />
                }
                label={accessor ? item[accessor] : item}
            />
          </li>
        )
      })}
    </>
  )
}

export default FilterList;
