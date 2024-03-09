import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';

export const SideBarData = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/'
    },
    {
        title: 'Recruitment',
        icon: <PersonAddAltIcon />,
        link: '/Recruitment'
    },
    {
        title: 'Schedule',
        icon: <CalendarMonthIcon />,
        link: '/Schedule'
    },
    {
        title: 'Employee',
        icon: <BadgeIcon />,
        link: '/Employee'
    },
    {
        title: 'Department',
        icon: <BusinessIcon />,
        link: '/Department'
    },
    {
        title: 'Support',
        icon: <SupportAgentIcon />,
        link: '/Support'
    },
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        link: '/Settings'
    }
];
