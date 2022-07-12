import React from 'react';
import {logout}  from './firebase';

export default function Footer(props){
    return (
    <div>
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>          
        </footer>
    </div>
    )
}