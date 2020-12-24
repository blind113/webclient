import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';    
import Perfil from './pages/Perfil';  
import HoraExtra from './pages/Pedidos/horaExtra';   
import JustFaltas from './pages/Pedidos/justFaltas';       
import  Dashboard  from './pages/Faturamento/Dashboard';

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Inicio />}/> 
            <Route path="/perfil" element={<Perfil />}/> 
            <Route path="/HorasExtras" element={<HoraExtra />}/> 
            <Route path="/JustFaltas" element={<JustFaltas />}/> 
            <Route path="/Faturamento" element={<Dashboard />}/> 
        </Routes>
    );
}