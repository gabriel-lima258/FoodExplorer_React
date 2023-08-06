import {Routes, Route} from 'react-router-dom';

import { EditFood } from '../pages/EditFood';
import { NewFood } from '../pages/NewFood';
import { Menu } from '../pages/Menu';
import { DetailsFood } from '../pages/Details';
import { Home } from '../pages/Home';

export function AppRoutes(){
    return(
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<NewFood/>}/>
            <Route path="/edit/:id" element={<EditFood/>}/>
            <Route path="/details/:id" element={<DetailsFood/>}/>
            <Route path="/menu" element={<Menu/>}/>
            
        </Routes>
    );
}