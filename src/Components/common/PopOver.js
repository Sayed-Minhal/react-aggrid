import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { columnDefinitions} from '../../shared';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  }
}));

export default function SimplePopover({toggleColumn, columns}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Toggle Columns
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        
		<ul className="popover">
			{ columns && 
				columns.map(item=>{
					return (
						<li key={item.colId}>
							<label className='capitalize'>
								<Checkbox 
									checked={!item.hide} 
									onChange={(e)=>toggleColumn(item)} 
									inputProps={{
										'aria-label': 'primary checkbox',
								}} />
									{item.colId}
									</label>
									</li>
					);
				})
			}
		</ul>
		
      </Popover>
    </div>
  );
}







