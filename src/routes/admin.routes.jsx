import {Routes, Route} from 'react-router-dom';

import { EditFood } from '../pages/EditFood';
import { NewFood } from '../pages/NewFood';
import { DetailsFood } from '../pages/Details';
import { Home } from '../pages/Home';

export function AdminRoutes(){
    return(
        <Routes>
            
            <Route path="/home" element={<Home/>}/>
            <Route path="/new" element={<NewFood/>}/>
            <Route path="/edit/:id" element={<EditFood/>}/>
            <Route path="/details/:id" element={<DetailsFood/>}/>
            
        </Routes>
    );
}