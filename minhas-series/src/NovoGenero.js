import React, { useState } from 'react'

const NovoGenero = () => {
    return (
        <div className="container">
            <h1>Novo Genêros</h1>
            <form>
                <div className="form-group">
                    <label for="name">Nome</label>
                    <input type="text" className="form-control" id="name" placeholder="Nome do Genêro" />
                </div>  
            </form>
        </div>

            )
        }
        
export default NovoGenero