import React from 'react';

// export default function Layout() {
//     return(
//         <div>Olá</div>
//     )
// }

import { Grid } from './styles';

import ServerList from '../ServerList';



const Layout: React.FC = ( ) => {
    return (
        <Grid>
            <ServerList>
                
            </ServerList>

        </Grid >
    );
};

export default Layout;