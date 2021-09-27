import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ModelS from './ModelS';
import ModelX from './ModelX';
import ModelT from './ModelT';
import '../Pages/styles/home.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 'fullwith', marginTop:'3%'}}>
      <div className="azul"></div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,backgroundColor:'#b5c8e9', paddingTop:'1%', paddingBottom:'1%'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered disableRipple>
          <Tab label="Model S" {...a11yProps(0)} />
          <Tab label="Model X" {...a11yProps(1)} />
          <Tab label="Model Y" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className="azul"></div>
      <TabPanel value={value} index={0}>
        <ModelS />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ModelX />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ModelT />
      </TabPanel>
    </Box>
  );
}