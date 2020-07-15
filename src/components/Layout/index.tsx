import React from 'react';

// export default function Layout() {
//     return(
//         <div>Olá</div>
//     )
// }

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';


const Layout: React.FC = ( ) => {
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
        </Grid >
    );
};

export default Layout;