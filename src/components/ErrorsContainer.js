import React from 'react';
import { ListItem, ListItemText, Alert } from '@mui/material';

const ErrorsContainer = ({ errorsBag }) => {
  const isAnArray = errorsBag instanceof Array && Array.isArray(errorsBag)
  return (
    <div>
      {
        isAnArray ? <List style={{ paddingTop: 0 }}>
          {errorsBag.map((err) => {
            return (
              <ListItem
                key={err}
                alignItems="flex-start"
                className="listItem"
                style={{
                  color: "#e31414",
                  marginTop: "4px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
              >
                <ListItemText disableTypography
                  sx={{ margin: 0, fontWeight: 'lighter', fontSize: '0.85rem', lineHeight: 1.5 }}
                  primary={err}
                />
              </ListItem>
            );
          })}
        </List>
          :
          <Alert severity='warning'>{errorsBag}</Alert>
      }
    </div>
  )
}

export default ErrorsContainer