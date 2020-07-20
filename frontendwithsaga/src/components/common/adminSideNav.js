import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const TabPanel = (props) => {
    return (
        <Typography>
            {props.index === props.value && <Box >{props.children}</Box>}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            height: 224,
            color: 'black'
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
            color: 'black'
        },
    }
});

export const AdminSideNav = () => {
    const classes = useStyles();
    const [tabSelected, setTab] = useState(0)

    const activeTab = (e, newValue) => {
        setTab(newValue)
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={tabSelected}
                onChange={activeTab}
            >
                <Tab label="List Movies" color="black">List Movies</Tab>
                <Tab label="Carousel Images" />
                <Tab label="Contacts" />
            </Tabs>
            <TabPanel value={tabSelected} index={0}>
                123
            </TabPanel>
            <TabPanel value={tabSelected} index={1}>
                234
            </TabPanel>
            <TabPanel value={tabSelected} index={2}>
                345
            </TabPanel>
        </div>
    )
}