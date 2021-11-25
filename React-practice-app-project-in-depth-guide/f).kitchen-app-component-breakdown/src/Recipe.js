import React from 'react'

export default function Recipe({ name, cookTime, servings, instructions }) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>
                    {instructions}
                </div>
            </div>
        </div>
    )
}
